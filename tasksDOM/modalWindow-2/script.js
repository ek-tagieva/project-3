const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const overlay = document.getElementById('overlay');

openModalBtn.addEventListener('click', function() {
  overlay.style.display = 'block';
});

closeModalBtn.addEventListener('click', function() {
  overlay.style.display = 'none';
});

overlay.addEventListener('click', function(event) {
  if (event.target === overlay) {
    overlay.style.display = 'none';
  }
});
