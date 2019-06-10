'use strict';
var money,
    expenses1,
    expensesprice1,
    expenses2,
    expensesprice2,
    time,
    inc = [];

function takeinput() {
    money = document.getElementById('money').value;
    time = document.getElementById('time').value;
    console.log(money, time);
    
};

function takeinput2() {
    expenses1 = document.getElementById('expenses1').value;
    expensesprice1 = document.getElementById('expensesprice1').value;
};
function takeinput3() {
    expenses2 = document.getElementById('expenses2').value;
    expensesprice2 = document.getElementById('expensesprice2').value;
};

function onedaybudget(){
    alert("Ваш бюджет на месяц: "+ money/30);
};

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
appData.expenses.expenses1 = expensesprice1;
appData.expenses.expenses2 = expensesprice2;
console.log(appData.expenses);

