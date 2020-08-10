'use strict';

let money = 100, 
    income = 'frilance', 
    addExpenses = 'Inetrnet, Taxi, PhoNe', 
    deposit = true, 
    mission = 10000, 
    period = 12,
    budgetDay,
    addExpenses1,
    amount1,
    addExpenses2,
    amount2,
    budgetMonth,
    sumAddExpensesElements = 0,
    targetMonth ;

    console.group('-------------Вывести в консоль тип данных значений переменных money, income, deposit;-----------------');
    console.log('variable "money" type is : ', typeof(money));
    console.log('variable "money" type is : ', typeof(income));
    console.log('variable "money" type is : ', typeof(deposit));
    console.groupEnd();

    console.group('-------------Вывести в консоль длину строки addExpenses-----------------');
    console.log('variable "addExpenses" line length is : ', addExpenses.length);
    console.groupEnd();

    console.group('-------------Вывести в консоль “Период равен (period) месяцев”' +
    ' и “Цель заработать (mission) долларов/гривен/юани”-----------------');
    console.log('"Период равен: ', period, ' месяцев”');
    console.log('"Цель заработать: ', mission, 'долларов"');
    console.groupEnd();
    
    console.group('-------------Привести строку addExpenses к нижнему регистру и '
    + 'разбить строку на массив, вывести массив в консоль-----------------');
    console.log(addExpenses.toLowerCase().split(', '));
    console.groupEnd();
    
    console.group('-------------Объявить переменную budgetDay и присвоить дневной бюджет. Вывести в консоль budgetDay-----------------');
    budgetDay = money / 30;
    console.log('дневной бюджет : ', +budgetDay.toFixed(2));
    //   Метод toFixed(n) округляет число до n знаков после запятой и возвращает строковое представление результата. И Унарный плюс, чтобы получить число
    // console.log('дневной бюджет : ', typeof(+budgetDay.toFixed(2)));
    console.groupEnd();
    

    //-- Task 3 --//

    money = prompt('Ваш месячный доход?');
    // console.log('money: ', money);

    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    // console.log('addExpenses: ', addExpenses);

    deposit  = confirm('Есть ли у вас депозит в банке?');
    // console.log('deposit: ', deposit);

    addExpenses1 = prompt('Введите обязательную статью расходов?');
    amount1 = prompt('Во сколько это обойдется?');
    // console.log('addExpenses1: ', addExpenses1, ' amount1: ', amount1);

    addExpenses2 = prompt('Введите обязательную статью расходов?');
    amount2 = prompt('Во сколько это обойдется?');
    // console.log('addExpenses2: ', addExpenses2, ' amount2: ', amount2);

    addExpenses.split(',').forEach(function(item) {
    sumAddExpensesElements += +item;
    //    console.log(sumAddExpensesElements); 
    });

    budgetMonth = money - sumAddExpensesElements - amount1 - amount2;
    console.group('-------------Вычислить бюджет на месяц-----------------');
    console.log(`Budget for month is ${budgetMonth}`); 
    console.groupEnd();
    
    targetMonth = mission / budgetMonth;
    console.group('-------------посчитать за сколько месяцев будет достигнута цель-----------------');
    console.log(`the goal will be achieved in ${Math.ceil(targetMonth)} month`); 
    console.groupEnd();

    console.group('-------------Поправить budgetDay учитывая бюджет на месяц-----------------');
    budgetDay = budgetMonth / 30;
    console.log('New day budget: ', Math.floor(budgetDay));
    console.groupEnd();

    console.group('-------------Написать конструкцию условий-----------------');
    if (budgetDay > 1200){
    console.log('У вас высокий уровень дохода!');
    } 
    else if (budgetDay > 600  && budgetDay < 1200){
    console.log('У вас средний уровень дохода :)');  
    }
    else if (budgetDay < 600){
        console.log('К сожалению у вас уровень дохода ниже среднего :(');  
    }
    else if (budgetDay < 0){
        console.log('Что то пошло не так!');  
    }

