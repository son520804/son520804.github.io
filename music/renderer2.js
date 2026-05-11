// Enhanced renderer: fetch /music/data.json and populate a responsive card grid.

function createPlaceholderThumb(title) {
  const div = document.createElement('div');
  div.className = 'thumb-placeholder';
  const span = document.createElement('span');
  span.textContent = (title || '').slice(0,1).toUpperCase();
  div.appendChild(span);
  return div;
}

function makeCard(item) {
  const card = document.createElement('article');
  card.className = 'music-card';

  const thumbWrap = document.createElement('div');
  thumbWrap.className = 'music-thumb';
  if (item.thumbnail) {
    const img = document.createElement('img');
    img.src = item.thumbnail;
    img.alt = item.title || '';
    thumbWrap.appendChild(img);
  } else {
    thumbWrap.appendChild(createPlaceholderThumb(item.title));
  }

  const meta = document.createElement('div');
  meta.className = 'music-meta';
  const h3 = document.createElement('h3');
  h3.className = 'music-title';
  h3.textContent = item.title || item.file;
  const year = document.createElement('div');
  year.className = 'music-year';
  year.textContent = item.year || '';
  const desc = document.createElement('p');
  desc.className = 'music-desc';
  desc.textContent = item.description || '';

  meta.appendChild(h3);
  if (item.year) meta.appendChild(year);
  if (desc.textContent) meta.appendChild(desc);

  const controls = document.createElement('div');
  controls.className = 'music-controls';
  const audio = document.createElement('audio');
  audio.controls = true;
  audio.preload = 'none';
  const src = document.createElement('source');
  src.src = item.file;
  src.type = 'audio/mpeg';
  audio.appendChild(src);
  controls.appendChild(audio);

  card.appendChild(thumbWrap);
  card.appendChild(meta);
  card.appendChild(controls);

  // Store data for filtering
  card.__data = item;

  // Toggle expanded on click (but not when interacting with audio controls)
  card.addEventListener('click', function(e) {
    const tag = e.target && e.target.tagName && e.target.tagName.toLowerCase();
    if (tag === 'audio' || tag === 'source' || tag === 'a') return;
    card.classList.toggle('expanded');
  });

  return card;
}

async function loadMusic() {
  try {
    const res = await fetch('/music/data.json');
    const data = await res.json();
    const grid = document.getElementById('music-grid');
    if (!grid) return;
    grid.innerHTML = '';

    // sort by title
    data.sort((a,b) => (a.title||'').localeCompare(b.title||''));

    // populate filter select with years
    const years = new Set();
    data.forEach(d => { if (d.year) years.add(d.year); });
    const filter = document.getElementById('music-filter');
    if (filter && years.size) {
      Array.from(years).sort().reverse().forEach(y => {
        const opt = document.createElement('option'); opt.value = y; opt.textContent = y; filter.appendChild(opt);
      });
    }

    data.forEach(item => {
      const card = makeCard(item);
      grid.appendChild(card);
    });

    if (!data.length) grid.innerHTML = '<p class="muted">No tracks found.</p>';

    if (filter) {
      filter.addEventListener('change', function(){
        const val = filter.value;
        Array.from(grid.children).forEach(card => {
          const y = (card.__data && card.__data.year) || '';
          card.style.display = (val === 'all' || !val) ? '' : (y == val ? '' : 'none');
        });
      });
    }
  } catch (err) {
    console.error('Failed to load music data', err);
    const grid = document.getElementById('music-grid');
    if (grid) grid.innerHTML = '<p class="muted">Unable to load music catalog.</p>';
  }
}

function loadGallery(){
  // Placeholder: render gallery items if data.json includes `gallery` arrays.
}

window.addEventListener('DOMContentLoaded', () => { loadMusic(); loadGallery(); });
