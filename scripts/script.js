'use strict';

let money, 
    income = 'frilance', 
    addExpenses, 
    deposit, 
    mission = 10000, 
    period = 12,
    budgetDay,
    addExpenses1,
    amount1,
    addExpenses2,
    amount2,
    budgetMonth,
    targetMonth ;
    

    //-- Task 3 --//

    money = +prompt('Ваш месячный доход?');
    // console.log('money: ', money);
  
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    // console.log('addExpenses: ', addExpenses);

    deposit  = confirm('Есть ли у вас депозит в банке?');
    // console.log('deposit: ', deposit);

    addExpenses1 = prompt('Введите обязательную статью расходов?');
    amount1 = +prompt('Во сколько это обойдется?');
    // console.log('addExpenses1: ', addExpenses1, ' amount1: ', amount1);

    addExpenses2 = prompt('Введите обязательную статью расходов?');
    amount2 = +prompt('Во сколько это обойдется?');
    // console.log('addExpenses2: ', addExpenses2, ' amount2: ', amount2);

   
    budgetMonth = money -  amount1 - amount2;
    console.group('-------------Вычислить бюджет на месяц-----------------');
    console.log(`Budget for month is ${budgetMonth}`); 
    console.groupEnd();
    
    targetMonth = mission / budgetMonth;
    console.group('-------------посчитать за сколько месяцев будет достигнута цель-----------------');
    console.log(`the goal will be achieved in ${Math.ceil(targetMonth)} month`); 
    console.groupEnd();

    console.group('-------------Поправить budgetDay учитывая бюджет на месяц-----------------');
    budgetDay =  Math.floor(budgetMonth / 30);
    console.log('New day budget: ', budgetDay);
    console.groupEnd();

    console.group('-------------Написать конструкцию условий-----------------');
    if (budgetDay >= 1200){
    console.log('У вас высокий уровень дохода!');
    } 
    else if (budgetDay > 600  && budgetDay < 1200){
    console.log('У вас средний уровень дохода :)');  
    }
    else if (budgetDay <= 600 && budgetDay >= 0){
        console.log('К сожалению у вас уровень дохода ниже среднего :(');  
    }
    else if (budgetDay < 0){
        console.log('Что то пошло не так!');  
    }

