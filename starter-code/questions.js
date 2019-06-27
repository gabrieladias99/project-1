class Question {
  constructor(level, question, answers, correct) {
    this.level = level;
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
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
  {
    level: 'hard',
    question: 'O que significa literalmente Perestroika?',
    answers: ['Conversão', 'Involução', 'Reestruturação', 'Regressão'],
    correct: 2,
  },
  {
    level: 'medium',
    question: 'O que significa a expressão e-mail?',
    answers: ['Correio Rápido', 'Correio Eletrônico', 'Correio Elegante', 'Correio de Máquina'],
    correct: 1,
  },
  {
    level: 'hard',
    question: 'Onde foi conduzida a vitória dasforças aliadas na Segunda Guerra Mundial?',
    answers: ['Cannes', 'Marselha', 'Capri', 'Normandia'],
    correct: 3,
  },
  {
    level: 'hard',
    question: 'Qual oceano tem o maior volume de água?',
    answers: ['Atlântico', 'Índico', 'Ártico', 'Pacífico'],
    correct: 3,
  },
  new Question('hard', 'Qual oceano tem o maior volume de água?', ['Atlântico', 'Índico', 'Ártico', 'Pacífico'], 3)
];

// level: 'hard',
//     question: 'Qual oceano tem o maior volume de água?',
//     answers:[{name:'Atlântico',
//     correct:true}] 

//     if(answers[choosenAnswer].correct)
//     chosenQuestion.answers.forEach((e) =>{
//       if (e.correct)
//       return e.correct
//     }
