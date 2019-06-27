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
const buttonBegin = document.getElementsByClassName('btn-begin');
const playerNameScreen2 = document.getElementById('name');
const initialScreen = document.getElementById('initial-screen');

time.height = 40;


buttonBegin[0].onclick = function () {
  name1 = prompt('Single Player, please enter your name', 'PLAYER 1');
  playerNameScreen2.innerHTML = `${name1}`;
  initialScreen.style.zIndex = '0';
  initialScreen.setAttribute('class', 'visibility');
  players = 1;
  console.log(players)
  loadElements(players);
};

buttonBegin[1].onclick = function () {
  name1 = prompt('First Player, please enter your name', 'Player 1');
  name2 = prompt('Second Player, please enter your name', 'Player 2');
  playerNameScreen2.innerHTML = `${name1}`;
  initialScreen.style.zIndex = '0';
  initialScreen.setAttribute('class', 'visibility');
  players = 2;
  loadElements(players);
};

const finishGame = (nOfPlayers) => {
  if (nOfPlayers === 1) {
    setInterval(() => {
      endGame = document.getElementById('lost').removeAttribute('class');
    }, 2000);
  }
};

const loadElements = (numOfPlayers) => {
  getQuestion(questions);
  writeQuestions();
  elementsNormal();
  stopAnimate()
  animateScript();
  size = 400;
  canvasSizing = setInterval(interval, 10);
  if (numOfPlayers === 1) {
    numQuestions.setAttribute('class', 'visibility');
  }
}

const interval = () => {
  time.width = `${size}`;
  (size > 0) ? size -= 0.4 : size = 0;
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
    document.getElementById('lost').removeAttribute('class');
  }
};

/* It writes the questions in the HTML elements */
const writeQuestions = () => {
  questionElement.innerHTML = questionStatement;
  for (let i = 0; i < 4; i += 1) {
    buttonAnswer[i].innerHTML = answers[i];
  }
};

function elementsNormal() {
  for (let i = 0; i < 4; i += 1) {
    buttonAnswer[i].setAttribute('class', 'btn-answer');
    buttonAnswer[i].disabled = false;
  }
  document.querySelector('.flip-card').setAttribute('class', 'flip-card');
}


/* It sees if we have chosen the right answer */
function chooseRight(choosenAnswer) {
  if (answers[choosenAnswer] === answers[chosenQuestion.correct]) {
    return true;
  }
  return (chosenQuestion.correct);
}

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

