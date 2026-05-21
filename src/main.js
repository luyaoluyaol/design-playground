const app = document.querySelector('#app');

const posts = [
  {
    user: 'maya.codes',
    avatar: 'https://i.pravatar.cc/100?img=47',
    location: 'Brooklyn, NY',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80',
    caption: 'golden hour hits different out here ✨',
    likes: 1284,
    comments: 42,
    time: '2h',
  },
  {
    user: 'theo.builds',
    avatar: 'https://i.pravatar.cc/100?img=12',
    location: 'Lisbon, Portugal',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80',
    caption: 'pastel rooftops & espresso mornings',
    likes: 892,
    comments: 18,
    time: '5h',
  },
  {
    user: 'lin.shoots',
    avatar: 'https://i.pravatar.cc/100?img=32',
    location: 'Kyoto',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&q=80',
    caption: 'quiet streets, loud feelings 🍂',
    likes: 2410,
    comments: 73,
    time: '1d',
  },
];

const heartIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
const commentIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`;
const shareIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
const bookmarkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`;
const moreIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>`;

const homeIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
const searchIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
const plusIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`;
const reelsIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`;

const fmt = (n) => n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k' : n;

app.innerHTML = `
  <div class="phone">
    <div class="statusbar">
      <span>9:41</span>
      <span class="status-right">
        <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor"><path d="M1 7h2v2H1zm4-2h2v4H5zm4-2h2v6H9zm4-2h2v8h-2z"/></svg>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M1 4a9 9 0 0 1 12 0M3 6a6 6 0 0 1 8 0M5 8a3 3 0 0 1 4 0"/></svg>
        <svg width="22" height="10" viewBox="0 0 22 10" fill="none"><rect x="1" y="1" width="17" height="8" rx="2" stroke="currentColor"/><rect x="3" y="3" width="13" height="4" rx="1" fill="currentColor"/><rect x="19" y="3.5" width="1.5" height="3" rx="0.5" fill="currentColor"/></svg>
      </span>
    </div>

    <nav class="menubar">
      <h1 class="logo">glimpse</h1>
      <div class="nav-actions">
        <button class="icon-btn" aria-label="Notifications">
          ${heartIcon}
        </button>
        <button class="icon-btn" aria-label="Messages">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    </nav>

    <main class="feed">
      ${posts.map((p, i) => `
        <article class="post" data-i="${i}">
          <header class="post-head">
            <div class="post-user">
              <div class="avatar-ring">
                <img src="${p.avatar}" alt="${p.user}" class="avatar"/>
              </div>
              <div class="post-meta">
                <span class="username">${p.user}</span>
                <span class="location">${p.location}</span>
              </div>
            </div>
            <button class="icon-btn small" aria-label="More">${moreIcon}</button>
          </header>

          <div class="post-image-wrap">
            <img src="${p.image}" alt="" class="post-image" loading="lazy"/>
          </div>

          <div class="post-actions">
            <div class="actions-left">
              <button class="action-btn like-btn" data-i="${i}" aria-label="Like">${heartIcon}</button>
              <button class="action-btn" aria-label="Comment">${commentIcon}</button>
              <button class="action-btn" aria-label="Share">${shareIcon}</button>
            </div>
            <button class="action-btn" aria-label="Save">${bookmarkIcon}</button>
          </div>

          <div class="post-body">
            <div class="likes" data-i="${i}">${fmt(p.likes)} likes</div>
            <p class="caption">
              <span class="username">${p.user}</span> ${p.caption}
            </p>
            <button class="comments-link">View all ${p.comments} comments</button>
            <span class="time">${p.time} ago</span>
          </div>
        </article>
      `).join('')}
    </main>

    <nav class="tabbar">
      <button class="tab active" aria-label="Home">${homeIcon}</button>
      <button class="tab" aria-label="Search">${searchIcon}</button>
      <button class="tab" aria-label="Create">${plusIcon}</button>
      <button class="tab" aria-label="Reels">${reelsIcon}</button>
      <button class="tab" aria-label="Profile">
        <img src="https://i.pravatar.cc/100?img=5" alt="me" class="tab-avatar"/>
      </button>
    </nav>
  </div>
`;

const state = posts.map(p => ({ liked: false, likes: p.likes }));

document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const i = +btn.dataset.i;
    state[i].liked = !state[i].liked;
    state[i].likes += state[i].liked ? 1 : -1;
    btn.classList.toggle('liked', state[i].liked);
    const likesEl = document.querySelector(`.likes[data-i="${i}"]`);
    likesEl.textContent = `${fmt(state[i].likes)} likes`;
    btn.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(1.25)' }, { transform: 'scale(1)' }],
      { duration: 280, easing: 'ease-out' }
    );
  });
});

document.querySelectorAll('.post-image-wrap').forEach(wrap => {
  let lastTap = 0;
  wrap.addEventListener('click', () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      const post = wrap.closest('.post');
      const likeBtn = post.querySelector('.like-btn');
      if (!likeBtn.classList.contains('liked')) likeBtn.click();
      const burst = document.createElement('div');
      burst.className = 'heart-burst';
      burst.innerHTML = heartIcon;
      wrap.appendChild(burst);
      setTimeout(() => burst.remove(), 700);
    }
    lastTap = now;
  });
});

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});
