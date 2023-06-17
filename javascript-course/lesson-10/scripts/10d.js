function toggleButton() {
  const buttonElement = document.querySelector('.js-button')

  if (!buttonElement.classList.contains('is-toggled')) {
    buttonElement.classList.add('is-toggled')
  } else {
    buttonElement.classList.remove('is-toggled')
  }
}