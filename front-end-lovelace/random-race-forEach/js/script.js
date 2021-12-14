document.getElementById('btn-players').addEventListener('click', () => {changePlayers()});
document.getElementById('btn-back').addEventListener('click', () => {changePlayers()});
document.getElementById('btn-play').addEventListener('click', () => {changeRun()});
document.getElementById('speed-run').addEventListener('click', () => {modeSelected('speed-run')});
document.getElementById('grand-prix').addEventListener('click', () => {modeSelected('grand-prix')});
document.getElementById('enduro').addEventListener('click', () => {modeSelected('enduro')});
document.getElementById('btn-custom').addEventListener('click', () => {modeSelected('btn-custom')});
document.getElementById('pre-selected').addEventListener('click', () => {carModeSelected('pre-selected')});
document.getElementById('btn-ready').addEventListener('click', () => {mainRun(chosenMode, chosenCar)});
document.getElementById('close').addEventListener('click', () => {showResults()});

let chosenMode = 0, chosenCar = "", winner, second, third, model, runTarget;
let pedro = 0, juca = 0, edna = 0;

let pilotsExperience = [
    {name: "pedro", experience: 0, level: 0, position: 0},
    {name: "juca", experience: 0, level: 0, position: 0},
    {name: "edna", experience: 0, level: 0, position: 0}
];
const preLoadedCars =  {
    popular: {
        maxVelocity: {
            min: 180,
            max: 200
        },
        minVelocity: {
            min: 110,
            max: 130
        },
        skid: {
            min: 3,
            max: 4
        }
    },
    sport: {
        maxVelocity: {
            min: 195,
            max: 215
        },
        minVelocity: {
            min: 125,
            max: 145
        },
        skid: {
            min: 2,
            max: 3
        }
    },
    superSport: {
        maxVelocity: {
            min: 210,
            max: 230
        },
        minVelocity: {
            min: 140,
            max: 160
        },
        skid: {
            min: 1,
            max: 1.75
        }
    }
};
const runMode = {
    speedRun: {
        name: "Corrida Rápida",
        turnsQtt: 10,
        experiencePoints: {
            firstPlace: 200,
            secondPlace: 120,
            thirdPlace: 50
        }
    },
    grandPrix: {
        name: "Grande Prêmio",
        turnsQtt: 70,
        experiencePoints: {
            firstPlace: 220,
            secondPlace: 130,
            thirdPlace: 75
        }
    },
    enduro: {
        name: "Enduro",
        turnsQtt: 160,
        experiencePoints: {
            firstPlace: 250,
            secondPlace: 150,
            thirdPlace: 90
        }
    }
};
let cars = {
    pedro: {
        minVelocity: 0,
        maxVelocity: 0,
        skid: 0,
        type: ""
    },
    juca: {
        minVelocity: 0,
        maxVelocity: 0,
        skid: 0,
        type: ""
    },
    edna: {
        minVelocity: 0,
        maxVelocity: 0,
        skid: 0,
        type: ""
    }
};

function generateCars() {
    let type = randomValue(1, 100);
    let pilot;
    carType(type);
    console.log(type);
    console.log(model);
    console.log(carType(type));

    for(let i = 0; i < 3; i++) {

        if(i == 0) {
            pilot = "pedro";
        } else if(i == 1) {
            pilot = "juca";
        } else if(i == 2) {
            pilot = "edna";
        };

        if(model == "popular") {
            cars[pilot].minVelocity = randomValue(preLoadedCars[model].minVelocity.min, preLoadedCars[model].minVelocity.max);
            cars[pilot].maxVelocity = randomValue(preLoadedCars[model].maxVelocity.min, preLoadedCars[model].maxVelocity.max);
            cars[pilot].skid = randomValue(preLoadedCars[model].skid.min, preLoadedCars[model].skid.max);
            cars[pilot].type = model;
        } else if(model == "sport") {
            cars[pilot].minVelocity = randomValue(preLoadedCars[model].minVelocity.min, preLoadedCars[model].minVelocity.max);
            cars[pilot].maxVelocity = randomValue(preLoadedCars[model].maxVelocity.min, preLoadedCars[model].maxVelocity.max);
            cars[pilot].skid = randomValue(preLoadedCars[model].skid.min, preLoadedCars[model].skid.max);
            cars[pilot].type = model;
        } else if(model == "superSport") {
            cars[pilot].minVelocity = randomValue(preLoadedCars[model].minVelocity.min, preLoadedCars[model].minVelocity.max);
            cars[pilot].maxVelocity = randomValue(preLoadedCars[model].maxVelocity.min, preLoadedCars[model].maxVelocity.max);
            cars[pilot].skid = randomValue(preLoadedCars[model].skid.min, preLoadedCars[model].skid.max);
            cars[pilot].type = model;
        } else {
            alert("Erro ao gerar carros, tente novamente.");
        };
    }

    function carType(type) {
        if(type >= 0 && type < 5) {
            model = "superSport"
        } else if(type >= 5 && type < 35) {
            model = "sport"
        } else if(type >= 35 && type <= 100) {
            model = "popular"
        };
        return model
    };

    function randomValue(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    console.log(cars);
};



function mainRun(turns, cars) {
    let turn = {};
    let pilot;

    if(turns <= 0 || cars == ""){
        alert('Selecione uma corrida e um carro!');
    } else {
        for(let i = 0; i < turns; i++) {
            if(i == 0) {
                pilot = "pedro";
            } else if(i == 1) {
                pilot = "juca";
            } else {
                pilot = "edna";
            };
            
            turn[i] = (((randomValue(cars[pilot].minVelocity, cars[pilot].maxVelocity))/100) * (100-cars[pilot].skid));
            turn[i] = turn[i] + ((turn[i] / 100) * pilotsExperience[0].level);
            console.log(turn[i]);
            turn[i + 1] = (((randomValue(cars[pilot].minVelocity, cars[pilot].maxVelocity))/100) * (100-cars[pilot].skid));
            turn[i + 1] = turn[i + 1] + ((turn[i + 1] /100) * pilotsExperience[1].level)
            console.log(turn[i + 1]);
            turn[i + 2] = (((randomValue(cars[pilot].minVelocity, cars[pilot].maxVelocity))/100) * (100-cars[pilot].skid));
            turn[i + 2] = turn[i + 2] + ((turn[i + 2] /100) * pilotsExperience[2].level)
            console.log(turn[i + 2]);
    
            //Return an array with the player's punctuation
            comparison(turn[i], turn[i + 1], turn[i + 2]);
    
            console.log(pedro, juca, edna);
        };
        console.log(pedro, juca, edna);
    
        draw(pedro, juca, edna);
        pilotsExperience.forEach((key) => {
                if(key.name == winner) {
                    key.position = 1;
                    key.experience += runMode[runTarget].experiencePoints.firstPlace;
                } else if(key.name == second) {
                    key.position = 2;
                    key.experience += runMode[runTarget].experiencePoints.secondPlace;
                } else if(key.name == third) {
                    key.position = 3;
                    key.experience += runMode[runTarget].experiencePoints.thirdPlace;
                };
                if(key.level < 10) {
                    if(((key.experience) % 450) >= 0) {
                        key.level = parseInt((key.experience) / 450);
                    };
                };
            console.log(pilotsExperience);
        })
        showResults();
    
        function randomValue(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
    
        function draw(car1, car2, car3){
            let drawOne, drawTwo, drawThree;
    
            if(car1 > car2 && car1 > car3) {
                winner = "pedro";
                if(car2 > car3) {
                    second = "juca";
                    third = "edna";
                };
                console.log("pedro");
                return winner
            } else if(car2 > car1 && car2 > car3) {
                winner = "juca";
                if(car1 > car3) {
                    second = "pedro";
                    third = "edna";
                };
                console.log("juca");
                return winner
            } else if(car3 > car1 && car3 > car2) {
                winner = "edna";
                if(car1 > car2) {
                    second = "pedro";
                    third = "juca";
                };
                console.log("edna");
                return winner
            } else {
                console.log("Empate");
    
                if(car1 == car2){
                    drawOne = ((randomValue(cars.pedro.minVelocity, cars.pedro.maxVelocity))/100) * (100-cars.pedro.skid);
                    drawTwo = ((randomValue(cars.juca.minVelocity, cars.juca.maxVelocity))/100) * (100-cars.juca.skid);
    
                    console.log(drawOne, drawTwo);
    
                    winner = (drawOne > drawTwo) ? "pedro" : "juca";
    
                    console.log(winner);
                    return winner
                } else if(car1 == car3) {
                    drawOne = ((randomValue(cars.pedro.minVelocity, cars.pedro.maxVelocity))/100) * (100-cars.pedro.skid);
                    drawThree = ((randomValue(cars.edna.minVelocity, cars.edna.maxVelocity))/100) * (100-cars.edna.skid);
    
                    console.log(drawOne, drawThree);
    
                    winner = (drawOne > drawThree) ? "pedro" : "edna";
    
                    console.log(winner);
                    return winner
                } else {
                    drawTwo = ((randomValue(cars.juca.minVelocity, cars.juca.maxVelocity))/100) * (100-cars.juca.skid);
                    drawThree = ((randomValue(cars.edna.minVelocity, cars.edna.maxVelocity))/100) * (100-cars.edna.skid);
    
                    console.log(drawTwo, drawThree);
    
                    winner = (drawTwo > drawThree) ? "juca" : "edna";
    
                    console.log(winner);
                    return winner
                };
            };
        };
        
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
                };
            };
        };
    
        function showResults(){
            document.getElementById('winner').innerHTML = winner;
            document.getElementById('second').innerHTML = second;
            document.getElementById('third').innerHTML = third;
            if(winner == "pedro") {
                document.getElementById('lvl').innerHTML = pilotsExperience[0].level;
            } else if(winner == "juca") {
                document.getElementById('lvl').innerHTML = pilotsExperience[1].level;
            } else {
                document.getElementById('lvl').innerHTML = pilotsExperience[2].level;
            }
            console.log(`segundo: ${second}`);
            console.log(`terceiro: ${third}`);
    
            if(document.getElementById('run').classList.contains('hide')) {
                document.getElementById('run').classList.remove('hide');
                document.getElementById('results').classList.add('hide');
            } else {
                document.getElementById('run').classList.add('hide');
                document.getElementById('results').classList.remove('hide');
            }
        };
    };
};

function randomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function modeSelected(target) {    
    if(target == 'speed-run') {
        if(document.getElementById(target).classList.contains('selected')) {
            document.getElementById(target).classList.remove('selected');
        } else {
            document.getElementById(target).classList.add('selected');
            chosenMode = runMode.speedRun.turnsQtt;
            runTarget = "speedRun";
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
            chosenMode = runMode.grandPrix.turnsQtt;
            runTarget = "grandPrix";
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
            chosenMode = runMode.enduro.turnsQtt;
            runTarget = "enduro";
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
};

function carModeSelected(mode) {
    if(mode == 'pre-selected') {
        if(document.getElementById(mode).classList.contains('selected')) {
            document.getElementById(mode).classList.remove('selected');
        } else {
            document.getElementById(mode).classList.add('selected');
            generateCars();
            chosenCar = cars;
            console.log(chosenCar);
        }
        // document.getElementById('random').classList.remove('selected');
    } /*else if(mode == 'random') {
        if(document.getElementById(mode).classList.contains('selected')) {
            document.getElementById(mode).classList.remove('selected');
        } else {
            document.getElementById(mode).classList.add('selected');
            chosenCar = randCars;
            console.log(chosenCar);
        }
        document.getElementById('pre-selected').classList.remove('selected');
    }*/
};

function changePlayers() {
    if(document.getElementById('presentation').classList.contains('hide')) {
        document.getElementById('presentation').classList.remove('hide');
        document.getElementById('players').classList.add('hide');
    } else {
        document.getElementById('presentation').classList.add('hide');
        document.getElementById('players').classList.remove('hide');
    };
};

function changeRun() {
    if(document.getElementById('players').classList.contains('hide')) {
        document.getElementById('players').classList.remove('hide');
        document.getElementById('run').classList.add('hide');
    } else {
        document.getElementById('players').classList.add('hide');
        document.getElementById('run').classList.remove('hide');
    };
};

function showResults(){
    document.getElementById('winner').innerHTML = winner;
    document.getElementById('second').innerHTML = second;
    document.getElementById('third').innterHTML = third;
    if(document.getElementById('run').classList.contains('hide')) {
        document.getElementById('run').classList.remove('hide');
        document.getElementById('results').classList.add('hide');
    } else {
        document.getElementById('run').classList.add('hide');
        document.getElementById('results').classList.remove('hide');
    };
    pedro = 0;
    juca = 0;
    edna = 0;
    // winner = "";
    // second = "";
    // third = "";
    chosenCar = "";
    chosenMode = "";

    document.getElementById('speed-run').classList.remove('selected');
    document.getElementById('grand-prix').classList.remove('selected');
    document.getElementById('enduro').classList.remove('selected');
    document.getElementById('btn-custom').classList.remove('selected');
    document.getElementById('pre-selected').classList.remove('selected');
};

