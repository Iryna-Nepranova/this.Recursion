/*1.	Создайте объект calculator с методами:
a.	read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
b.	sum() возвращает сумму этих двух значений
c.	multi() возвращает произведение этих двух значений
d.	diff() возвращает разницу
e.	div() возвращает частное

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );

*/

let calculator = {

    read() {
        this.x = +prompt("Значение х", 0);
        this.y = +prompt("Значение у", 0);
    },

    sum() {
        return this.x + this.y;
    },

    multi() {
        return this.x * this.y;
    },

    diff() {
        return this.x - this.y;
    },

    div() {
        return this.x / this.y;
    },
};

calculator.read();
alert(calculator.sum());
alert(calculator.multi());
alert(calculator.diff());
alert(calculator.div());


/*2.Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(),
при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением,
записанным в свойстве объекта message.*/

let coffeeMachine = {
    message: "Your coffee is ready!",
    delay: 3000,
    start() {

        setTimeout(() => alert(this.message), this.delay);

    }

};

coffeeMachine.start();

/*3. Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения.
Используйте концепцию chaining для создания цепочки вызовов.

var current = counter.inc().inc().dec().inc().dec().getValue();
alert(current); // 1 */

let counter = {
    count: 0,
    inc: function() {
        this.count++;
        return this;
    },
    dec: function() {
        this.count--;
        return this;
    },
    getValue: function() {
        this.count;
        return counter.count;
    },
};

let current = counter.inc().inc().dec().inc().dec().getValue();
alert(current); // 1

/*4. Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv.
Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. 
Для расчетов все методы используют функционал ранее созданного калькулятора.

alert(me.getSum(1, 1));
alert(me.getDiv(1, 0));*/


let me = {
    getSum(x, y) {
        this.x = x;
        this.y = y;
        return this.x + " + " + this.y + " = " + calculator.sum.call(this, this.x, this.y);
    },
    getDiff(x, y) {
        this.x = x;
        this.y = y;
        return this.x + " - " + this.y + " = " + calculator.diff.call(this, this.x, this.y);
    },
    getMulti(x, y) {
        this.x = x;
        this.y = y;
        return this.x + " * " + this.y + " = " + calculator.multi.call(this, this.x, this.y);
    },
    getDiv(x, y) {
        this.x = x;
        this.y = y;
        return this.x + " / " + this.y + " = " + calculator.div.call(this, this.x, this.y);
    }
};

alert(me.getSum(1, 1));

alert(me.getDiv(1, 0))



/*5.	Есть следующий код:
var country = {
name: 'Ukraine',
language: 'ukrainian',
capital: {
name: 'Kyiv',
population: 2907817,
area: 847.66
    }
};

function format(start, end) {
console.log(start + this.name + end);
}

Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:

format.call(country,name); // Ukraine
format.apply(country,[name]); // [Ukraine]
format.call(country,capital.name); // Kyiv
format.apply(/Ваш код /); // Kyiv
format.apply(/ Ваш код /); // undefined */

let country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}
format.call(country, "", ""); // Ukraine
format.apply(country, ["[", "]"]); // [Ukraine]
format.call(country.capital, "", ""); // Kyiv
format.apply(country.capital, ["", ""]) // Kyiv
format.apply(null); //undefined


/*6.	Создайте объект user с полем name. Создайте функцию format с параметрами start и end:

function format(start, end) {
console.log(start + this.name + end);
}

Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя

userFormat('<<<', '>>>'); // <<<John>>>

Реализуйте решение текущего задания используя метод bind().*/


function bind(func, context) {
    return function() {
        return func.apply(context, arguments);
    };
}

let user = { name: 'John', };

function format(start, end) {
    console.log(start + this.name + end);
}

let userFormat = bind(format, user);

userFormat('<<<', '>>>');

/*7.	Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: 
разделитель и строки передаются в параметрах функции. 
Используя карринг, создайте новую функцию hello, которая которая выводит приветствие тому,
кто передан в ее параметре:

hello('World'); // Hello World
hello('John'); // Hello John */

function concatStr(str1, delimeter, str2) {
    return `${str1}${delimeter}${str2}`
};

let hello = concatStr.bind(null, "Hello ", "");

console.log(hello('World'));
console.log(hello('John'));

//РЕКУРСИЯ
/*1. Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – 
a) используя цикл b) используя рекурсию:*/

//a

let num = +prompt("Введите число", "Number");
let cube = num;
for (let i = 0; i < 2; i++) {
    cube *= num;

}
alert(cube);

//b

function cube(num, n) {
    if (n == 1) {
        return num;
    } else {
        return num * cube(num, n - 1);
    }
}

alert(cube(2, 3));

/*2.	Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:

console.log( sum(1, 2, 3, 4, 5)); // 15 */


function sum(...args) {

    if (args.length === 0) return 0;

    return args[0] + sum(...args.slice(1));
}

console.log(sum(1, 2, 3, 4, 5)); // 15