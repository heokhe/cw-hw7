// Tabs
const buttons = document.querySelectorAll('nav > button')
const mains = document.querySelectorAll('main')
function showTab(index) {
  buttons.forEach(btn => btn.classList.remove('active'))
  buttons[index].classList.add('active')
  mains.forEach(main => main.classList.remove('active'))
  mains[index]?.classList.add('active')
}
showTab(0)
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    showTab(index)
  })
})

// Contact form
/*document.querySelector('.contact form').addEventListener('submit', event => {
  event.preventDefault()
  if (confirm('Are you sure the information is correct?')) {
    alert('Message sent ✅')
  }
})*/
