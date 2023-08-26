// Two types od datatypes
// 1.Object   2.Primitive DataTypes


/* ***********************************************************
************** Primitive DataTypes*********************/

let num=10;
console.log(typeof(num))    //type number

const firstName="DHAVAL";
console.log(typeof firstName)    //type string

let bool=true;
console.log(typeof bool)    //type boolean


let a;
console.log(typeof a)     //type undefined


let news=null;                  //here i have given value null 
console.log(typeof news)        //type is "object"   this is a bug in JS


//More dataypes are

// Symbol(ES6/2015)

//BigInt(ES2020)
let num1=10n;           //ends with n   //number greate than 64 bit to stored used bigint
console.log(typeof num1)   //type is bigint


//Interesting facts about datatypes

const numbers1=2/0;
console.log(numbers1)   //Infinity

const number2=Infinity/2;
console.log(number2)   //Infinity

const number3=Infinity/Infinity;
console.log(number3)   //NaN


const number4=-8/Infinity;
console.log(number4)   //-0 <--***********

console.log(-0+0)   //op 0