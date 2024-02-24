// data type 

// var myName = "Pankaj Naik";
// console.log(myName);

// var myAge = 20;
// console.log(myAge);

// var Hi = true;
// console.log(Hi);

// console.log(typeof(Hi));

// increment and dicrement operators
// var num = 20;
// var numis = ++num;
// console.log(num);
// console.log(numis);

// var num = 20;
// var numis = num++ + 5;
// console.log(num);
// console.log(numis);

// dicrement operator

// var num = 20;
// var numis = num-- + 5;
// console.log(num);
// console.log(numis);

// var num = 20;
// var numis = --num + 5;
// console.log(num);
// console.log(numis);

// string concatenation (operators)
// console.log("hello " + "pankaj");

// var myname = "pankaj";

// console.log(myname + " naik");
// console.log(myname + " chavan");
// console.log(myname + " rathod");

// 4 challenge time
// what will bt the output of 3**3

//sol 1;
// console.log(3**3);  //3*3*3

//sol 2;
// what will be the ouput , when we add a number and a string
// console.log(5 + "pankaj");

//sol 3  imp
// write a program to swap two number
// var a = 5;
//  var b = 10;
//  output b = 5, a = 10.

// var c = b;
// b = a;
// a = c;

// console.log(a);
// console.log(b);

//sol 4
// write a program to swap tow numbers without using third variable?
// var a = 5;
//  var b = 10;
// //  output b = 5, a = 10.
//  a = a+b; // a = 15;
//  b = a - b; //b = 5;
//  a = a - b; // a = 10;

//  console.log(a)
//  console.log(b);

//difference between == and ===

// var num1 = 5;
// var num2 = '5';

// console.log(num1 == num2);
// console.log(num1 === num2);


// if...else conditions
// var tomr = 'rain';

// if(tomr = 'rain'){
//     console.log('take a raincoat');
// }else{
//     console.log('No need to take a raincoat');
// }

// write a program that workd out whether if a give year is a leap year or not?

// var  year = 2024;

// if(year % 4 == 0){
//    if(year % 100 == 0){
//     if(year % 400 == 0){
//           console.log("this year "+ year + " is a leap year");
//     }else{
//         console.log("this year "+ year + " is not leap year");
//     }
//    }else{
//      console.log("this year "+ year + " is a leap year");
//    }
// }else{
//     console.log("this year "+ "is not a leap year");
// }



// conditional (ternary) operator

//  var age = 20;

//  if (age >= 18){
//     console.log("you can ride");
//  }else{
//     console.log("you can not ride");
//  }

//  var age = 17;
// console.log((age >= 18) ? "you can vote" : "you can't vote");

// 1st  without break statment 
// Finde the Area of circle , triangle , and rectangle?

// var area = "triangle";
// var PI = 3.142, l = 5, b = 4, r = 4;

// if(area == "circle" ){
//     console.log("The area of circle is : " + PI*r**2 );
// }else if(area == "triangle"){
//     console.log("area of triangle is : " + (l * b)/2);
// }else if (area == "rectangle"){
//     console.log("area of ractangle is : " + (l + b));
// }else {
//     console.log("Place enter valid data");
// }

// var area = "rectangle";
// var PI = 3.142, l = 5, b = 4,  r = 3;

// switch(area){
//     case 'circle':
//         console.log("the area of the circle is : " + PI*r**2);
//         break;
//     case 'triangle':
//         console.log("The area of triangle is : " + (l * b)/2);
//         break;
//     case 'rectangle':
//         console.log("the area of the rectangel is : "+ (l * b));
//         break;
//     default:
//         console.log("Please enter valid data");
// }

// var num = 0;
// while(num <= 100){
//      console.log(num);
//      num++;
// }

// var num = 0;
//  do{
//     console.log(num);
//     num++;
//  }while(num <= 10);

// var num = 0;

// for(var num = 0; num <= 10; num++){
//     console.log(num);
// }

//javascript program to print table for given number (8,9,12,15) using for loop?
//TABLE PRINT
// var table = 1;
// for(var table = 1; table <= 10; table++){
//     var tableof = 9;
//     console.log(tableof + " * "+ table + " = " + tableof * table);
// }





// Section 5
// Function in javaScript
// var a = 10;
// var b = 20; 
// var sum = a + b;
// console.log(sum);

// function sum(){                   //function defination
//     var a = 10 , b = 20;
//     var total = a + b;
//     console.log(total);
// }

// sum(); //calling a function


// what is the Difference between function parameter vs function arguments
// function parameters are the names listed in the function's definition.
// function arguments are the real values passed to the function.
//parameters 👇
// function sum(a,b){             
//     var total = a + b;
//     console.log(total);
// }
// //calling👇
//        sum();
// //Arguments 👇
//       sum(20,30);
//       sum(40,60);

// function expression and return keyword
// function sum(a , b){
//     return a + b;    //👈 return keyword
// }

// var funEx = sum(5 , 25);
//function👆👇expression
// console.log('the sum of two no is '+ funEx);

// Anonymos function
// var funEx = function(a,b){
//     return total = a + b;
// }
// var sum = funEx(13,45);

// console.log('the sum of tow numbers is '+ sum);





//LET VS CONST VS VAR

//var
// var myName = "Pankaj Naik";
// console.log(myName);

// myName = "Naik Panakj";
// console.log(myName);


// function biodata(){
//      var myFirstName = "Pankaj";
//      console.log(myFirstName);

//      if(true){
//         var myLastName = "Naik";
//         console.log('inner '+ myLastName);
//         console.log('inner '+ myFirstName);

//      }
//      console.log('innerOuter '+ myLastName);
// }

// biodata();

// 2] Template literals  imp
// for(let num = 1; num<= 10; num++){
//     let tableof = 12;
//     console.log(`${tableof} * ${num} = ${tableof * num}`);
// }



// 3] Default Parameters👇
//    function mult(a , b = 5){
//     return a * b;
// }

// console.log(mult(10));

// Fat Arror Function

// const sum = () => {
//     let a = 5; b = 6;
//     let sum = a + b;
//     return `the sum of the two number is ${sum}`;

// }

// console.log(sum());

// const sum = () => `the sum of the two number is ${(a=5)+(b=6)}`;

// console.log(sum());





//Array in java Script🟠

// var myFrinds = ['pankaj','naik', 'akash', 'kalpesh', 'prem', 22 , ture, 65];


// Traversal in array

// var myFrinds = ['pankaj', 'akash', 'naik', 'rajesh'];

// console.log(myFrinds[myFrinds.length - 1]);

//if we want check the lenth of elements of an array
//console.log(myFrinds.length);


// var myFrinds = ['pankaj', 'akash', 'naik', 'rajesh'];

// for(var i = 0; i <myFrinds.length; i++){
//    console.log(myFrinds[i])
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

// myFrinds.forEach(function(element, index , array){
//    console.log(element + " index : "+ index + " " + array)
// });


// var myFrinds = ['pankaj', 'akash', 'naik', 'rajesh'];

// myFrinds.forEach((element, index , array) => { //fact arror
//    console.log(element + "index : "+ index + " " + array)
// });




//Searching and filter in an Array
// Array.prototype.indexof()  // 4:55:00 time


// var myFrinds = ['pankaj', 'akash', 'naik', 'rajesh'];

// 4:55:00 time to 5:25:00 video error


// Array Subsection 4 Perform CRUD 🟠

// Array.prototype.push()
// const animals = ['pigs', 'goast' , 'sheep'];

// const count = animals.push('chicken');
// console.log(count);
// console.log(animals);

// animals.push('chicken' , 'cats ' , 'cow');
// console.log(animals);

//Array.prototype.unshift()
// const animals = ['pigs', 'goast' , 'sheep'];
// const count = animals.unshift('chicken');
// console.log(count);
// console.log(animals);


// const mynum =[1,2,3,5];
// mynum.unshift(4,6);
// console.log(mynum);

// const plants = ['pink', 'yellow', 'read', 'white', 'green'];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

//Array.prototype.shift()
// const plants = ['pink', 'yellow', 'read', 'white', 'green'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);


//Challange
//1 Add Dec at the end of an array?
//2 what is the return value of aplice method?
//3 update march to march (update)?
// 4 Delete june from an array?
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// sol1:
// const newMonts = months.splice(months.length, 0, "Dec");
// console.log(months);


//sol2:
// console.log(newMonts);


//sol3:
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexofMonth = months.indexOf('June'); //chek aaray place number
// console.log(indexofMonth);

// if(indexofMonth != -1){
// const updateMonth = months.splice(indexofMonth, 2, "june");
// }else{
//     console.log('No such data found');
// }

// console.log(months);




//sol3:
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexofMonth = months.indexOf('April'); //chek aaray place number
// console.log(indexofMonth);

// if(indexofMonth != -1){
// const updateMonth = months.splice(indexofMonth, Infinity);
// console.log(updateMonth);
// }else{
//     console.log('No such data found');
// }

// console.log(months);


//Map and Reduce Method  🟠

//Array.prototype.map()

// const array1 = [1 , 4 , 9 , 16 , 25];

// let newArr = array1.map((curElem, index, arr) => {
//      return curElem >= 9;

// });

// console.log(array1);
// console.log(newArr);


// const array1 = [1 , 4 , 9 , 16 , 25];
// let newArr = array1.map((curElem, index, arr) => {
//     return `index no ${index} the value is ${curElem} belong to ${arr}`;
// });

// console.log(newArr);

// let newArrfor = array1.forEach((curElem, index, arr) => {
//     return `index no ${index} the value is ${curElem} belong to ${arr}`;
// });

// console.log(newArrfor);


//Challenge Time

// 1: Finde the square root of each element in an array?
// 2: Multiply each element by 2 and return only those element which which are greater than 10?

// sol1: 
// let arr = [25 , 36 , 49 , 64 , 81];

// let arrSqr = arr.map((curElem) =>{
//     return Math.sqrt(curElem);
// })

//console.log(arrSqr);

// in single line 👆
// let arrSqr = arr.map((curElem) =>  Math.sqrt(curElem) )
// console.log(arrSqr);


//sol2
// let arr = [2 , 3 , 4 , 6 , 8];

// let arr2 = arr.map((curElem) => {
//     return curElem * 2;
// }).filter((curElem) => {
//     return curElem > 10;
// })

// console.log(arr2);

//onde linde code👆
// let arr = [2 , 3 , 4 , 6 , 8];
// let arr2 = arr.map((curElem) => curElem * 2).filter((curElem) => curElem > 10).reduce((accumulator, curElem) => {
//     return accumulator += curElem;
// });

// console.log(arr2);


// Reduce Method 🟠

// let arr = [5, 6, 2];
 
// let sum = arr.reduce((accumulator, curElem, index, arr) => {
//     debugger;
//     return accumulator += curElem;
// }, 7);

//console.log(sum);

//code in one line 👆
// let arr = [5, 6, 2];
 
// let sum = arr.reduce((accumulator, curElem) => accumulator += curElem);

// console.log(sum);


//How t fallten an array
//converting 2d and 3d aray into one dimensional array

//array of an array
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






//String in javaScript 🟠

// How to find the length of a string
//string.prototype.length
//Reflects the length of the string

// let myname = "Pankaj naik";
// console.log(myname.length);

//Escape Character ✅

// let sentence = "We are the so-called \" Viking \" from the north. ";
// let sentence1 = "We are the so-called \' Viking \' from the north. ";
// let sentence2 = 'We are the so-called " Viking " from the north. ';
// let sentence3 = "We are the so-called ' Viking ' from the north. ";

// console.log(sentence);
// console.log(sentence1);
// console.log(sentence2);
// console.log(sentence3);

//Finding a String in a String ✅

// const myBiodata = 'I am the Pankaj Suklal Naik';
// console.log(myBiodata.indexOf("t", 1));


//Searching  for a string in a string ✅

// const myBiodata = 'I am the Pankaj Suklal Naik';
// let sData = myBiodata.search("Pankaj");
// console.log(sData);



//Extracting String Parts ✅
// slice(start , end); 1️⃣
// Substring(start , end); 2️⃣
// Substr(start , length);3️⃣


// slice(start , end); 1️⃣
// var str = "Apple , Bananaa, kiwi";

// let res = str.slice(0, 4);
// let res = str.slice(0, -2);
// console.log(res);


//11: challenge Time 💬

//Display only 280 characters of a string like the one used in Twitter?

// let myTweets = "When an organization loses important data, it can result in significant costs. These costs include expenses related to recovering lost data, such as hiring experts to retrieve it or paying for data recovery software. Additionally, there can be legal costs if data breaches lead to lawsuits, and there's the potential for harm to the company's reputation, which can affect its ability to attract customers and investors.";

// let myActualTweet = myTweets.slice(5,280);
// console.log(myActualTweet);
// console.log(myActualTweet.length);
// console.log(myTweets.length);





// Substring(start , end); 2️⃣
// let str = "Apple, Bananaa, Kiwi";
// let res = str.substring(8, -2);
// console.log(res);


// Substr(start , length);
// let str = "Apple, Bananaa, Kiwi";

// let res = str.substr(9);
// console.log(res);


//Replacing string content()✅

// let myBiodata = 'I am Pankaj Suklal rathod';

// let Replacdata = myBiodata.replace('rathod', 'Naik');
// console.log(Replacdata);


//Extracting String Characters ✅
//there are 3 method for Extractiong  characheters:

//charAt(position);1️⃣
//charCodeAt(positon);2️⃣
//Porperty access [ ]3️⃣



//charAt(position);1️⃣
//The CharAt() method return the characeter at a specifid index (positon) in a string

// let str = "HELLO WORLD";

// console.log(str.charAt(9));



//charCodeAt(positon);2️⃣
//the cahrCodeAt() method returns the unicode of the character at a apecified index in a string:
//the method returns a UTF-16 code
//(an integer between 0 and 65535).
// let str = "HELLO WORLD";

// console.log(str.charCodeAt(1));

//12: challange Time 💬
//last char unicode
// let str = "HELLO WORLD";

// let lastChar = str.length -1;
// console.log(str.charCodeAt(lastChar));

//Porperty access [ ]3️⃣
// let str = "HELLO WORLD";

// console.log(str[1]);



//Other useful method ✅
// let str = "HELLO WORLD";
// let rts = "hello world"

// console.log(str.toLowerCase());
// console.log(rts.toUpperCase());


// The concat() method
// let fname = " Pankaj ";
// let lname = " Naik ";

// console.log(fname + lname);
// console.log(`${fname} ${lname}`);
// console.log(fname.concat(lname));
// console.log(fname.concat("", lname));

//String.trim()
//The trim() method removes whitesace from both sides of a string
// let str = "          Hello World!         ";
// console.log(str.trim());


// split() method 
// Converting a string to an array

// var txt = "a,b,c,d,e";
// console.log(txt.split(","));
// console.log(txt.split(" "));
// console.log(txt.split("|"));





//*************Date and Time in JavaScript**************/🟠

//Date Method in Js 1️⃣
//Time Method in Js 2️⃣


//There are 4 ways to create a new date objects 

// new Date()✅
// new Date(year, month, day, hours, minutes, seconds, milliseconds)✅
// it takes 7 arguments
// new Date(milliseconds)✅
// we cannot avoid month section
// new Date(date string)✅


//Date Method in Js 1️⃣

// let currDate = new Date();
// console.log(currDate);

// console.log(new Date()); //allred set time output 2023-10-11T04:37:47.274Z
// console.log(new Date().toLocaleDateString());  //output 11/10/2023
// console.log(new Date().toString()); //output Wed Oct 11 2023 10:07:47 GMT+0530 (India Standard Time)

// Date.now();
//Returns the numeric value corresponding to the current time-the number of 
//milliseconds elapsed since january 1, 1970 00:00:00 UTC

// console.log(Date.now());



// new Date(year, month, day, hours, minutes, seconds, milliseconds);

// Note:- JavaScript counts months from 0 to 11.

//Junuary is 0. December is 11;

// let D = new Date(2022, 10, 24, 10, 33, 30, 0);
// console.log(D.toLocaleDateString());
// console.log(D.toDateString());



// let D = new Date("October 13, 2021 11:13:00");
// console.log(D); //2021-10-13T05:43:00.000Z
// console.log(D.toLocaleDateString()); //13/10/2021

// let D = new Date(0);
// let D = new Date(1697002331346);
// let D = new Date(86400000*1);
// console.log(D.toLocaleDateString());



//Dates Method

// const currDate = new Date();

// console.log(currDate.toLocaleDateString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());
// console.log(currDate.getDate());
// console.log(currDate.getDay());



//Time Method in Js 2️⃣

// const curTime = new Date();
//How to get the indivisual Time

// console.log(curTime.getTime());
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// console.log(curTime.getMilliseconds());


//How to set the indivisual Time

// let curTime = new Date();

// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));


//Practice Time 
// console.log(new Date().toLocaleDateString()); 
// console.log(new Date().toLocaleTimeString());
// console.log(new Date().toLocaleString());




/**********Section 9 Math Object in JavaScript *********/

//console.log(Math.PI);1️⃣
// console.log(Math.PI);

//Math.roun();2️⃣
//returns the value of x rounded to its nearest integer

// let num = 10.58;
// console.log(Math.round(num));

//Math.pow()3️⃣

//Math.pow(x,y) returns the value of x to the power of y

// console.log(Math.pow(4,3));
// console.log(2**6);


//Math.sqrt()4️⃣
//Math.sqrt(x) returns the square root of x

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(19));


//Math.abs()5️⃣
//Math.abs(x) returns the absolute (positive) value of x

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));
// console.log(Math.abs(4-6));

//Math.ceil();6️⃣
//Math.ceil(x); returns the value of x rounded up to its nearest integer

// console.log(Math.ceil(4.14));
// console.log(Math.round(4.15));
// console.log(Math.ceil(-99.1)); 
// console.log(Math.round(99.1));


//Math.floor()7️⃣
//Math.floor(x) returns the value of x rounded down to its  nerest int
//point not except

// console.log(Math.floor(4.7));
// console.log(Math.floor(99.1));


//Math.min();8️⃣
//Math.min() can be used to find the lowest value in a list of arguments

// console.log(Math.min(0, 150, 30, 20, -8, -200));

//Math.max();9️⃣
//Math.max() can be used to find the highest value in a list of arguments

// console.log(Math.max(0, 150, 30, 20, -8, -200));



//Math.random();🔟
//Math.random() returns a random number between 0 (inclusive), and 1

// console.log(Math.floor(Math.random()*3));

//Math.trunc();1️⃣1️⃣
//The trunc() method returns the integer part of a number

// console.log(Math.trunc(4.4));
// console.log(Math.trunc(-99.1));


// Practice Time (❁´◡`❁)

//if the argument is a positive number, Math.trunc() is equivalent to Math.floor();
// console.log(Math.trunc(4.4));
// console.log(Math.floor(4.7));


//if the argument is a negtive number , Math.trunc() is quivalent to Math.ceil().
// console.log(Math.ceil(-99.1)); 
// console.log(Math.trunc(-99.1));




/******section 10 DOM in JavaScript ********/

// alert(location.href);
// if(confirm("Want to Visit ThapaTechnical?")){
//     location.href = "https://www.thapatechnical.com/";
// }



//9:07:00

//Practice time
//How to find the child in Dom tree
//FirstChild vs firstElementChild
//lastChild vs lastElementChild
// const data = document.body.firstChildElementsChild;
//undefined
//data
//data.firstElementChild
// data.firstElementChild.firstElementChild
// data.firstElementChild.firstElementChild


//4: How to search  the Elements and the references we will see the new file




/******section 11 Events in JavaScript ********/

//How are sume examples of HTML events:

//An HTML web page has finished loading
//An HTML input fild was changed 
//An HTML button was clicked
//often, when events happen, you may want to do something.

//JavaScript lets you execute code when events are detected.


//1️⃣ 4 way of writing event in javaScript

// 1] using inline events alert();
// 2] BY colling a function (We already seen and most common way of writing)
// 3] using Inline events (HTML onclick = " " property and element.onclick)
// 4] using Event Listeners (addEventListener and IE's attachEvent)

//check the HTML file 👆 Eventype.html



// 2️⃣ What is Event Object?
//Event object is the parent object of th event object.
//for Example
//MouseEvent, focusEvent, keybordEvent etc.

// in html file eventobject.html



//3️⃣ MousEvent Object in javaScript
//The MousEvent Object 
//Events that occur when the mouse interacts with the HTML
//document belongs to the MouseEvents Object.

//in html file mouseEvent.html and mouseEnterLave.html



//4️⃣ KeybordEvent in JavaScript
//Event that occur when user presses a key on the keyboard,
//belongs to the keyboardEvent object.

// onkeypress="keyPress()" onkeydown="keyDown()" onkeyup="keyUp() in html file keypress.html

//5️⃣ InputEvent in JavaScript
//The onchange event occurs when the value of an elements has been changed.

//for radiobuttons and checkboxes, the onchange event occurs when the 
// checked state has been changed


//check in html file  - inputEvent.html




// ******Section 12 Timing Based Event in js*****


//setTimeout(functon, milliseconds)
//Executes a function, after waiting a specified number of milliseconds.

//setInterval(function, milliseconds)
//Same as setTimeout(), but repeats the execution of the function continously.



//1️⃣ setTimeout()

//2️⃣ clearTimeout()

//3️⃣ setInterval()

//4️⃣ clearInterval()


//in html file timBaseEvent.html




/***************Object Orientd JavaScript************************** */

//1️⃣ What is object Literal?

//Object Literal is simply a key:value pair data structure.
//storing variables and functions together in one container, 
//we can refer this as an objects.

//How to create an object?
//1st Way

// let bioData = {
//     myName : "Pankaj Naik",
//     myAge  : 26,
//     getData : function() {
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }

// bioData.getData();



//What if we want object as a value inside an object

// let bioData = {
//     myName : {
//         firstName : "Pankaj",
//         lastName : "Naik",
//     },
//     myAge : 21,
//     getData(){
//         console.log(`My name is ${myName} and my age is ${myAge}`);
//     }
// }

// console.log(bioData.myName.firstName);


//2️⃣What is this object

//The definition of "this" object is that it contain the current context.
//The this object can have different values depending on here it is placed

//for example 1
// console.log(this);

// console.log(this.alert('Hi Pankaj')); run on console


//for example 2
// function myName (){
//     console.log(this);
// }
// myName();

//for example 3

// var myNames = 'Pankaj';

// function myName(){
//     console.log(this.myNames);
// }

// myName();


//for example 4

// const obj = {
//     myAge : 26, 
//     myName(){
//         console.log(this.myAge);
//     }
// }

// obj.myName();

//intrview question what is ouput this program
// const obj = {
//     myAge : 22,
//     myName : () => {
//         console.log(this);
//     }
// }
// obj.myName();



// let bioData = {
//     myName : {
//         firstname : 'Pankaj',
//         lastname : 'Naik'
//     },
//     myAge : 21,
//     geData(){
//         console.log(`my name is ${this.myName.firstname} and my age is ${this.myAge}`);
//     }
// }

// bioData.geData();

//  its part of Es6
//4️⃣Destructuring in ES6
//The destructuring assignment syntax is a javaScript expression
//that makes it possible to unpack values from arrays
//or properties from object, into distinct variables


//👉 Array Destructuring 

// const myBioData = ['Pankaj', 'Naik' , 21];

// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];

// let [myFName,myLName,myAge] = myBioData;
// console.log(myFName);

//we can add values too

// let [myFName,myLName, myAge, myDegree="BCA"] = myBioData;
// console.log(myDegree);



//👉 Object destructuring 
// const myBioData = {
//     myFname : 'Pankaj',
//     myLname : 'Naik',
//     myAge : 21
// }

// let myName = myBioData.myFname;
// console.log(myName);

// let {myFname,myLname, myAge, myDegree="BCA"} = myBioData;
// console.log(myFname);



//5️⃣ Object Properties

//👉 we can now use Dynamic properties

//    let myName = "Pankaj";

//    const myBio = {
//      [myName] : "Hello bati khaldo kai",
//      [10 + 11] : "21 varser hego tu vaya kar la koi pori dere he tho"
//    }

//    console.log(myBio);


//👉no need t write key and value , if both are same 

// let myName = 'Pankaj';
// let myAge = 21;

// const mybio = {myName,myAge}

// console.log(mybio);




//7️⃣.Spread Operator
// const colors = ['red', 'green', 'blue', 'white'];
// const mynewarry = [...colors, 'yellow', 'pink'];
// console.log(mynewarry);


//Es7 2016 Features

//1: array include

// const colors = ['red', 'green', 'blue', 'white'];
// const present = colors.includes('blue');
// console.log(present);

//2: **
// console.log(2**3);




//Es8 2017 features
//String padding 
//object.values()
//object.entries()

// const message = "my name is pankaj";
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10));


// const person = {name : 'fred', age : 87};

// console.log(Object.values(person));
// console.log(Object.entries(person));

//using formEntries 2019 featurs
// const arrObj = Object.entries(person);
// console.log(Object.fromEntries(arrObj));



// Es 2018 features
// const person = {name: 'Fred' , age: 87};
// const sPerson = {...person};
// console.log(person);
// console.log(sPerson);


//Es 2019 featurs
// Array.prototype.{flat()}
// Object.fromEntries()


//Es 2020
//#1 : BigInt

// let oldnum = Number.MAX_SAFE_INTEGER;
// // console.log(oldnum);
// // console.log(oldnum + 12);
// const newNum = 9007199254740991n + 12n;
// console.log(newNum);
// console.log(typeof newNum);

//Es 2014
// "use strict";
// x = 3.14;
// console.log(x); //show error

// "use strict";
// let x = 3.14;
// console.log(x); 

//***********Advanced javaScript***********
            

//1️⃣event.stopPropagation();
//PropagationEvent.html 


//.2️⃣Higher Order Function



//3️⃣Callback Function

//3️⃣2️⃣

// const add = (a,b) => {
//     return a+b;
// }

// const subs = (a,b) => {
//     return Math.abs(a-b);
// }

// const mult = (a,b) => {
//     return a*b;
// }

// const calculator = (num1,num2, operator) => {
//     return operator(num1,num2);

// }

// console.log(calculator(5,2,add));





// Hoisting in JavaScript🙌


//what is scope chain and lexical scoping in javascript?🙌
//The scope chain is used to resolve the value of variable names in js

//lexcial scoping means now. the inner function can get access to their parent functions variables but the vice-versa is not true.                      

// let a = "Hello guys "; //global scope

// const first = () => {
//     let b = "How are you ";

//     const second = () => {
//         let c = " Hii, I am fine thank you";
//         console.log(`${a+b+c}`);
//     }
//   second();
// //   console.log(`${a+b+c}`);
// }

// first();


//What is clousres in javaScript🥹
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//         let sum = a + b;
//         console.log(`th sum of the two number is ${sum}`);

//     }
//     innerFun();
// }

// outerFun(5);




// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//         let sum = a + b;
//         console.log(`th sum of the two number is ${sum}`);

//     }
//     return innerFun;
// }

// let chekClousure = outerFun(5);
// console.dir(chekClousure);



// Synchronous JavaScript prog

//  const fun2 = () => {
//     console.log(`function is called`);
//  }

//  const fun1 = () => {
//     console.log(`function 1 is called `);
//     fun2();
//     console.log(`function 1 is called again`);
//  }

//  fun1();

// Asynchronous JavaScript 


//  const fun2 = () => {
//    setTimeout( () => {
//     console.log(`function is called 👻`);
//    }, 2000);
//  } 

//  const fun1 = () => {
//     console.log(`function 1 is called `);
//     fun2();
//     console.log(`function 1 is called again`);
//  }

//  fun1();



//Currying 

// function sum(num1){
// //    console.log(num1);
// return function (num2) {
//     // console.log(num1,num2);
//    return function (num3) {
//     console.log(num1+num2+num3);
//    }
// }
// }

// sum(5)(3)(8);

//One line code canvart

// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);
    
//     sum(5)(3)(8);


//CallBack Hell(●'◡'●)

// setTimeout( () => {
//     console.log(`1️⃣ works is done`);
//     setTimeout( () => {
//         console.log(`2️⃣ works is done`);
//         setTimeout(() => {
//             console.log(`3️⃣ works is done`);
//             setTimeout(() => {
//                 console.log(`4️⃣ works is done`);
//                 setTimeout( () => {
//                     console.log(`6️⃣ works is done`);
//                 },1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// setTimeout ( () => console.log(`1️⃣ works is done`), 1000); setTimeout(() => console.log(`2️⃣ works is done`), 2000);


//Bonus Json

// var my_boject = {key_1: "some text ", key_2: true, key_3: 5};

// var object_as_string = JSON.stringify(my_boject);

// console.log(object_as_string);
// typeof(object_as_string);


// var object_as_string_as_object = JSON.parse(object_as_string_as_object);
// typeof(object_as_string_as_object);


// const prompt = require("prompt-sync")();

// const num = prompt("Enter a number: ");

// if (num % 2 == 0) {
//   console.log("This is even number. ");
// } else {
//   console.log("This is odd numbers. ");
// }

