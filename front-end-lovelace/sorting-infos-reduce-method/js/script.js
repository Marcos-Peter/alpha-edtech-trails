document.querySelector('#btn-record').addEventListener('click', () => {recordSale()});
document.querySelector('#btn-calculate').addEventListener('click', () => {calculateFees()});
document.querySelector('#btn-name-sort').addEventListener('click', () => {sort('name')});
document.querySelector('#btn-date-sort').addEventListener('click', () => {sort('date')});
const nameInput = document.querySelector('#name');
const dateInput = document.querySelector('#date');
const amountInput = document.querySelector('#amount');

let salesRecord = [];
let name, date, amount, record, fees, totalDays = 0, total = 0;
let feesRecord = {};

function recordSale() {
    name = document.querySelector('#name').value;
    date = new Date(document.querySelector('#date').value);
    amount = Number(document.querySelector('#amount').value);

    record = { name, date, amount, totalDays, total };

    salesRecord.push(record);
    nameInput.value = '';
    dateInput.value = '';
    amountInput.value = '';

    createTable();
}

function createTable() {
    let tableContent = salesRecord.map(function (item) {
        return `
            <tr>
                <td>${item.name}</td>
                <td>${item.date.toLocaleDateString('pt-BR')}</td>
                <td>R$ ${(item.amount).toFixed(2)}</td>
                <td>${item.totalDays} dias</td>
                <td>R$ ${(item.total).toFixed(2)}</td>
            </tr>
            `
    });
    document.querySelector("#table tbody").innerHTML = tableContent.join("");
}

function calculateFees() {
    salesRecord.forEach(function (_record) {
        const presentDate = new Date();
        _record.totalDays = Math.floor((presentDate.getTime() - _record.date.getTime()) / (1000 * 24 * 3600)) - 1;

        if (_record.totalDays > 0) {
            fees, total = 2 + (_record.totalDays * 0.1);
            _record.total = _record.amount + (_record.amount * (fees, total / 100));
        } else {
            _record.totalDays = 0;
            _record.total = _record.amount;
        };
    });
    createTable();
    
    let totalValue = salesRecord.reduce((acc, cur) => acc + cur.total, 0);
    document.querySelector('#total-value').innerHTML = `R$ ${totalValue.toFixed(2)}`;
}

function sort(param) {
    function compare(a, b) {
        let paramOne, paramTwo;

        if (param === 'name') {
            paramOne = a.name.toUpperCase();
            paramTwo = b.name.toUpperCase();
        } else if (param === 'date') {
            paramOne = a.date;
            paramTwo = b.date;
        };

        let comparison = 0;
        if (paramOne > paramTwo) {
            comparison = 1;
        } else if (paramOne < paramTwo) {
            comparison = -1;
        };

        return comparison;
    }

    salesRecord.sort(compare);
    createTable();
};