const phrases = [
    'Eu não fingirei ter convulsões',
    'Esta punição não é chata e sem sentido',
    'Meu nome não é doutor morte',
    'Eu não difamarei Nova Orleans (Vejam ep."Um bonde chamado Marge")',
    'Eu não prescreverei medicação',
    'Eu não enterrarei o garoto novo',
    'Eu não ensinarei outros a voar',
    'Eu não trarei carneiros para a aula',
    'Um arroto não é uma resposta',
    'Professora não é leprosa',
    'Café não é para crianças',
    'Eu não comerei coisas por dinheiro',
    'Eu não vou gritar "ela morreu" durante a chamada',
    'A peruca do diretor não é um frisbee',
    'Eu não vou chamar o diretor de "cabeça de batata"',
    'Peixes dourados não saltam',
    'A lama não é um dos 4 grupos de alimentos',
    'Ninguém está interessado nas minhas cuecas',
    'Eu não venderei curas milagrosas',
    'Eu devolverei o cão-guia',
    'Eu não tenho imunidade diplomática',
    'Eu não vou cobrar entrada para o banheiro',
    'Os feijões não são frutas nem musical',
    'Eu não usarei abrev.',
    'Eu não sou a reencarnação de Sammy Davis Jr.',
    'Eu não enviarei banha pelo correio',
    'Eu não vou dissecar coisas sem permissão',
    'Eu não vou passar sabão nas escadas',
    'Ralph não vai "transformar" se espreme-lo bastante',
    'Dizer “é brincadeira” não me dá direito de insultar o diretor',
    '“Homem do saco” não é uma carreira a ser escolhida',
    'Escrita cursiva não significa o que eu acho que é',
    'Na próxima vez pode ser eu no andaime',
    'Eu não pendurarei donuts em minha pessoa',
    'Eu lembrarei de tomar meu remédio',
    'Eu não vou andar por ai como se o lugar fosse meu',
    'Com bom humor o homem pode ir longe',
    'Eu não tenho mandato para a primeira série',
    'Gás de nervo não é brinquedo',
    'Eu não vou zombar da sra. Cara de Trouxa',
    'A primeira emenda não cobre arrotos',
    'Isto não é uma pista... ou é?'
];

const maxLineNumber = 11;
const typingSpeed = 30;

function resultModal() {
    document.getElementById('result').classList.remove('hide');
}

function generateLinesBoard() {
    const boardElem = document.getElementById('chalkboard')

    for(let i = 0; i < maxLineNumber; i++) {
        const lineElem = document.createElement('span')
        lineElem.className = 'line-board'
        lineElem.id = `line-board-${i}`
        boardElem.appendChild(lineElem)
    }
}

generateLinesBoard()

let contClear = 0;

let linePos = 0;

const randomPhrase = () => phrases[Math.round(Math.random() * (phrases.length - 1))];

const inputNumber = () => ({
  repeatNumber: +document.querySelector('input').value
})


function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function writePhrase(phrase, elem) {
  elem.className = 'line-board-active';
  for(let i = 0; i < phrase.length; i+=1) {
    elem.innerHTML = phrase.slice(0 , i + 1);
    await timeout(typingSpeed);
  }
  elem.className = 'line-board';
}

function boardCleared() {
    document.getElementById('board-cleared').innerHTML = contClear;
}

function lineQtt() {
  document.getElementById('last-board').innerHTML = linePos;
}

function nextPosition() {
  if(linePos < maxLineNumber) {
    linePos += 1;
  } else {
    linePos = 0;
  }
  lineQtt()
}

function clearBoard() {
  linePos = 0;
  for(let i = 0; i < maxLineNumber; i++) {
    document.getElementById(`line-board-${i}`).innerHTML = '';
  }
  contClear += 1;
  boardCleared();
}

async function writeBoard() {
  const phrase = randomPhrase();
  const { repeatNumber } = inputNumber();
  let i = 0;
  while(i < repeatNumber) {
    if(linePos >= maxLineNumber) clearBoard()
    await writePhrase(phrase, document.getElementById(`line-board-${linePos}`));
    nextPosition();
    i++
  }
  document.getElementById('phrase-repeat').innerHTML = repeatNumber;
  resultModal();
}

document.querySelector('button').addEventListener('click', function() {
  writeBoard()
})




