//'use strict';
let money, time;

function start() {
    
    while (isNaN(money) || money == "" || money == null || time == "" || time == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
    }
};

start(); 

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
                && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Введите необязательную статью расходов в этом месяце №" + (i + 1), '');
            if (typeof (a) === 'string' && typeof (a) != null
                && a != '' && a.length < 50) {
                console.log("done");
                appData.optionalExpenses[i + 1] = a;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        console.log(appData.moneyPerDay);
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка")
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("под какой процент?");
            appData.monthIncome = save * (percent / 100) / 12;
            alert("Доход с вашего депозита в месяц: " + (appData.monthIncome).toFixed(1));
        }
    },
    chooseIncome: function () {
        /*
        if (typeof (items) === 'string' && typeof (items) != null && items != '') {
            
        }
        else {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        }
        */
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        appData.income = items.split(',');
        appData.income.push(prompt('Может чтото еще?'));
        appData.income.sort();
        appData.income.forEach(function (item, i, arr) {
            alert("Способы доп. заработка №" + (i + 1) + ": " + item );
        });
    },

    outputAll: function () {
        for (key in appData) {
            alert("Наша программа включает в себя данные: " + key +" = " + appData[key]);
        }
    }

};
