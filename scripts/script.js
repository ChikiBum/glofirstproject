'use strict';
//проверка что на входе число
const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money, 
    income = 'frilance', 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
    'Кредит, Вино, Огурцы').toLowerCase().split(','), 
    deposit  = confirm('Есть ли у вас депозит в банке?'), 
    mission = 10000, 
    period = 12,
    budgetDay,
    accumulatedMonth  ;
    
    const start = function() {
        
        //1) Переписать функцию start циклом do while
        //проверка что на входе число
        do {money = prompt('Ваш месячный доход?', 5000);}
        while (!isNumber(money));
    };

    start();

    const showTypeOf = function(data){
        console.log(data, typeof(data));
    };

    showTypeOf(money);
    showTypeOf(income);
    showTypeOf(deposit);

    let expenses = [];
    
    //Функция возвращает сумму всех обязательных расходов за месяц
    const getExpensesMonth = function(){
        let sum = 0,
            expenseValue;

        for (let i = 0; i < 2; i++){

            // if (i === 0){
            //     addExpenses1 = prompt('Введите обязательную статью расходов?', 'хлебушек');
            // } else  if (i === 1){
            //     addExpenses2 = prompt('Введите обязательную статью расходов?', 'девочки');
            // }
            expenses[i] = prompt('Введите обязательную статью расходов?', 'хлебушек');
          
    /*2) Добавить проверку что введённые данные являются числом, которые мы получаем на 
    вопрос 'Во сколько это обойдется?’ в функции  getExpensesMonth*/
            do {expenseValue = prompt('Во сколько это обойдется?', 100);}
            while (!isNumber(expenseValue));

            sum += +expenseValue;
        }
       
        return sum;
    };

    let expensesAmount = getExpensesMonth();

    console.log('Обязательные статью расходов: ', expenses);
    console.log('Расходы за месяц : ' + expensesAmount);

    //Вывод возможных расходов в виде массива (addExpenses)
    console.log('addExpenses: ' + addExpenses);
  
    
    //Функция возвращает Накопления за месяц (Доходы минус расходы)
    const getAccumulatedMonth = function(){
        return money - expensesAmount;
    };

    accumulatedMonth = getAccumulatedMonth();

    // Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат
    const getTargetMonth = function(){

/*3) Если getTargetMonth возвращает нам отрицательное значение, то 
вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”*/

        let targetMonthValue = Math.floor(mission / accumulatedMonth);

        if (targetMonthValue >= 0){
            return targetMonthValue;
        } else {
            return 'Цель не будет достигнута';
        }
    };

    //Cрок достижения цели в месяцах 
    console.log('getTargetMonth: ', getTargetMonth());

    //budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
    const getbudgetDay = function(){
        return Math.floor(accumulatedMonth / 30);
    };

    budgetDay = getbudgetDay();

    //Бюджет на день (budgetDay)
    console.log('getbudgetDay: ', budgetDay);

    const getStatuIncome = function(){
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