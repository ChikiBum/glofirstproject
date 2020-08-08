let money = 100, 
    income = 'frilance', 
    addExpenses = 'Inetrnet, Taxi, PhoNe', 
    deposit = true, 
    mission = 10000, 
    period = 12,
    budgetDay;

    console.group('-------------Вывести в консоль тип данных значений переменных money, income, deposit;-----------------');
    console.log('variable "money" type is : ', typeof(money));
    console.log('variable "money" type is : ', typeof(income));
    console.log('variable "money" type is : ', typeof(deposit));
    console.groupEnd();

    console.group('-------------Вывести в консоль длину строки addExpenses-----------------');
    console.log('variable "addExpenses" line length is : ', addExpenses.length);
    console.groupEnd();

    console.group('-------------Вывести в консоль “Период равен (period) месяцев” и “Цель заработать (mission) долларов/гривен/юани”-----------------');
    console.log('"Период равен: ', period, ' месяцев”');
    console.log('"Цель заработать: ', mission, 'долларов"');
    console.groupEnd();
    
    console.group('-------------Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль-----------------');
    console.log(addExpenses.toLowerCase().split(', '));
    console.groupEnd();
    
    console.group('-------------Объявить переменную budgetDay и присвоить дневной бюджет. Вывести в консоль budgetDay-----------------');
    budgetDay = money / 30;
    console.log('дневной бюджет : ', +budgetDay.toFixed(2));
    //   Метод toFixed(n) округляет число до n знаков после запятой и возвращает строковое представление результата. И Унарный плюс, чтобы получить число
    // console.log('дневной бюджет : ', typeof(+budgetDay.toFixed(2)));
    console.groupEnd();
    



