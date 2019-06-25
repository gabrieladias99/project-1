/* eslint-disable no-loop-func */
/* eslint-disable max-len */
/* eslint-disable func-names */
/* eslint-disable prefer-destructuring */
let canvasSizing;

function interval() {
  time.width = `${size}`;
  if (size > 0) {
    size -= 0.4;
  } else size = 0;
}

const questions = [
  {
    level: 'easy',
    question: 'Em que estado brasileiro nasceu a apresentadora Xuxa?',
    answers: ['Rio de Janeiro', 'Rio Grande do Sul', 'Santa Catarina', 'Goiás'],
    correct: 1,
  },
  {
    level: 'easy',
    question: 'Qual o nome dado ao estado da água em forma de gelo?',
    answers: ['Liquido', 'Sólido', 'Gasoso', 'Vaporoso'],
    correct: 1,
  },
  {
    level: 'easy',
    question: 'Quem é a namorada do Mickey?',
    answers: ['Margarida', 'Minnie', 'A Pequena Sereia', 'Olivia Palito'],
    correct: 1,
  },
  {
    level: 'easy',
    question: 'Fidel Castro nasceu em que país?',
    answers: ['Jamaica', 'Cuba', 'El Salvador', 'México'],
    correct: 1,
  },
  {
    level: 'easy',
    question: 'Qual é o signo do zodíaco de quem nasce no dia do ano-novo?',
    answers: ['Virgem', 'Aquario', 'Capricornio', 'Áries'],
    correct: 2,
  },
  {
    level: 'easy',
    question: 'Qual é o nome da embarcação típica do litoral nordestino brasileiro?',
    answers: ['Submarino', 'Jet Ski', 'Jangada', 'Lancha'],
    correct: 2,
  },
];

let chosenQuestion;
let questionStatement;
let answers;
const questionElement = document.getElementById('question-text');
const buttonElement = document.getElementsByTagName('button');
const mutableArrayOfQuestions = [];

/* It chooses the question from the array given and pushs the selected one to an array of alreadyChoseen */
function getQuestion(arrayOfQuestions) {
  let firstIndex = Math.floor(Math.random() * arrayOfQuestions.length);
  chosenQuestion = arrayOfQuestions[firstIndex];
  if (mutableArrayOfQuestions.length < arrayOfQuestions.length) {
    while (mutableArrayOfQuestions.includes(chosenQuestion)) {
      console.log('banana')
      let index = Math.floor(Math.random() * arrayOfQuestions.length);
      chosenQuestion = arrayOfQuestions[index];
    }
  }
  mutableArrayOfQuestions.push(chosenQuestion);
  questionStatement = chosenQuestion.question;
  answers = chosenQuestion.answers;
}

/* It writes the questions in the HTML elements */
function writeQuestions() {
  questionElement.innerHTML = questionStatement;
  for (let i = 0; i < 4; i += 1) {
    buttonElement[i].innerHTML = answers[i];
  }
}

function lost(){

}

function elementsNormal() {
  for (let i = 0; i < 4; i += 1) {
    buttonElement[i].setAttribute('class', 'btn-answer');
  }
  document.querySelector('.flip-card').setAttribute('class', 'flip-card');
}

function loadElements() {
  getQuestion(questions);
  writeQuestions();
  elementsNormal();
  size = 400;
  canvasSizing = setInterval(interval, 10);
}

/* It calls the two functions that put the elements on screen when it is onload */
window.onload = function () {
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
for (let i = 0; i < 4; i += 1) {
  buttonElement[i].onclick = function () {
    if (chooseRight(i) === true) {
      document.getElementsByClassName('dinheiro').innerHTML = `${money += 1000}`;
      buttonElement[i].setAttribute('class', 'btn-answer rigth');
      setTimeout(function(){document.querySelector('.flip-card').setAttribute('class', 'flip-card active')},1000);
      clearInterval(canvasSizing);
      setTimeout(loadElements, 1800);
    } else {
      buttonElement[i].setAttribute('class', 'btn-answer wrong');
      buttonElement[chooseRight(i)].setAttribute('class', 'btn-answer rigth');
      setTimeout(function(){document.getElementById('lost').removeAttribute('class')},2000);
      clearInterval(canvasSizing);
    }
  };
}
