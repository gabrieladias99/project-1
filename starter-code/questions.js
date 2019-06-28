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
  new Question('easy', 'Qual o nome dado ao estado da água em forma de gelo?', ['Liquido', 'Sólido', 'Gasoso', 'Vaporoso'], 1),
  new Question('easy', 'Quem é a namorada do Mickey?', ['Margarida', 'Minnie', 'A Pequena Sereia', 'Olivia Palito'], 1),
  new Question('easy', 'Fidel Castro nasceu em que país?', ['Jamaica', 'Cuba', 'El Salvador', 'México'], 1),
  new Question('easy', 'Qual é o signo do zodíaco de quem nasce no dia do ano-novo?', ['Virgem', 'Aquario', 'Capricornio', 'Áries'], 2),
  new Question('easy', 'Qual é o nome da embarcação típica do litoral nordestino brasileiro?', ['Submarino', 'Jet Ski', 'Jangada', 'Lancha'], 2),
  new Question('hard', 'O que significa literalmente Perestroika?', ['Conversão', 'Involução', 'Reestruturação', 'Regressão'], 2),
  new Question('medium', 'O que significa a expressão e-mail?', ['Correio Rápido', 'Correio Eletrônico', 'Correio Elegante', 'Correio de Máquina'], 1),
  new Question('hard', 'Onde foi conduzida a vitória das forças aliadas na Segunda Guerra Mundial?', ['Cannes', 'Marselha', 'Capri', 'Normandia'], 3),
  new Question('hard', 'Qual oceano tem o maior volume de água?', ['Atlântico', 'Índico', 'Ártico', 'Pacífico'], 3),
  new Question('hard', 'Qual foi a primeira mulher a entrar no “hall da fama” dorock and roll?', ['Janis Joplin', 'Carole King', 'Aretha Franklin', 'Diana Ross'], 2),
  new Question('hard', 'Miró, Picasso e Salvador Dalí eram pintores:', ['Italianos', 'Portugueses', 'Espanhóis', 'Chilenos'], 2),
  new Question('hard', 'Qual foi o primeiro presidente do Brasil eleito pelo povo?', ['Getúlio Vargas', 'Prudente de Moraes', 'Washington Luís', 'Tancredo Neves'], 1),
  new Question('hard', 'Qual o sistema de transporte mais utilizado no Brasil?', ['Ferroviário', 'Aéreo', ' Hidroviário', 'Rodoviário'], 3),
  new Question('hard', 'O que é glicose', ['Aminoácido', 'Hidrato de Carbono', 'Lipídio', 'Proteína'], 1),
  new Question('easy', 'Quando é comemorado o dia da independência do Brasil', ['21 de Abril', '12 de Outubro', '7 de Setembro', '25 de Dezembro'], 2),
  new Question('easy', 'Quem tem por lema a frase: "Sempre Alerta"?', ['Médicos', 'Escoteiros', 'Bombeiros', 'Policiais'], 1),
  new Question('easy', 'Quantos signos formam o zodíaco?', ['Nove', 'Dez', 'Onze', 'Doze'], 3),
  new Question('easy', 'Qual cantor é o pai da dupla Sandy e Júnior?', ['Leonardo', 'Xororó', 'Zezé De Camargo', 'Chitãozinho'], 1),
  new Question ('easy', 'Quantas dentições naturais tem o ser humano durante a vida?', ['Uma', 'Duas', 'Três', 'Quatro'], 1),
];
