const theme = document.getElementById('theme')

theme.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')

  if (document.body.classList.contains('dark-theme')) {
    theme.classList = 'fa-solid fa-fill fa-2x'
  } else {
    theme.classList = 'fa-solid fa-fill-drip fa-2x'
  }

  localStorage.setItem('theme', document.body.classList)
  localStorage.setItem('icon', theme.classList)
})

if (localStorage.getItem('theme')) {
  document.body.classList.add(localStorage.getItem('theme'))
  theme.classList = localStorage.getItem('icon')
}
