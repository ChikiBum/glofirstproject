'use strict';

let money = +prompt('Ваш месячный доход?', 5000), 
    income = 'frilance', 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
    'Кредит, Вино, Огурцы').split(','), 
    deposit  = confirm('Есть ли у вас депозит в банке?'), 
    mission = 10000, 
    period = 12,
    budgetDay,
    addExpenses1 = prompt('Введите обязательную статью расходов?', 'хлебушек'),
    amount1 = +prompt('Во сколько это обойдется?', 100),
    addExpenses2 = prompt('Введите обязательную статью расходов?', 'девочки'),
    amount2 = +prompt('Во сколько это обойдется?', 100),
    targetMonth,
    accumulatedMonth  ;
    
    let showTypeOf = function(data){
        console.log(data, typeof(data));
    };

    // 7) вызовы функции showTypeOf 
    showTypeOf(money);
    showTypeOf(income);
    showTypeOf(deposit);
    
    // 1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
    let getExpensesMonth = function(){
       return amount1 +  amount2;
    };

    // 7) Расходы за месяц вызов getExpensesMonth
    console.log('getExpensesMonth: ', getExpensesMonth());

    // 7) Вывод возможных расходов в виде массива (addExpenses)
    console.log('addExpenses: ', addExpenses);
  
    
    // 2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
    let getAccumulatedMonth = function(){
        return money -  amount1 - amount2;
    };

    // 3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
    accumulatedMonth = getAccumulatedMonth();

    // 4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат
    let getTargetMonth = function(){
        return Math.floor(mission / accumulatedMonth);
    };

    // 7)Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 
    console.log('getTargetMonth: ', getTargetMonth());

    // 6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
    let getbudgetDay = function(){
        return Math.floor(accumulatedMonth / 30);
    };

    budgetDay = getbudgetDay();

    // 7) Бюджет на день (budgetDay)
    console.log('getbudgetDay: ', budgetDay);

    // 7) вызов функции getStatusIncome
    let getStatuIncome = function(){
        if (budgetDay >= 1200){
            return('У вас высокий уровень дохода!');
        } 
        else if (budgetDay > 600  && budgetDay < 1200){
            return ('У вас средний уровень дохода :)');  
        }
        else if (budgetDay <= 600 && budgetDay >= 0){
            return ('К сожалению у вас уровень дохода ниже среднего :(');  
        }
        else if (budgetDay < 0){
            return ('Что то пошло не так!');  
        }
    };

    console.log(getStatuIncome());