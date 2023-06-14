let score = JSON.parse(localStorage.getItem('score')) || {
  uzvaras: 0,
  zaudes: 0,
  nicas: 0
};

updateScoreElement();

/*
if (!score) {
  score = {
    uzvaras: 0,
    zaudes: 0,
    nicas: 0
  };
}
*/
  
function playGame (playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'Zaude.';
    } else if (computerMove === 'paper') {
      result = 'Uzvara.';
    } else if (computerMove === 'scissors') {
      result = 'Niča.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'Uzvara.';
    } else if (computerMove === 'paper') {
      result = 'Niča.';
    } else if (computerMove === 'scissors') {
      result = 'Zaude.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Niča.';
    } else if (computerMove === 'paper') {
      result = 'Zaude.';
    } else if (computerMove === 'scissors') {
      result = 'Uzvara.';
    }
  }

  if (result === 'Uzvara.') {
    score.uzvaras += 1;
  } else if (result === 'Zaude.') {
    score.zaudes += 1;
  } else if (result === 'Tie.') {
    score.nicas += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `Tavs gājiens = 
      <img src="images/${playerMove}-emoji.png" class="move-icon"> 
      <img src="images/${computerMove}-emoji.png" class="move-icon"> =
      Kompja gājiens`
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Uzvaras: ${score.uzvaras}, Zaudes: ${score.zaudes}, Ničas: ${score.nicas}`;
};

function pickComputerMove () {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
  computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}