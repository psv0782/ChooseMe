const themeToggle = document.getElementById('theme-toggle');

// Перевірка при завантаженні
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  document.body.classList.remove('light');
  themeToggle.checked = true;
} else {
  document.body.classList.add('light');
}

// Зміна теми
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
