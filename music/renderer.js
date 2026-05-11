// Simple renderer: fetch music/data.json and populate music-grid and gallery-grid

async function loadMusic() {
  try {
    const res = await fetch('/music/data.json');
    const data = await res.json();
    const grid = document.getElementById('music-grid');
    grid.innerHTML = '';

    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'music-item';

      const title = document.createElement('div');
      title.className = 'music-title';
      title.textContent = `${item.title} (${item.year || ''})`;

      const desc = document.createElement('div');
      desc.className = 'music-desc';
      desc.textContent = item.description || '';

      const audio = document.createElement('audio');
      audio.controls = true;
      audio.preload = 'none';
      const src = document.createElement('source');
      src.src = item.file;
      src.type = 'audio/mpeg';
      audio.appendChild(src);

      card.appendChild(title);
      if (desc.textContent) card.appendChild(desc);
      card.appendChild(audio);

      grid.appendChild(card);
    });
  } catch (err) {
    console.error('Failed to load music data', err);
    const grid = document.getElementById('music-grid');
    grid.innerHTML = '<p class="muted">Failed to load music catalog.</p>';
  }
}

function loadGallery(){
  // For now, optionally load images listed in data.json with `gallery` array per item.
  // Keep this simple: if an images folder exists, you can manually add <img> tags to `music-gallery`.
}

window.addEventListener('DOMContentLoaded', () => { loadMusic(); loadGallery(); });
