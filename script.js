const toggleBtn = document.getElementById('contactBtn');
const form = document.getElementById('contactForm');
 
toggleBtn.addEventListener('click', () => {
  form.style.display = (form.style.display === 'block') ? 'none' : 'block';
});
 
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  alert(`Thanks ${name}, we received your message!`);
  form.reset();
  form.style.display = 'none';
});