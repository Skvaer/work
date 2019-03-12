(function () {
    'use strict';
    let money, time;

    function start() {
        money = +prompt("Какой бюджет на месяц?", '');
        time = prompt("Введите дату в формате YYYY-MM-DD", '');

        while (isNaN(money) || money == '' || money == null) {
            money = +prompt("Какой бюджет на месяц?", '');
        }
    }
    start();
    var appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        saving: true
    };

    function chooseExpenses() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                alert("Введите правильные данные повторно!");
                i--;
            }
        }
    }
    chooseExpenses();

    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневний бюджет становит: " + appData.moneyPerDay);
    console.log(appData);

    if (appData.moneyPerDay < 100) {
        console.log("Минимальний уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Високий уровеень достатка");
    } else {
        console.log("Произошла ошибка");
    }


    function checkSaving() {
        if (appData.saving == true) {
            let save = +prompt("Какова сума накоплений?", ""),
                persent = +prompt("Под какой процент?", "");
            appData.monthIncome = save / 100 / 12 * persent;
            alert("Доход за месяц с вашего депозита: " + appData.monthIncome.toFixed());
        }
    }

    checkSaving();
}());