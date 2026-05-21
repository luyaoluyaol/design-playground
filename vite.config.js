import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

function readApiPort() {
  if (process.env.VITE_API_PORT) return process.env.VITE_API_PORT;
  try {
    const p = fs.readFileSync(path.resolve(__dirname, '.api-port'), 'utf8').trim();
    if (p) return p;
  } catch (_) {}
  return '3001';
}

const apiPort = readApiPort();

export default defineConfig({
  server: {
    proxy: {
      '/api': `http://localhost:${apiPort}`,
    },
  },
});
