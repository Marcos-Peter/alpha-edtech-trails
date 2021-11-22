const myName = document.querySelector("#name");
myName.textContent = "Marcos Peter Souza Lobato Junior";
const myAge = document.querySelector("#age");
myAge.textContent = "Tenho 27 anos";
const myState = document.querySelector("#state");
myState.textContent = "Moro no Distrito Federal";

const genre = document.querySelector("#genre");
genre.textContent = "Rock/Heavy Metal";

const p = document.querySelectorAll("p");

p[0].textContent = "Led Zeppelin foi uma banda britânica de rock formada em Londres, em 1968. Consistia no guitarrista Jimmy Page, no vocalista Robert Plant, no baixista e tecladista John Paul Jones e no baterista John Bonham. Seu som pesado e violento de guitarra, enraizado no blues e música psicodélica de seus dois primeiros álbuns, é frequentemente reconhecido como um dos fundadores do heavy metal. Seu estilo foi inspirado em uma grande variedade de influências, incluindo a música folk, psicodélica e o blues."

p[1].textContent = "O Led Zeppelin entrou na minha vida desde que me entendo por gente. Minha primeira lembrança a respeito da banda vem de quando eu via a capa do CD 'Led Zeppelin IV' na prateleira do meu pai e tinha medo do hermitão na parte de trás do álbum. E desde que ouvi a primeira música (Black Dog), nunca mais parei de ouvir. Led Zeppelin é a minha banda preferida, e para mim a melhor banda de todos os tempos, além de ter o maior significado de todos, trás algumas das melhores lembranças da minha vida ao lado do meu pai, que não está mais aqui fisicamente, mas está sempre ao meu lado, curtindo o bom e velho Rock'n Roll."

const list = document.querySelectorAll("li");

list[0].textContent = "Black Dog";
list[1].textContent = "Stairway to Heaven";
list[2].textContent = "Hey Hey What Can I Do";
list[3].textContent = "Going to California";
list[4].textContent = "Whole Lotta Love";
list[5].textContent = "Ramble On";
list[6].textContent = "Rock'n Roll";
list[7].textContent = "The Song Remains the Same";
list[8].textContent = "No Quarter";
list[9].textContent = "Misty Mountain Hop";

const imgs = document.querySelectorAll("img");

imgs[0].src = "assets/marcos-peter.jpg";
imgs[1].src = "assets/LZI.jpg";
imgs[2].src = "assets/LZII.jpg";
imgs[3].src = "assets/LZIII.jpg";
imgs[4].src = "assets/LZIV.png";


const links = document.querySelectorAll("a");

links[0].href = "https://www.youtube.com/watch?v=G1rJohGD9LA";
links[1].href = "https://www.youtube.com/watch?v=7T4LnsuB9Ms";
links[2].href = "https://www.youtube.com/watch?v=MkcumppLBXw";
links[3].href = "https://www.youtube.com/watch?v=LlDZ0AFN5C0";
links[4].href = "https://www.youtube.com/watch?v=yBuub4Xe1mw";
links[5].href = "https://www.youtube.com/watch?v=QkF3oxziUI4";
links[6].href = "https://www.youtube.com/watch?v=epX8Th4aiMc";
links[7].href = "https://www.youtube.com/watch?v=PDIz4talyQk";
links[8].href = "https://www.youtube.com/watch?v=HQmmM_qwG4k";
links[9].href = "https://www.youtube.com/watch?v=LzGBQerkvWs";
links[10].href = "https://www.youtube.com/watch?v=lncr2g9XJHU";
links[11].href = "https://www.youtube.com/watch?v=dRnKvXqti6M";
links[12].href = "https://www.youtube.com/watch?v=Pu94mWlgzMY";
links[13].href = "https://www.youtube.com/watch?v=KwG9iRFmY1I";
links[14].href = "https://www.ledzeppelin.com/?frontpage=true";


for(let i = 0; i < links.length; i++){
    links[i].target = "_blank";
}

myAge.style.fontSize = "2vh";
myAge.style.fontWeight = "600";
myAge.style.color = "hsl(0, 2%, 10%)";
myState.style.fontSize = "2vh";
myState.style.fontWeight = "600";
myState.style.color = "hsl(0, 2%, 10%)";
