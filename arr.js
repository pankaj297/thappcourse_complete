//Array in javaScript🟠

// Traversal in array🟢

// var myFrinds = ['prem', 'kalpesh', 'akash', 'rajesh'];

// // console.log(myFrinds.length);
// console.log(myFrinds[myFrinds.length -1]);


// var myFrinds = ['prem', 'kalpesh', 'akash', 'jitesh'];

// for(var i = 0; i < myFrinds; i++){
//     console.log(myFrinds[i]);
// }
// console.log(myFrinds);

// for in loop and for of loos 🟢

// var myFrinds = ['prem', 'kalpesh', 'akash', 'jitesh'];
// for (let element in myFrinds){
//     console.log(element);
// }

// var myFrinds = ['prem', 'kalpesh', 'akash', 'jitesh'];
// for(let element of myFrinds){
//     console.log(element);
// }

//Array.prototype.forEach()
// var myFrinds = ['prem', 'kalpesh', 'akash', 'jitesh'];

// myFrinds.forEach(function(element, index, array){
//     console.log(element + " index : "+ index + " "+ array);
// })

// used fact arro function 👆
// myFrinds.forEach((element,index,array) => {
//     console.log(element + " Index : "+ index + " " + array);
// })


// Array Subsection 4 Perform CRUD 🟠
//Array.prototype.push()
// const animals = ['pigs', 'goast' , 'sheep'];

// const coun =  animals.push('cat');
// console.log(coun);
// console.log(animals);

//multipal data add
// const coun = animals.push('cat ' , 'dog', 'undri');
// console.log(coun);
// console.log(animals);



//Array.prototype.unshift()
//strting data add in array
// const animals = ['pigs', 'goast' , 'sheep'];
// const count = animals.unshift('cat');
// console.log(count);
// console.log(animals);

//Array.prototype.pop()
//deleter array last element
// const plants = ['pink', 'yellow', 'read', 'white', 'green'];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

//aray first elements romove
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);



//Challange🟢
//1 Add Dec at the end of an array?
//2 what is the return value of aplice method?
//3 update march to March (update)?
// 4 Delete june from an array?
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// sol1:
// const newMonths = months.splice(months.length, 0, "Dec");
// console.log(months);

// //sol2:
// console.log(newMonths);

// sol3:
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexofMonth = months.indexOf('march');
// console.log(indexofMonth);

// if(indexofMonth != -1){
// const updateMonth = months.splice(indexofMonth, 1 , "March");
// }else{
//     console.log("no data search");
// }

// console.log(months);

// sol
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexofMonth = months.indexOf('June');
// console.log(indexofMonth);

// const Deletejune = months.splice(3, 1);
// console.log(months);
// console.log(Deletejune); 





//Map and Reduce Method  🟠
//Array.prototype.map()

// const array1 = [1 , 4 , 9 , 16 , 25];

// let newArr = array1.map((curElem,index, array) => {
//     return curElem > 9;
// })
// console.log(array1);
// console.log(newArr);


// const array1 = [1 , 4 , 9 , 16 , 25];

// let newArr = array1.map((curElem , index , array) =>{
//     return `index no ${index} the value is : ${curElem} its blong to ${array}`;
// })

// console.log(newArr);
// console.log(array1);


//Challenge Time

// 1: Finde the square root of each element in an array?
// 2: Multiply each element by 2 and return only those element which which are greater than 10?

// sol1: 
// let arr = [25 , 36 , 49 , 64 , 81];

// let arrSqr = arr.map((curElem) => {
//     return Math.sqrt(curElem);
// })

// console.log(arrSqr);
//one linde code 
// let arrSqr = arr.map((curElem) => Math.sqrt(curElem));
// console.log(arrSqr);


//sol2:
// let arr = [2 , 3 , 4 , 6 , 8];

// let newArr = arr.map((curElem) => {
//    return curElem * 2;
// }).filter((curElem) => {
//       return curElem > 10;
// });

// console.log(newArr);

// online code
// let arr = [2 , 3 , 4 , 6 , 8];

// let newArr = arr.map((curElem) => curElem * 2).filter((curElem) => curElem > 10);

// console.log(newArr);



// Reduce Method 🟠
// let arr = [5, 6, 2, 7 , 9 , 3 , 6];

// let arrsum = arr.reduce((accum , curElem) => accum += curElem);
// console.log(arrsum);


//How t fallten an array
//converting 2d and 3d aray into one dimensional array

//array of an array
const arr = [
    [`zone_1`, `zone_2`],
    [`zone_3`, `zone_4`],
    [`zone_5`, `zone_6`],
    [`zone_7`, `zone_8`]
];


const flatarr = arr.reduce((accum , curElem) =>{
    return accum.concat(curElem);
})

console.log(flatarr);


