// -------------------------- Home work 2 --------------------------
// -------------------------- Курочка Екатерина Николаевна --------------------------

//  Преобразование типов  ----------------

// let a = 0 || 'string';  // string  - || возвращает второй операнд, так как первый преобразовывается в false
// let a = 1 && 'string';  // string  - && возвращает второй операнд, так как первый преобразовывается в true
// let a = null || 25;  // 25  - || возвращает второй операнд, так как первый преобразовывается в false
// let a = null && 25;  // null  - && возвращает первый операнд, так как он преобразовывается в false
// let a = null || 0 || 35;  // 35  - || возвращает последний операнд, так как первые два преобразовываются в false
// let a = null && 0 && 35;  // null  - && возвращает первый операнд, так как он преобразовывается в false


// 12 + 14 + '12';  //  2612  - сложение 12 и 14, затем преобразование их суммы в строку путем сложения со строкой
// 3 + 2 - '1';  //  4  - вычитание преобразовывает строку в число
// '3' + 2 - 1;  // 31  - '3' + 2 преобразовывается в строку '32', затем при вычитании происходит преобразование строки в число
// true + 2;  //  3  - неявное преобразование true в 1
// +'10' + 1;  //  11  - неявное преобразование строки в число унарным оператором +
// undefined + 2;  //  NaN  - undefined преобразовывается в NaN
// null + 5;  // 5  - null преобразовывается в 0
// true + undefined;  //  NaN  - undefined преобразовывается в NaN


//  If else   ----------------------------

//  1 --- Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
// let z = 'visible';

// if (z === 'hidden') {
// 	z = 'visible';
// } else {
// 	z = 'hidden';
// };
// console.log(z);


//  2 --- Используя if, записать условие:
//  a) если переменная равна нулю, присвоить ей 1;
//  b) если меньше нуля - строку “less then zero”;
//  c) если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
// let b = 2;

// if (b === 0) {
// 	b = 1;
// } else if (b < 0) {
// 	b = 'less then zero';
// } else {
// 	b *= 10;
// }
// console.log(b);

//  3 --- Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
// let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }

// if (car.age > 5) {
// 	console.log('Need Repair');
// 	car.needRepair = true;
// } else {
// 	car.needRepair = false;
// };
// console.log(car);

//  4 --- Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
// let item = { name: 'Intel core i7', price: '100$', discount: '15%' };

// if (item.discount && parseFloat(item.discount) > 0) {
// 	item.priceWithDiscount = parseFloat(item.price) - parseFloat(item.price) * parseFloat(item.discount) / 100;
// 	console.log(item.priceWithDiscount);
// } else {
// 	console.log(item.price);
// };

//  5 --- Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
// let product = {
//     name: 'Яблоко',
//     price: '10$'
// };
// let min = 10; // минимальная цена
// let max = 20; // максимальная цена

// if (parseFloat(product.price) >= min && parseFloat(product.price) <= max) {
// 	console.log(product.name);
// } else {
// 	console.log('Товаров не найдено');
// };


//  Тернарный оператор. Switch case   -------------------

//  1 --- Записать в виде switch case следующее условие:
// let a = 'zdfgh';

// if (a === 'block') {
// 	console.log('block');
// } else if (a === 'none') {
// 	console.log('none');
// } else if (a === 'inline') {
// 	console.log('inline');
// } else {
// 	console.log('other');
// };

// switch (a) {
// 	case 'block':
// 		console.log('block');
// 		break;
// 	case 'none':
// 		console.log('none');
// 		break;
// 	case 'inline':
// 		console.log('inline');
// 		break;
// 	default:
// 		console.log('other')
// };

//  Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.
//  1 --- Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
// let z = 'visible';

// z === 'hidden' ? z = 'visible' : z = 'hidden';
// console.log(z);


// 2 --- Записать условие:
//  a) если переменная равна нулю, присвоить ей 1;
//  b) если меньше нуля - строку “less then zero”;
//  c) если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

// let c = -2;

// c === 0 ? c = 1 
// 	: c < 0 ? c = 'less then zero'
// 		: c *= 10;
// console.log(c);


//  3 --- Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
// let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }

// car.age > 5 ? (console.log('Need Repair'), car.needRepair = true)
// 	: car.needRepair = false;
// console.log(car);