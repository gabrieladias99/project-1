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
const alreadyChoseen = [];

function getQuestion(arrayOfQuestions) {
  chosenQuestion = arrayOfQuestions[Math.floor(Math.random() * arrayOfQuestions.length)];
  alreadyChoseen.push(chosenQuestion);
  questionStatement = chosenQuestion.question;
  answers = chosenQuestion.answers;
}

function chooseRight(choosenAnswer) {
  if (answers[choosenAnswer] === answers[chosenQuestion.correct]) {
    getQuestion(questions);
    return true;
  }
  return false;
}

function writeQuestions() {
  document.getElementById('question-text').innerHTML = questionStatement;
  for (let i = 0; i < 4; i += 1) {
    document.getElementsByTagName('button')[i].innerHTML = answers[i];
    // document.getElementsByTagName('button')[i].removeAttribute('class')
  }
}


window.onload = function () {
  getQuestion(questions);
  writeQuestions();
};

function start() {
  getQuestion(questions);
  writeQuestions();
}

for (let i = 0; i < 4; i += 1) {
  let money = 0;
  document.getElementsByTagName('button')[i].onclick = function () {
    if (chooseRight(i)) {
      document.getElementById('dinheiro').innerHTML = `${money += 1000}`;
      document.getElementsByTagName('button')[i].setAttribute('class', 'btn-answer rigth');

    } else{
      document.getElementsByTagName('button')[i].setAttribute('class', 'btn-answer wrong');
    }
  };
}

let size = 900;

setInterval(() => {
  document.getElementById('time').width = `${size}`;
  console.log(document.getElementById('time'));
  if (size > 99) {
    size -= 1;
  } else size = 0;
}, 10);
