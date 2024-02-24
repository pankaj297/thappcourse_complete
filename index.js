// var myName = "Pankaj naik";
// console.log(myName);

// var myAge = "20";
// console.log(myAge);
// console.log(typeof(myAge));

//Arithmatic oprators
// var a = 10, b = 5;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

//Assigment oprators
// var a = 10;
//  a += 10;
// a -= 5;
// a *=5;
// a /= 2;
//  console.log(a);

//comparission oprators
// var a = 10;
// var b = 9;

// console.log(a > b);
// console.log(a < 9);
// console.log(a >= 10);
// console.log(a <= b);
// console.log(a == b);

//Logical Oprators
// var a = 10 , b = 8;
// console.log(a > b && a > b);
// console.log(a < b && a < b);
// console.log(a > b && a < b);
// console.log(a < b && a > b);

// console.log(a > b || a > b);
// console.log(a < b || a < b);
// console.log(a > b || a < b);
// console.log(a < b || a > b);

// console.log(!true);
// console.log(!false);

// increment and dicrement operators
// var num = 20;
// var numis = num++ + 5;
// console.log(num);
// console.log(numis);

// dicrement operator
// var num = 20;
// var numis = --num - 5;
// console.log(num);
// console.log(numis);


// 4 challenge time
// what will bt the output of 3**3

// console.log(3**3);

// what will be the ouput , when we add a number and a string

// console.log(5 + "pankaj");
// console.log(5 - "pankaj");

// console.log(5 + "5");
// console.log(5 - "5");

//sol 3  imp
// write a program to swap two number
// var a = 10;
// var b = 5;

// var c = b; // c = 5
// b = a; // b = 10
// a = c; // a = 5

// console.log(a);
// console.log(b);

// var a = 10;
// var b = 5;

// c = a + b; //  c = 15
// a = c - a;
// b = c - b;

// console.log(a);
// console.log(b);

// var num1 = 5;
// var num2 = 5;

// console.log(num1 == num2);
// console.log(num1 === num2);

// var age = 20;

// if(age >= 18){
//   console.log("you can drive!");    
// }else{
//     console.log("you can't drive!");
// }

// write a program that workd out whether if a give year is a leap year or not?
// var year = 2024;

// if(year % 4 == 0){
//     if(year % 100 == 0){
//        if(year % 400 == 0){
//            console.log("leap year");
//        }else{
//         console.log("not a leap year");
//        }
//     }else{
//         console.log("leap year");
//     }
// }else{
//     console.log("not a leap year");
// }


// conditional (ternary) operator
// var age = 12;
// console.log((age >= 18)? "you can vote " : "you can't vote");


// 1st  without break statment 
// Finde the Area of circle , triangle , and rectangle?
// var area = "ractangel";
// var PI = 3.142, length = 5; base = 3; radius = 6;

// switch(area){
//     case 'cricle':
//         console.log("area of circle is : " + PI*radius**2);
//         break;

//     case 'triangle':
//         console.log("area of triangle is : " + (length * base)/ 2);
//         break;

//     case 'ractangel':
//         console.log("area of ractangel is : "+ (length * base));
//         break;

//     default:
//         console.log("this data is invalid");
// }

// var num = 0;
// while(num <= 20){
//     console.log(num);
//     num++;
// }

// var num = 1;
// do{
//     console.log(num)
//     num++;
// }while(num <= 20);


// for(var num = 1; num <= 50; num++){
//     console.log(num);
// }


//javascript program to print table for given number (8,9,12,15) using for loop?
//TABLE PRINT
//  var table = 1;
//  for(var table = 1; table <= 10; table++){
//     var tableof = 10;
//     console.log(tableof + " * " + table + " = " + tableof * table);
//  }

// function sum (a , b){
//     var total = a + b;
//     console.log(total);

// }

// sum(20 , 30);

// function sum(a , b){
//     return a + b;
// }

// var funEx = sum(5,25);
// console.log('sum of tow num : ' + funEx);



// 2] Template literals  imp

// for(let num = 1; num <= 10; num++ ){
//     let tableof = 12;
//     console.log(`${tableof} * ${num} = ${tableof * num}`);
// }

// 3] Default Parameters👇
// function mult(a , b = 5){
//     return a + b;
// }

// console.log(mult(10));


// Fat Arror Function

// const sum = () => {
//     let a = 10, b = 20;
//     let sum = a + b;
//     return `the sum of two number is : ${sum}`
// }

// console.log(sum());

// const sum = () => `the sum of two number is : ${(a = 5) + (b = 10)}`;
// console.log(sum());



//Array in js

//  var myFrinds = ['pankaj','naik', 'akash', 'kalpesh', 'prem', 22 , ture, 65];
//  console.log(myFrinds);

// Traversal in array
// var myFrinds = ['pankaj', 'akash', 'naik', 'rajesh'];

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


// var myFrinds = ['pankaj', 'akash', 'naik', 'rajesh'];

// myFrinds.forEach(function(element, index, array)
// {
// console.log(element + "index : "+ index + " " + array);
// });

// var myFrinds = ['pankaj', 'akash', 'naik', 'rajesh'];

// myFrinds.forEach((element, index , array) => { //fact arror
//    console.log(element + "index : "+ index + " " + array)
// });

// let i = 1;
// while(i <= 10){
//    let tableof = 12;
//    console.log(` ${tableof} * ${i} =  ${tableof * i}`);
//    i++;
// }

// function sum (a , b = 5){
//    return a + b;
// }

// console.log(sum(12));

// let age = 78;

// if (age < 21) {
//    console.log("You are not eligible for a driving license");
// }
// else if (age < 70) {
//    console.log("You can get a driving license");
// }
// else {
//    console.log("Upar Jane Ki Tayari Kar Budhhe");
// }










