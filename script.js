const gerarCartaBtn = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const p = document.getElementById('carta-gerada');

// array composto por array de classes, cada array é um grupo de estilo
const classes = [['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright']];

// gera um número entre 0 e number-1
const generateNumber = (number) => Math.floor(Math.random() * number);

// gera uma string com os nomes das classes (uma classe por grupo de estilo)
const generateClasses = () => {
  const classSpan = [];
  for (let index = 0; index < classes.length; index += 1) {
    const secondaryIndex = generateNumber(classes[index].length);
    classSpan.push(classes[index][secondaryIndex]);
  }
  return classSpan.join(' '); // retorna uma string com todas as classes
};

// Req Bonus: Alterar o estilo da carta ao clicar nela
const generateNewClass = () => {
  const cartas = document.getElementsByTagName('span');
  if (cartas.length > 0) {
    for (let index = 0; index < cartas.length; index += 1) {
      cartas[index].addEventListener('click', (event) => {
        const spanClicked = event.target;
        spanClicked.className = generateClasses();
      });
    }
  }
};

// Req Bonus: Contar o número de cartas
const count = () => {
  const pCount = document.getElementById('carta-contador');
  const cartas = document.getElementsByTagName('span').length;
  pCount.innerHTML = cartas;
};

// Separa o texto do input
const splitText = () => (input.value).split(' ');

// Coloca cada palavra em uma tag span
gerarCartaBtn.addEventListener('click', () => {
  // função trim(), remove os espaços em branco do inicio e do fim de uma string. Fonte: https://www.w3schools.com/jsref/jsref_trim_string.asp e https://pt.stackoverflow.com/questions/58498/se-input-tiver-apenas-espa%C3%A7os-em-branco-n%C3%A3o-fazer-nada
  if (input.value.length === 0 || input.value.trim().length === 0) {
    p.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    // apagar qualquer coisa que estiver dentro p toda vez que clicar no botão de gerar carta
    p.innerHTML = '';
    const arrayText = splitText();

    // cria a tag span a cada palavra do texto
    for (let index = 0; index < arrayText.length; index += 1) {
      const span = document.createElement('span');
      span.innerHTML = arrayText[index];
      span.className = generateClasses();
      p.appendChild(span);
    }
  }
  generateNewClass();
  count();
});
