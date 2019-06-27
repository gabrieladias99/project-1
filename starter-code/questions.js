class Question {
  constructor(level, question, answers, correct) {
    this.level = level;
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
}

const questions = [
  new Question('easy', 'Em que estado brasileiro nasceu a apresentadora Xuxa?', ['Rio de Janeiro', 'Rio Grande do Sul', 'Santa Catarina', 'Goiás'], 1),
  new Question('easy', 'Em que estado brasileiro nasceu a apresentadora Xuxa?', ['Rio de Janeiro', 'Rio Grande do Sul', 'Santa Catarina', 'Goiás'], 1),
  new Question('easy', 'Qual o nome dado ao estado da água em forma de gelo?', ['Liquido', 'Sólido', 'Gasoso', 'Vaporoso'], 1),
  new Question('easy', 'Quem é a namorada do Mickey?', ['Margarida', 'Minnie', 'A Pequena Sereia', 'Olivia Palito'], 1),
  new Question('easy', 'Fidel Castro nasceu em que país?', ['Jamaica', 'Cuba', 'El Salvador', 'México'], 1),
  new Question('easy', 'Qual é o signo do zodíaco de quem nasce no dia do ano-novo?', ['Virgem', 'Aquario', 'Capricornio', 'Áries'], 2),
  new Question('easy', 'Qual é o nome da embarcação típica do litoral nordestino brasileiro?', ['Submarino', 'Jet Ski', 'Jangada', 'Lancha'], 2),
  new Question('hard', 'O que significa literalmente Perestroika?', ['Conversão', 'Involução', 'Reestruturação', 'Regressão'], 2),
  new Question('medium', 'O que significa a expressão e-mail?', ['Correio Rápido', 'Correio Eletrônico', 'Correio Elegante', 'Correio de Máquina'], 1),
  new Question('hard', 'Onde foi conduzida a vitória dasforças aliadas na Segunda Guerra Mundial?', ['Cannes', 'Marselha', 'Capri', 'Normandia'], 3),
  new Question('hard', 'Qual oceano tem o maior volume de água?', ['Atlântico', 'Índico', 'Ártico', 'Pacífico'], 3),
];
