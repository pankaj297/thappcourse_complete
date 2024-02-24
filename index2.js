//Data Types

// var myName = "Pankaj  Naik";
// console.log(myName);

// var myAge = 20;
// console.log(myAge);

// var Hi = true;
// console.log(Hi);

// console.log(typeof(Hi));


//Increment and dicrement Operators

// var num = 20;

// var num1 = ++num;
// console.log(num1);

// var num1 = num++ +3;
// console.log(num1);


// var num = 21;
// var num1 = --num;
// console.log(num1);

// var num1 = num-- -3;
// console.log(num1);


//String concatenation operators

// console.log("Hello" + " Pankaj Naik");

// var myname = "Pankaj";
// console.log(myname + " Naik");
// console.log(myname + " Chavan");
// console.log(myname + " Rathod");

// console.log(3**3); //3*3*3

// console.log(5 + "Pankaj");


// swap two number
// var a = 5;
// var b = 10;

// var c = b;
// b = a;
// a = c;

// console.log("a = " + a);
// console.log("b = " + b);

// swap two number without using 3rd variable
// var a = 5;
// var b = 10;

// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a);
// console.log(b);

// Difference between == and ===

// var num1 = 5;
// var num2 = '5';

// console.log(num1 == num2);
// console.log(num1 === num2);

// if...else conditions
// var tom = 'rain';

// if(tom == 'rain'){
//     console.log('take a raincoat');
// }else{
//     console.log("Don't need raincoat");
// }

// write a program that workd out whether if a give year is a leap year or not?

// var year = 2020;

// if(year % 4 == 0){
//     if(year % 100 == 0){
//         if(year % 400 == 0){
//             console.log("This is leap years");
//         }else{
//            console.log("this is not leap years");
//         }
//     }else{
//         console.log("This is leap years");
//     }
// }else{
//     console.log("is not  leap years ");
// }

//conditional (ternary) Operators

// var age = 20;

// if(age > 18){
//     console.log("You can drive");
// }else{
//     console.log("You can not drive");
// }

// var age = 17;
// console.log((age >= 18) ? "your can vote" : "You can't vote");


// 1st  without break statment 
// Finde the Area of circle , triangle , and rectangle?

// var area = "circle";
// var PI = 3.142, l = 5, b = 4, r = 4;

// if(area == "circle"){
//     console.log("Area of Circle is = " + PI*r**2);
// }if(area == "triangle"){
//     console.log("Area of triangle is = "+ (l * b) / 2);
// }if(area == "reactangle"){
//     console.log("Area of Ractangle is = " + (l + b));
// }else{
//     console.log("Place Enter valid data");
// }

// var num = 1;
// while(num <= 100){
//     console.log(num);
//     num++;
// }

// do{
//     console.log(num);
//     num++;
// }while(num <= 100);

// for(var i = 1; i <= 100; i++){
//     console.log(i);
// }

//javascript program to print table for given number (8,9,12,15) using for loop?
//TABLE PRINT

// var table = 1;

// for(var table = 1; table <= 10; table++){
//      var tableof = 9;
//      console.log(tableof + " * " + table + " = " + tableof * table );
// }


//Section 5
// Function in javaScript

// function sum(){
//     var a = 10, b = 20;
//     var total = a + b;
//     console.log(total);
// }

// sum();

// function sum(a,b){
//     var total = a + b;
//     console.log(total);
// }
//  sum();

//  sum(20,30);

// function sum(a , b){
//     return a + b;
// }

// var fun = function(a,b){
//     return total = a+b;
// }

// var sum = fun(13,45);

// console.log('the sum of two numbers is '+ sum);

// let myName = "Pankaj Naik";
// console.log(myName);

// myName = "Naik Pankaj";
// console.log(myName);

// function biodata(){
//     var myFirstName = "Panakaj";
//     console.log(myFirstName);

//     if(true){
//         var myLastName = "Naik";
//         console.log('inner ' + myLastName);
//         console.log('inner '+ myFirstName);
//     }
//     console.log('innerOuter '+ myLastName);
// }

// biodata();

// 2] Template literals  imp
// for(let num = 1; num <= 10; num++){
//     let tableof = 12;
//     console.log(`${tableof} * ${num} = ${tableof * num}`);
// }


// 3] Default Parameters👇
// function mult(a , b = 5){
//     return a * b;
// }

// console.log(mult(10));

// Fat Arror Function
// const sum = () => {
//     let a = 5; b = 6;
//     let sum = a + b;
//     return `the sum of two number is ${sum}`;
// }

// console.log(sum());

// const sum = () => `the sum of the two number is ${(a = 5) + (b = 10)}`;

// console.log(sum());


//Array in java Script🟠
// var myFrinds = ['pankaj', 'naik', 'akash', 'naik'];
// console.log(myFrinds.length);
// console.log(myFrinds[myFrinds.length -1]);


// var myFrinds = ['pankaj', 'akash', 'naik', 'rajesh'];

// for(var i = 0; i < myFrinds.length; i++){
//     console.log(myFrinds[i]);
// }


//After E56 we have for..in and for..of loop too      used for provide index number
// var myFrinds = ['pankaj', 'akash', 'naik', 'rajesh'];

// for(let elements in myFrinds){
//     console.log(elements);
// }


// for(let elements of myFrinds){
//     console.log(elements);
// }


// Array.prototype.forEach()
//calls a function for each elements in the array
// var myFrinds = ['pankaj', 'akash', 'naik', 'rajesh'];

// myFrinds.forEach(function(element, index, aray){
//     console.log(element + " index : "+ index + " " + aray)
// });


// var myFrinds = ['pankaj', 'akash', 'naik', 'rajesh'];

// myFrinds.forEach((element, index, aray) => {
//     console.log(element + " index : "+ index + " " + aray)
// });


// Array Subsection 4 Perform CRUD 🟠

//Array.prototype.push()
// const animals = ['pigs', 'goast' , 'sheep'];
// const count = animals.push('chicken');
// console.log(count);
// console.log(animals);

//Array.prototype.unshift()
// const animals = ['pigs', 'goast' , 'sheep'];
// const coun = animals.unshift('chicken');
// console.log(coun);
// console.log(animals);

// const plants = ['pink', 'yellow', 'read', 'white', 'green'];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);


// const plants = ['pink', 'yellow', 'read', 'white', 'green'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);

// const months = ['Jan', 'March', 'April', 'June', 'July'];
// const newMonts = months.splice(months.length, 0 , "Dec");
// console.log(months);
// console.log(newMonts);


// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexofMonth = months.indexOf('June');
// console.log(indexofMonth);

// if(indexofMonth != -1){
//     const updateMonth = months.splice(indexofMonth, 1, "june");
// }else{
//     console.log('No such data found');
// }

// console.log(months);


//Map and Reduce Method  🟠
//Array.prototype.map()
// const array1 = [1 , 4 , 9 , 16 , 25];
// let newArr = array1.map((curElem, index, arr) => {
//      return `index no ${index} the value is ${curElem} belong to ${arr}`;
// });

// console.log(newArr); 

// const array1 = [1 , 4 , 9 , 16 , 25];

// let newArrfor = array1.forEach((curElem, index, arr) => {
//     return `index no ${index} the value is ${curElem} belong to ${arr}`;
// });

// console.log(newArrfor);

// 1: Finde the square root of each element in an array?
// 2: Multiply each element by 2 and return only those element which which are greater than 10?

// let arr = [25 , 36 , 49 , 64 , 81];

// let arrSqr = arr.map((curElem) => {
//     return Math.sqrt(curElem);
// });


// console.log(arrSqr);


// let arr = [2 , 3 , 4 , 6 , 8];

// let arr2 = arr.map((curelem) => {
//     return curelem * 2;
// }).filter((curelem) => {
//     return curelem < 10;
// });

// console.log(arr2);

// let arr2 = arr.map((curelem) => curelem * 2).filter((curelem) => curelem < 10);

// console.log(arr2);


// Reduce Method 🟠
// let arr = [5, 6, 2];

// let sum = arr.reduce((accumulator, curElem, index, arr) => {
//     debugger;
//     return accumulator += curElem;
// }, 7);

// console.log(sum);


// let sum = arr.reduce((accumulator, curElem, index, arr) => accumulator += curElem, 7);

// console.log(sum);



//How t fallten an array
//converting 2d and 3d aray into one dimensional array

// array of an array
// const arr = [
//     [`zone_1`, `zone_2`],
//     [`zone_3`, `zone_4`],
//     [`zone_5`, `zone_6`],
//     [`zone_7`, [`zone9`,`zone_8`]]
// ];

// let flatarr = arr.reduce((accum, curval) => {
//      return accum.concat(curval);
// })
// console.log(flatarr);


//flatMethod
// console.log(arr.flat());
// console.log(arr.flat(2));
// console.log(arr.flat(Infinity));

