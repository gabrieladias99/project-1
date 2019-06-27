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
const numQuestions = document.getElementById('number-of-questions');
const questionElement = document.getElementById('question-text');
const buttonAnswer = document.querySelectorAll('.btn-answer');
const mutableArrayOfQuestions = [];
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
  if (mutableArrayOfQuestions.length < arrayOfQuestions.length) {
    while (mutableArrayOfQuestions.includes(chosenQuestion)) {
      let index = Math.floor(Math.random() * arrayOfQuestions.length);
      chosenQuestion = arrayOfQuestions[index];
    }
    mutableArrayOfQuestions.push(chosenQuestion);
    questionStatement = chosenQuestion.question;
    answers = chosenQuestion.answers;
  } else {
    document.getElementById('lost').removeAttribute('class')
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
  getQuestion(questions);
  writeQuestions();
  elementsNormal();
  stopAnimate()
  animateScript();
  size = 400;
  canvasSizing = setInterval(interval, 10);
  if (numOfPlayers == 1) {
    numQuestions.setAttribute('class', 'visibility');
  }
};

let numOfQuestions = 1;

buttonAnswer.forEach((btnAns, i) => {
  btnAns.onclick = () => {
    if (chooseRight(i) === true) {
      document.getElementById('dinheiro').innerHTML = `${money += 1000}`;
      document.getElementById('dinheiro-ganho').innerHTML = `$ ${earnedMoney += 1000}`;
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
      btnAns.setAttribute('class', 'btn-answer wrong');
      buttonAnswer[chooseRight(i)].setAttribute('class', 'btn-answer rigth');
      finishGame(players);
      document.querySelector('.flip-card').setAttribute('class', 'flip-card');
      clearInterval(canvasSizing);
    }
  };
});


// Clicking on this button make the inputs appears for 1 player
btnOnePlayer.onclick = function () {
  document.getElementById('initial-screen').setAttribute('class', 'visibility');
  players = 1;
};

// Ok button for one player that initializes the game
document.getElementById('next').onclick = function () {
  name1 = document.getElementById('player-1').value.toUpperCase();
  playerNameScreen2.innerHTML = `${name1}`;
  document.getElementById('player-1-choice').setAttribute('class', 'visibility');
  document.getElementById('game-interface').removeAttribute('class');
  loadElements(players);
};

document.getElementById('play-again').onclick = function () {
  document.getElementById('initial-screen').removeAttribute('class');
}

// // Cliking on this button make the inputs appears for 2 players
// btnTwoPlayers.onclick = function () {
//   document.getElementById('player-1-p2').removeAttribute('class');
//   document.getElementById('player-2-p2').removeAttribute('class');
//   document.getElementById('btn-ok-player2').removeAttribute('class');
//   players = 2;
// };

// // Ok button for two players that initiliazes the game
// document.getElementById('btn-ok-player2').onclick = function () {
//   name1 = document.getElementById('player-1-p2').value.toUpperCase();
//   name2 = document.getElementById('player-2-p2').value.toUpperCase();
//   playerNameScreen2.innerHTML = `${name1}`;
//   initialScreen.setAttribute('class', 'visibility');
//   loadElements(players);
// };
