(function () {
    'use strict';

    var money = +prompt("Какой бюджет на месяц?", 0);
    var time = prompt("Введите дату в формате YYYY-MM-DD", "");

    var optionalExpenses = {};

    var appData = {
        addMoney: money,
        timeData: time,
        expenses: [],
        optionalExpenses: 0,
        income: [],
        saving: false
    };

    console.log(appData);

    let inputData1 = prompt("Введите обязательную статью расходов в этом месяце", "");
    let inputData2 = +prompt("Во сколько обойдется?", 0);
    appData.addMoney = appData.addMoney - inputData2;
    appData.expenses.push(inputData1 + " : " + inputData2);
    inputData1 = prompt("Введите обязательную статью расходов в этом месяце", "");
    inputData2 = +prompt("Во сколько обойдется?", 0);
    appData.addMoney = appData.addMoney - inputData2;
    appData.expenses.push(inputData1 + " : " + inputData2);

    alert("Ваш бюджет на 1 день составляет: " + appData.addMoney/30 + " $");
}());