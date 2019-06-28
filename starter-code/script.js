/* eslint-disable no-loop-func */
/* eslint-disable max-len */
/* eslint-disable func-names */
/* eslint-disable prefer-destructuring */
let canvasSizing;
let endGame;
let chosenQuestion;
let questionStatement;
let answers;
let money = 0;
let earnedMoney = 0;
let name1;
let name2;
let players;
let pig1Audio = new Audio('../audio/pigsound.mp3');
let pig2Audio = new Audio('../audio/ofarm.mp3');
let correctAudio = new Audio('../audio/Correct-answer.mp3');
let wrongAudio = new Audio('../audio/Wrong-answer.mp3');
let clockAudio = new Audio('../audio/clock.mp3');
const numQuestions = document.getElementById('number-of-questions');
const questionElement = document.getElementById('question-text');
const buttonAnswer = document.querySelectorAll('.btn-answer');
let pickedQuestions = [];
const btnOnePlayer = document.getElementById('btn-one-player');
const btnTwoPlayers = document.getElementById('btn-two-players');
const playerNameScreen2 = document.getElementById('name');
const initialScreen = document.getElementById('initial-screen');

time.height = 40;

function finishGame(nOfPlayers) {
  if (nOfPlayers === 1) {
    setInterval(() => {
      endGame = document.getElementById('lost').removeAttribute('class');
    }, 2000);
  }
}


const interval = () => {
  time.width = `${size}`;
  if (size > 0) {
    size -= 0.4;
  } else size = 0;
};

/* It chooses the question from the array given and pushs the selected one to an array of alreadyChoseen */
const getQuestion = (arrayOfQuestions) => {
  let firstIndex = Math.floor(Math.random() * arrayOfQuestions.length);
  chosenQuestion = arrayOfQuestions[firstIndex];
  if (pickedQuestions.length < 16) {
    while (pickedQuestions.includes(chosenQuestion)) {
      let index = Math.floor(Math.random() * arrayOfQuestions.length);
      chosenQuestion = arrayOfQuestions[index];
    }
    pickedQuestions.push(chosenQuestion);
    questionStatement = chosenQuestion.question;
    answers = chosenQuestion.answers;
  } else {
    document.getElementById('winner-1-player').removeAttribute('class');
  }
};

/* It writes the questions in the HTML elements */
const writeQuestions = () => {
  questionElement.innerHTML = questionStatement;
  buttonAnswer.forEach((btnAns, i) => {
    btnAns.innerHTML = answers[i];
  });
};

const elementsNormal = () => {
  buttonAnswer.forEach((btnAns) => {
    btnAns.setAttribute('class', 'btn-answer');
    btnAns.disabled = false;
  });
  document.querySelector('.flip-card').setAttribute('class', 'flip-card');
};


/* It sees if we have chosen the right answer */
const chooseRight = (choosenAnswer) => {
  if (answers[choosenAnswer] === answers[chosenQuestion.correct]) {
    return true;
  }
  return (chosenQuestion.correct);
};


const loadElements = (numOfPlayers) => {
  clockAudio.play();
  getQuestion(questions);
  writeQuestions();
  elementsNormal();
  stopAnimate()
  animateScript();
  endGame = setTimeout(() => {
    document.getElementById('lost').removeAttribute('class');
    clockAudio.pause();
  }, 10000);
  size = 400;
  canvasSizing = setInterval(interval, 10);
  if (numOfPlayers == 1) {
    numQuestions.setAttribute('class', 'visibility');
  }
};

const gainedMoney = (m) => {
  switch (m) {
    case 0:
      money = 1000;
      break;
    case 1000:
      money = 2000;
      break;
    case 2000:
      money = 3000;
      break;
    case 3000:
      money = 4000;
      break;
    case 4000:
      money = 5000;
      break;
    case 5000:
      money = 10000;
      break;
    case 10000:
      money = 20000;
      break;
    case 20000:
      money = 30000;
      break;
    case 30000:
      money = 40000;
      break;
    case 40000:
      money = 50000;
      break;
    case 50000:
      money = 100000;
      break;
    case 100000:
      money = 200000;
      break;
    case 200000:
      money = 300000;
      break;
    case 300000:
      money = 400000;
      break;
    case 400000:
      money = 500000;
      break;
    case 500000:
      money = 1000000;
      break;
    default:
  }
  document.getElementById('dinheiro').innerHTML = `${money}`;
  document.getElementById('dinheiro-ganho').innerHTML = `$ ${money}`;
}

let numOfQuestions = 1;

buttonAnswer.forEach((btnAns, i) => {
  btnAns.onclick = () => {
    if (chooseRight(i) === true) {
      clockAudio.pause();
      correctAudio.play();
      gainedMoney(money);
      btnAns.setAttribute('class', 'btn-answer rigth');
      btnAns.disabled = true;
      numQuestions.innerHTML = `${numOfQuestions += 1}/15`;
      setTimeout(() => {
        document.querySelector('.flip-card').setAttribute('class', 'flip-card active');
      }, 1000);
      clearInterval(canvasSizing);
      clearTimeout(endGame);
      setTimeout(loadElements, 1800);
    } else {
      clockAudio.pause();
      wrongAudio.play();
      btnAns.setAttribute('class', 'btn-answer wrong');
      buttonAnswer[chooseRight(i)].setAttribute('class', 'btn-answer rigth');
      finishGame(players);
      document.querySelector('.flip-card').setAttribute('class', 'flip-card');
      clearInterval(canvasSizing);
    }
  };
});


// Clicking on this button goes to the 1player screen where he adds his name and level of game
btnOnePlayer.onclick = function () {
  document.getElementById('initial-screen').classList.add('visibility');
  document.getElementById('player-1-choice').classList.remove('visibility');
  players = 1;
};

// Ok button for one player that initializes the game
document.getElementById('next').onclick = function () {
  name1 = document.getElementById('player-1').value.toUpperCase();
  playerNameScreen2.innerHTML = `${name1}`;
  document.getElementById('player-1-choice').classList.add('visibility');
  document.getElementById('game-interface').classList.remove('visibility');
  loadElements(players);
};

document.getElementById('play-again').onclick = function () {
  window.location.reload();
};
document.getElementById('play-again1').onclick = function () {
  window.location.reload();
};


btnOnePlayer.addEventListener('mouseover', () => {
  pig1Audio.play();
});

btnTwoPlayers.addEventListener('mouseover', () => {
  pig2Audio.play();
});
