function subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-button');

  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerText = 'Subscribed';
    buttonElement.classList.add('is-subscribed')
  } else {
    buttonElement.innerText = 'Subscribe';
    buttonElement.classList.remove('is-subscribed')
  }
}

function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  document.querySelector('.js-total-cost')
    .innerHTML = '';
  document.querySelector('.js-error-message')
    .innerHTML = '';

  if (cost < 0) {
    document.querySelector('.js-error-message')
      .innerHTML = 'Error: cost cannot be less than $0';
    return;
  } 
  
  if (cost < 40) {
    cost = cost + 10;
  };

  document.querySelector('.js-total-cost')
      .innerHTML = `$${cost}`;
}