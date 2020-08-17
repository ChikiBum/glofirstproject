'use strict';
//проверка что на входе число
const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const isString = function(n){
    return !isNaN(parseFloat(n)) || n === null || n.trim() === '';
};

let money;

const start = function() {
    //1) Переписать функцию start циклом do while
    //проверка что на входе число
    do {
        money = prompt('Ваш месячный доход?', 5000);
    }
    while (!isNumber(money));
};

start();

let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth : 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    expensesMonth: 0,
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    asking: function(){

        if(confirm('У вас есть дополнительный заработок?')){
            let itemIncome;
            do {itemIncome = prompt('Какой у вас дополнительный заработок?', 'Продаю марки');}
                while (isString(itemIncome));

            let cashIncome;
            do {cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);}
                while (!isNumber(cashIncome));

            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
        'Кредит, Вино, Огурцы'); 
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?'); 
        for (let i = 0; i < 2; i++){
                
        let itemExpenses;
        do {itemExpenses = prompt('Введите обязательную статью расходов?', 'хлебушек');}
            while (isString(itemExpenses));

            
        let cashExpenses;
        do {cashExpenses = prompt('Во сколько это обойдется?', 100);}
            while (!isNumber(cashExpenses));
            
         appData.expenses[itemExpenses] = +cashExpenses;
            // console.log('appData.expenses:', appData.expenses);
        }
     },
    getExpensesMonth:function(){
                for (let key in appData.expenses) {
                appData.expensesMonth += +appData.expenses[key];
            }
           
        },
    getBudget:function(){
            appData.budgetMonth = appData.budget - appData.expensesMonth;
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);
            },

    getTargetMonth: function(){
        /*3) Если getTargetMonth возвращает нам отрицательное значение, то 
        вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”*/
                let targetMonthValue = Math.floor(appData.mission / appData.budgetMonth);
        
                if (targetMonthValue >= 0){
                    return targetMonthValue;
                } else {
                    return 'Цель не будет достигнута';
                }
            },
    getStatusIncome: function(){
        if (appData.budgetDay >= 1200){
            return('У вас высокий уровень дохода!');
        } 
        else if (appData.budgetDay > 600  && appData.budgetDay < 1200){
            return ('У вас средний уровень дохода :)');  
        }
        else if (appData.budgetDay <= 600 && appData.budgetDay >= 0){
            return ('К сожалению у вас уровень дохода ниже среднего :(');  
        }
        else if (appData.budgetDay < 0){
            return ('Что то пошло не так!');  
        }
    },
    getInfoDeposit: function(){
        if(appData.deposit){
            do {appData.percentDeposit = prompt('Какой годовой процент?', '10');}
                while (!isNumber(appData.percentDeposit));

            do {appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);}
                while (!isNumber(appData.moneyDeposit));
        }
    } ,
    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }
};

    appData.asking();
    appData.getExpensesMonth();
    appData.getBudget();

    console.log('Расходы за месяц : ' + appData.expensesMonth);

    console.log('цель будет достигнута (в месяцах) : ', appData.getTargetMonth());

    console.log('Уровень дохода :', appData.getStatusIncome());

    for (let key in appData) {
        console.log('Наша программа включает в себя данные:' + key + ' : ' + appData[key]);
    }

    let newAddExpenses = [];
    for (let key of appData.addExpenses) {
        let keyTrim = key.trim();
        newAddExpenses.push(' '+ keyTrim[0].toUpperCase() + keyTrim.slice(1));
    }


console.log(newAddExpenses.join());
