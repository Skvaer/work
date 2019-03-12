(function () {
    'use strict';
    var money = +prompt("Какой бюджет на месяц?", ''),
        time = prompt("Введите дату в формате YYYY-MM-DD", '');
    var appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        saving: false
    };

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
    appData.moneyPerDay = appData.budget / 30;
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
}());