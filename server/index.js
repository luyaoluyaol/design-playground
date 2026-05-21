const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const API_PORT_FILE = path.join(__dirname, '..', '.api-port');

const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || 'http://localhost:5173,http://localhost:5174')
  .split(',')
  .map(s => s.trim());

app.use(helmet());
app.use(cors({ origin: ALLOWED_ORIGINS }));
app.use(express.json({ limit: '10mb' }));

const writeLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use((req, res, next) => {
  if (req.method === 'GET' || req.method === 'HEAD' || req.method === 'OPTIONS') return next();
  return writeLimiter(req, res, next);
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

function writeApiPortFile(port) {
  try {
    fs.writeFileSync(API_PORT_FILE, String(port));
  } catch (err) {
    console.warn(`Could not write ${API_PORT_FILE}: ${err.message}`);
  }
}

function cleanupApiPortFile() {
  try { fs.unlinkSync(API_PORT_FILE); } catch (_) {}
}

function listenWithFallback(port, attemptsLeft = 10) {
  const server = app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    writeApiPortFile(port);
    process.on('exit', cleanupApiPortFile);
    process.on('SIGINT', () => { cleanupApiPortFile(); process.exit(0); });
    process.on('SIGTERM', () => { cleanupApiPortFile(); process.exit(0); });
  });
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE' && attemptsLeft > 0) {
      console.log(`Port ${port} in use, trying ${port + 1}...`);
      listenWithFallback(port + 1, attemptsLeft - 1);
    } else {
      throw err;
    }
  });
}

listenWithFallback(Number(PORT));
