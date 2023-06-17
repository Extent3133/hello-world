let calculation = localStorage.getItem('calculation') || '';

document.querySelector('.display')
  .innerHTML = calculation;

function updateCalculation(value) {
  calculation += value;
  document.querySelector('.display')
    .innerHTML = calculation;
  localStorage.setItem('calculation', calculation)
}