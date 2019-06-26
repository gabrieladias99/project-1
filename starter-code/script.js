/* eslint-disable no-loop-func */
/* eslint-disable max-len */
/* eslint-disable func-names */
/* eslint-disable prefer-destructuring */
let canvasSizing;
let endGame
let chosenQuestion;
let questionStatement;
let answers;
const questionElement = document.getElementById('question-text');
const buttonAnswer = document.getElementsByClassName('btn-answer');
const mutableArrayOfQuestions = [];
const buttonBegin = document.getElementsByClassName('btn-begin');
time.height = 40;


function interval() {
  time.width = `${size}`;
  if (size > 0) {
    size -= 0.4;
  } else size = 0;
}



/* It chooses the question from the array given and pushs the selected one to an array of alreadyChoseen */
function getQuestion(arrayOfQuestions) {
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
}



/* It writes the questions in the HTML elements */
function writeQuestions() {
  questionElement.innerHTML = questionStatement;
  for (let i = 0; i < 4; i += 1) {
    buttonAnswer[i].innerHTML = answers[i];
  }
}

function elementsNormal() {
  for (let i = 0; i < 4; i += 1) {
    buttonAnswer[i].setAttribute('class', 'btn-answer');
    buttonAnswer[i].disabled = false;
  }
  document.querySelector('.flip-card').setAttribute('class', 'flip-card');
}

function loadElements() {
  endGame = setTimeout(function () { document.getElementById('lost').removeAttribute('class') }, 10000);
  getQuestion(questions);
  writeQuestions();
  elementsNormal();
  stopAnimate()
  animateScript();
  size = 400;
  canvasSizing = setInterval(interval, 10);
}

let name1
buttonBegin[0].onclick = function () {
  name1 = prompt('Single Player, please enter your name', 'Player 1');
  document.getElementById('name').innerHTML= `${name1}`;
  document.getElementById('initial-screen').style.zIndex = '0';
  document.getElementById('initial-screen').setAttribute('class', 'visibility');
  loadElements();
};

buttonBegin[1].onclick = function () {
  name1 = prompt('First Player, please enter your name', 'Player 1');
  name2 = prompt('Second Player, please enter your name', 'Player 2');
  document.getElementById('name').innerHTML= `${name1}`;
  document.getElementById('initial-screen').style.zIndex = "0";
  document.getElementById('initial-screen').setAttribute('class', 'visibility');
  loadElements();
};

/* It sees if we have chosen the right answer */
function chooseRight(choosenAnswer) {
  if (answers[choosenAnswer] === answers[chosenQuestion.correct]) {
    return true;
  }
  return (chosenQuestion.correct);
}

let money = 0;
let earnedMoney = 0
for (let i = 0; i < 4; i += 1) {
  buttonAnswer[i].onclick = function () {
    if (chooseRight(i) === true) {
      document.getElementById('dinheiro').innerHTML = `${money += 1000}`;
      document.getElementById('dinheiro-ganho').innerHTML = `$ ${earnedMoney += 1000}`;
      buttonAnswer[i].setAttribute('class', 'btn-answer rigth');
      buttonAnswer[i].disabled = true;
      setTimeout(function () { document.querySelector('.flip-card').setAttribute('class', 'flip-card active') }, 1000);
      clearInterval(canvasSizing);
      clearTimeout(endGame);
      setTimeout(loadElements, 1800);
    } else {
      buttonAnswer[i].setAttribute('class', 'btn-answer wrong');
      buttonAnswer[chooseRight(i)].setAttribute('class', 'btn-answer rigth');
      setTimeout(function () { document.getElementById('lost').removeAttribute('class') }, 2000);
      document.querySelector('.flip-card').setAttribute('class', 'flip-card');
      clearInterval(canvasSizing);
    }
  };
}
