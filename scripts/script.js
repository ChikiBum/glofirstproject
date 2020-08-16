'use strict';
//проверка что на входе число
const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
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
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    perios: 3,
    budget: 0,
    budgetDay: 0,
    budgetMonth : 0,
    expensesMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
            'Кредит, Вино, Огурцы'); 
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?'); 
            for (let i = 0; i < 2; i++){
                let expenseValue,
                    expensesName = prompt('Введите обязательную статью расходов?', 'хлебушек');
                         
                    do {expenseValue = prompt('Во сколько это обойдется?', 100);}
                    while (!isNumber(expenseValue));
                   
                    appData.expenses[expensesName] = expenseValue;
                    // console.log('appData.expenses:', appData.expenses);
            }
     },
    getExpensesMonth:function(){
                for (let prop in appData.expenses) {
                appData.expensesMonth += +appData.expenses[prop];
            }
            
        },
    getBudget:function(){
            appData.budgetMonth = money - appData.expensesMonth;
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
    }
};

    appData.asking();
    appData.getExpensesMonth();
    appData.getBudget();

    console.log('Расходы за месяц : ' + appData.expensesMonth);

    console.log('цель будет достигнута (в месяцах) : ', appData.getTargetMonth());

    console.log('Уровень дохода :', appData.getStatusIncome());

    console.group('Наша программа включает в себя данные:');
        
    for (let key in appData) {
        console.log(key + ' : ' + appData[key]);
    }
    


   