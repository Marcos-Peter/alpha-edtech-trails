let field0 = document.getElementById('field-0');
let field1 = document.getElementById('field-1');
let field2 = document.getElementById('field-2');
let field3 = document.getElementById('field-3');

document.getElementById('btn-record').addEventListener('click', () => {populateArray()});
document.getElementById('btn-reverse').addEventListener('click', () => {reverseArray()});
document.getElementById('btn-ascending').addEventListener('click', () => {ascendingOrder(array)});

let array = [];

function populateArray() {
    if(field0.value == '' || field1.value == '' || field2.value == '' || field3.value == '') {
        alert('Preencha todos os campos.');
    } else {
        for(let i = 0; i < 4; i++) {
            array[i] = document.getElementById(`field-${i}`).value;
            console.log(array[i]);
        }
    }
};

function reverseArray() {
    let j = 0;
    for(let i = array.length - 1; i >= 0; i--) {
        document.getElementById(`r-field-${j}`).innerHTML = array[i];
        j++;
    }
}

function ascendingOrder(arr) {
    var temp = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }
    }
    document.getElementById('as-field-0').innerHTML = arr[0];
    document.getElementById('as-field-1').innerHTML = arr[1];
    document.getElementById('as-field-2').innerHTML = arr[2];
    document.getElementById('as-field-3').innerHTML = arr[3];
}