// Ricerca dinamica per testo
function filterProjects() {
  const searchInput = document.getElementById('searchBar').value.toLowerCase();
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const text = card.querySelector('p').textContent.toLowerCase();
    card.style.display = title.includes(searchInput) || text.includes(searchInput) ? 'block' : 'none';
  });
}

// Filtraggio per categoria
function filterCategory(category, event) {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  cards.forEach(card => {
    const categories = card.dataset.category.split(' ');
    card.style.display = (category === 'all' || categories.includes(category)) ? 'block' : 'none';
  });
}

// ===== SCROLLABLE CARDS =====
function scrollLeft() {
  const container = document.getElementById("scrollContent");
  container.scrollBy({ left: -window.innerWidth * 0.8, behavior: 'smooth' });
}

function scrollRight() {
  const container = document.getElementById("scrollContent");
  container.scrollBy({ left: window.innerWidth * 0.8, behavior: 'smooth' });
}

