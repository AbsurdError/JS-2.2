// Задание 1

// 1.1

// for ( let i = 1; i <= 100; i++){
//     console.log(i)
// }

// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// 1.2

// for ( let i = 11; i <= 33; i++){
//     console.log(i)
// }

// let i = 11;
// while (i <= 33) {
//   console.log(i);
//   i++;
// }

// 1.3

// for ( let i = 0; i <= 100; i += 2){
//     console.log(i)
// }

// let i = 0;
// while (i <= 100) {
//   console.log(i);
//   i += 2;
// }

// 1.4

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);


// let sum = 0;
// let i = 1;
// while (i <= 100) {
//   sum += i;
//   i++;
// }
// console.log(sum);

// Задание 2

// 2.1

// let a = [1, 2, 3, 4, 5];
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
//   }

// 2.2

// let a = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < a.length; i++) {
//     result += a[i]
// }
// console.log(result)

// Задание 3

// 3.1

// var obj = {green: 'зелёный', red: 'красный', blue: 'голубой'}
// for (key in obj){
//     console.log(`Ключ: ${key} | Значение: ${obj[key]}`)
// }

// 3.2

// var obj = {'Коля': '200', 'Вася': '300', 'Петя': '400'}
// for (key in obj){
//     console.log(`${key} - зарплата ${obj[key]} долларов`)
// }

// Задание 4

// 4.1

// let arr = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 3 && arr[i] < 10){
//         console.log(arr[i])
//     }
// }

// 4.2

// let arr = [-3, -2, -1, 0, 1, 2, 3, 4];
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0){
//         sum += arr[i]
//     }
// }
// console.log(sum)

// 4.3

// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 4) {
//     console.log('Есть!');
//     break;
//   }
// }

// 4.4

// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i of arr) {
// let str = String(i);
// if (str[0] == 1 || str[0] == 2 || str[0] == 5)
// console.log(str);
// }

// 4.5

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = '-';

// for (let i = 0; i < arr.length; i++) {
//   result += arr[i] + '-';
// }

// console.log(result);

// 4.6

// let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// for (let i = 0; i < arr.length; i++) {
//   if (i === 5 || i === 6) {
//     document.write('<strong>' + arr[i] + '</strong>' + '<br>');
//   } else {
//     document.write(arr[i] + '<br>');
//   }
// }

// 4.7

// let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let day = new Date().getDay();
// let n = '';
// for (let i = 0; i < arr.length; i++) {
//   if (i === day) {
//     n += '<em>' + arr[i] + '</em><br>';
//   } else {
//     n += arr[i] + '<br>';
//   }
// }
// document.write(n);

// 4.8

// let n = 1000;
// let num = 0;
// for (num = 0; n >= 50; num++) {
//     n /= 2;
//   }
// console.log(n); 
// console.log(num); 
