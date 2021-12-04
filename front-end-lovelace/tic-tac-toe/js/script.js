document.getElementById('0').addEventListener('click', () => {boardField(0)});
document.getElementById('1').addEventListener('click', () => {boardField(1)});
document.getElementById('2').addEventListener('click', () => {boardField(2)});
document.getElementById('3').addEventListener('click', () => {boardField(3)});
document.getElementById('4').addEventListener('click', () => {boardField(4)});
document.getElementById('5').addEventListener('click', () => {boardField(5)});
document.getElementById('6').addEventListener('click', () => {boardField(6)});
document.getElementById('7').addEventListener('click', () => {boardField(7)});
document.getElementById('8').addEventListener('click', () => {boardField(8)});

document.getElementById('reset').addEventListener('click', () => {reset()});


let turn = {
    current: 0,
    get: function() {
        return this.current;
    },
    set: function(value) {
        this.current = value;
    }
}

let x = [];
let o = [];

const conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]    
];

function check(player) {
    let count = 0;
    for(let i = 0; i < conditions.length; i++) {
        for(let j = 0; j < conditions[i].length; j++) {
            for (let k = 0; k < player.length; k++) {
                if(conditions[i][j] == player[k]) {
                    count++;
                    if(count === 3 && turn.get() === 1) {
                        document.getElementById('result').innerHTML = 'Jogador X venceu!';
                    } else if(count === 3 && turn.get() === 0) {
                        document.getElementById('result').innerHTML = 'Jogador O venceu!';
                    }
                }
            }
        }
        count = 0;
    }
    if(x.length + o.length === 9) {
        document.getElementById('result').innerHTML = 'Deu empate!';
    }
}

function reset() {
    document.getElementById('0').innerHTML = '';
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';

    document.getElementById('result').innerHTML = '';

    x = [];
    o = [];

    turn.set(0);
}

function boardField(id) {
    if(turn.get() === 0) {
        if(document.getElementById(id).innerHTML === '' && document.getElementById('result').innerHTML === '') {
            document.getElementById(id).innerHTML = 'X';
            x.push(id);
            turn.set(1);
            check(x);
        }
    } else {
        if(document.getElementById(id).innerHTML === '' && document.getElementById('result').innerHTML === '') {
            document.getElementById(id).innerHTML = 'O';
            o.push(id);
            turn.set(0);
            check(o);
        }
    }
}