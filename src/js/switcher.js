const themeToggle = document.getElementById('theme-toggle');
// Перевірити чи є вже збережена тема
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  document.body.classList.remove('light');
  themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});
