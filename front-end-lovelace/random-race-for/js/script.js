let chosenMode = 0, chosenCar = "", winner;
let pedro = 0, juca = 0, edna = 0;
const cars = [
    {name: "Pedro", minVelocity: 150, maxVelocity: 230, skid: 3},
    {name: "Juca", minVelocity: 120, maxVelocity: 260, skid: 5},
    {name: "Edna", minVelocity: 180, maxVelocity: 220, skid: 1}
];
const randCars = [
    {name: "Pedro", minVelocity: randomValue(100, 150) , maxVelocity: randomValue(200, 280), skid: randomValue(1, 8)},
    {name: "Juca", minVelocity: randomValue(100, 150) , maxVelocity: randomValue(200, 280), skid: randomValue(1, 8)},
    {name: "Edna", minVelocity: randomValue(100, 150) , maxVelocity: randomValue(200, 280), skid: randomValue(1, 8)}
];
const runMode = [
    {name: "Corrida Rápida", turnsQtt: 10},
    {name: "Grande Prêmio", turnsQtt: 70},
    {name: "Enduro", turnsQtt: 160},
]

document.getElementById('btn-players').addEventListener('click', () => {changePlayers()});
document.getElementById('btn-back').addEventListener('click', () => {changePlayers()});
document.getElementById('btn-play').addEventListener('click', () => {changeRun()});
document.getElementById('btn-back').addEventListener('click', () => {changeRun()});
document.getElementById('speed-run').addEventListener('click', () => {modeSelected('speed-run')});
document.getElementById('grand-prix').addEventListener('click', () => {modeSelected('grand-prix')});
document.getElementById('enduro').addEventListener('click', () => {modeSelected('enduro')});
document.getElementById('btn-custom').addEventListener('click', () => {modeSelected('btn-custom')});
document.getElementById('pre-selected').addEventListener('click', () => {carModeSelected('pre-selected')});
document.getElementById('random').addEventListener('click', () => {carModeSelected('random')});
document.getElementById('btn-ready').addEventListener('click', () => {mainRun(chosenMode, chosenCar)});
document.getElementById('close').addEventListener('click', () => {showResults()});

function mainRun(turns, cars) {
    let turn = {};

    if(turns <= 0 || cars == ""){
        alert('Selecione uma corrida e um carro!');
    } else {
        for(let i = 0; i < turns; i++) {
            turn[i] = ((randomValue(cars[0].minVelocity, cars[0].maxVelocity))/100) * (100-cars[0].skid);
            console.log(turn[i]);
            turn[i + 1] = ((randomValue(cars[1].minVelocity, cars[1].maxVelocity))/100) * (100-cars[1].skid);
            console.log(turn[i + 1]);
            turn[i + 2] = ((randomValue(cars[2].minVelocity, cars[2].maxVelocity))/100) * (100-cars[2].skid);
            console.log(turn[i + 2]);
    
            //Return an array with the player's punctuation
            comparison(turn[i], turn[i + 1], turn[i + 2]);
    
            console.log(pedro, juca, edna);
        }
        console.log(pedro, juca, edna);
    
        draw(pedro, juca, edna);
    
        showResults();
    
        function randomValue(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    
        function draw(car1, car2, car3){
            let drawOne, drawTwo, drawThree;
    
            if(car1 > car2 && car1 > car3) {
                winner = "Pedro";
                console.log("Pedro");
                return winner
            } else if(car2 > car1 && car2 > car3) {
                winner = "Juca";
                console.log("Juca");
                return winner
            } else if(car3 > car1 && car3 > car2) {
                winner = "Edna";
                console.log("Edna");
                return winner
            } else {
                console.log("Empate");
    
                if(car1 == car2){
                    drawOne = ((randomValue(cars[0].minVelocity, cars[0].maxVelocity))/100) * (100-cars[0].skid);
                    drawTwo = ((randomValue(cars[1].minVelocity, cars[1].maxVelocity))/100) * (100-cars[1].skid);
    
                    console.log(drawOne, drawTwo);
    
                    winner = (drawOne > drawTwo) ? "Pedro" : "Juca";
    
                    console.log(winner);
                    return winner
                } else if(car1 == car3) {
                    drawOne = ((randomValue(cars[0].minVelocity, cars[0].maxVelocity))/100) * (100-cars[0].skid);
                    drawThree = ((randomValue(cars[2].minVelocity, cars[2].maxVelocity))/100) * (100-cars[2].skid);
    
                    console.log(drawOne, drawThree);
    
                    winner = (drawOne > drawThree) ? "Pedro" : "Edna";
    
                    console.log(winner);
                    return winner
                } else {
                    drawTwo = ((randomValue(cars[1].minVelocity, cars[1].maxVelocity))/100) * (100-cars[1].skid);
                    drawThree = ((randomValue(cars[2].minVelocity, cars[2].maxVelocity))/100) * (100-cars[2].skid);
    
                    console.log(drawTwo, drawThree);
    
                    winner = (drawTwo > drawThree) ? "Juca" : "Edna";
    
                    console.log(winner);
                    return winner
                }
            }
        }
        
        function comparison(car1, car2, car3) {
            if(car1 > car2 && car1 > car3) {
                pedro += 1;
            } else if(car2 > car1 && car2 > car3) {
                juca += 1;
            } else if(car3 > car1 && car3 > car2) {
                edna += 1;
            } else {
                if(car1 == car2){
                    pedro += 1;
                    juca += 1;
                } else if(car1 == car3) {
                    pedro += 1;
                    edna += 1;
                } else if(car2 == car3) {
                    juca += 1;
                    edna += 1;
                }
            }
        }
    
        function showResults(){
            document.getElementById('winner').innerHTML = winner;
            if(winner == "Pedro") {
                document.getElementById('turnsWon').innerHTML = pedro;
            } else if(winner == "Juca") {
                document.getElementById('turnsWon').innerHTML = juca;
            } else {
                document.getElementById('turnsWon').innerHTML = edna;
            }
    
            if(document.getElementById('run').classList.contains('hide')) {
                document.getElementById('run').classList.remove('hide');
                document.getElementById('results').classList.add('hide');
            } else {
                document.getElementById('run').classList.add('hide');
                document.getElementById('results').classList.remove('hide');
            }
        }
    }

    
}

function randomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function modeSelected(target) {    
    if(target == 'speed-run') {
        if(document.getElementById(target).classList.contains('selected')) {
            document.getElementById(target).classList.remove('selected');
        } else {
            document.getElementById(target).classList.add('selected');
            chosenMode = runMode[0].turnsQtt;
            console.log(chosenMode);
        }
        document.getElementById('grand-prix').classList.remove('selected');
        document.getElementById('enduro').classList.remove('selected');
        document.getElementById('btn-custom').classList.remove('selected');
    } else if(target == 'grand-prix') {
        if(document.getElementById(target).classList.contains('selected')) {
            document.getElementById(target).classList.remove('selected');
        } else {
            document.getElementById(target).classList.add('selected');
            chosenMode = runMode[1].turnsQtt;
            console.log(chosenMode);
        }
        document.getElementById('speed-run').classList.remove('selected');
        document.getElementById('enduro').classList.remove('selected');
        document.getElementById('btn-custom').classList.remove('selected');
    } else if(target == 'enduro') {
        if(document.getElementById(target).classList.contains('selected')) {
            document.getElementById(target).classList.remove('selected');
        } else {
            document.getElementById(target).classList.add('selected');
            chosenMode = runMode[2].turnsQtt;
            console.log(chosenMode);
        }
        document.getElementById('speed-run').classList.remove('selected');
        document.getElementById('grand-prix').classList.remove('selected');
        document.getElementById('btn-custom').classList.remove('selected');
    } else {
        if(document.getElementById(target).classList.contains('selected')) {
            document.getElementById(target).classList.remove('selected');
        } else {
            document.getElementById(target).classList.add('selected');
            chosenMode = document.getElementById('turns').value;
            console.log(chosenMode);
        }
        document.getElementById('speed-run').classList.remove('selected');
        document.getElementById('grand-prix').classList.remove('selected');
        document.getElementById('enduro').classList.remove('selected');
    }
}

function carModeSelected(mode) {
    if(mode == 'pre-selected') {
        if(document.getElementById(mode).classList.contains('selected')) {
            document.getElementById(mode).classList.remove('selected');
        } else {
            document.getElementById(mode).classList.add('selected');
            chosenCar = cars;
            console.log(chosenCar);
        }
        document.getElementById('random').classList.remove('selected');
    } else if(mode == 'random') {
        if(document.getElementById(mode).classList.contains('selected')) {
            document.getElementById(mode).classList.remove('selected');
        } else {
            document.getElementById(mode).classList.add('selected');
            chosenCar = randCars;
            console.log(chosenCar);
        }
        document.getElementById('pre-selected').classList.remove('selected');
    }
}

function changePlayers() {
    if(document.getElementById('presentation').classList.contains('hide')) {
        document.getElementById('presentation').classList.remove('hide');
        document.getElementById('players').classList.add('hide');
    } else {
        document.getElementById('presentation').classList.add('hide');
        document.getElementById('players').classList.remove('hide');
    }
}

function changeRun() {
    if(document.getElementById('players').classList.contains('hide')) {
        document.getElementById('players').classList.remove('hide');
        document.getElementById('run').classList.add('hide');
    } else {
        document.getElementById('players').classList.add('hide');
        document.getElementById('run').classList.remove('hide');
    }
}

function showResults(){
    document.getElementById('winner').innerHTML = winner;
    if(document.getElementById('run').classList.contains('hide')) {
        document.getElementById('run').classList.remove('hide');
        document.getElementById('results').classList.add('hide');
    } else {
        document.getElementById('run').classList.add('hide');
        document.getElementById('results').classList.remove('hide');
    }
    pedro = 0;
    juca = 0;
    edna = 0;
    winner = "";
    chosenCar = "";
    chosenMode = "";

    document.getElementById('speed-run').classList.remove('selected');
    document.getElementById('grand-prix').classList.remove('selected');
    document.getElementById('enduro').classList.remove('selected');
    document.getElementById('btn-custom').classList.remove('selected');
    document.getElementById('pre-selected').classList.remove('selected');
    document.getElementById('random').classList.remove('selected');
}