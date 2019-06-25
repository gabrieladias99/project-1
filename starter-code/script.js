/* eslint-disable max-len */
/* eslint-disable func-names */
/* eslint-disable prefer-destructuring */
const questions = [
  {
    id: 0,
    level: 'easy',
    question: 'Em que estado brasileiro nasceu a apresentadora Xuxa?',
    answers: ['Rio de Janeiro', 'Rio Grande do Sul', 'Santa Catarina', 'Goiás'],
    correct: 1,
  },
  {
    id: 1,
    level: 'easy',
    question: 'Qual o nome dado ao estado da água em forma de gelo?',
    answers: ['Liquido', 'Sólido', 'Gasoso', 'Vaporoso'],
    correct: 1,
  },
  {
    id: 2,
    level: 'easy',
    question: 'Quem é a namorada do Mickey?',
    answers: ['Margarida', 'Minnie', 'A Pequena Sereia', 'Olivia Palito'],
    correct: 1,
  },
  {
    id: 0,
    level: 'easy',
    question: 'Fidel Castro nasceu em que país?',
    answers: ['Jamaica', 'Cuba', 'El Salvador', 'México'],
    correct: 1,
  },
  {
    id: 0,
    level: 'easy',
    question: 'Qual é o signo do zodíaco de quem nasce no dia do ano-novo?',
    answers: ['Virgem', 'Aquario', 'Capricornio', 'Áries'],
    correct: 2,
  },
  {
    id: 0,
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
const mutableArrayOfQuestions = questions;

/* It chooses the question from the array given and pushs the selected one to an array of alreadyChoseen */
function getQuestion(arrayOfQuestions) {
  const index = Math.floor(Math.random() * arrayOfQuestions.length);
  chosenQuestion = arrayOfQuestions[index];
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

function loadElements() {
  getQuestion(questions);
  writeQuestions();
}

/* It calls the two functions that put the elements on screen when it is onload */
window.onload = function () {
  loadElements();
};

/* It sees if we have chosen the right answer */
function chooseRight(choosenAnswer) {
  if (answers[choosenAnswer] === answers[chosenQuestion.correct]) {
    getQuestion(questions);
    return true;
  }
  return answers[chosenQuestion.correct];
}

for (let i = 0; i < 4; i += 1) {
  let money = 0;
  buttonElement[i].onclick = function () {
    if (chooseRight(i)) {
      document.getElementById('dinheiro').innerHTML = `${money += 1000}`;
      buttonElement[i].setAttribute('class', 'btn-answer rigth');
    } else {
      buttonElement[i].setAttribute('class', 'btn-answer wrong');
    }
  };
}
