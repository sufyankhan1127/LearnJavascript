//        1. Ways to print in javascript
       /*console.log("Hello World");
       alert("me");

       document.write("This is document write");
       console.warn("This  is warning");
       console.error("This is an error");
*/

// Javascript variables
//What are variable-Containers to store data values
var number=34;
var number2=56;
//console.log(number+number2);


// 4.Data types in javascript
//string
var str1="This is a String";
var str2="this is also a string";

//Numbers
var num=455;
var num2=463;

//Objects
var marks={
    ravi:34,
    shubham:45,
    harry:99
}

//console.log(marks);

//booleans
var a=true;
var b=false;

//console.log(a,b);


//undefined or null
var und2=undefined
var und;
//console.log(und2,und);

var n=null;
//console.log(n);
//symbol


// At a high level :1.Primitive Data types :undefined,null,number,string,boolean,symbol
//2.Reference Data types:Arrays and Objects

//we can write string in between here
var arr=[1,2,"String",4,5];

//console.log(arr);


//Numbers string object Arrays Mostly used

//Operators in java
//arithematic operator
var no1=100;
var no2=100;
console.log("The value of a+b",no1+no2);
console.log("The value of a-b",no1-no2);
console.log("The value of a*b",no1*no2);
console.log("The value of a/b",no1/no2);


//Assignmenet operator
var no3=no2;
//no3+=no2;
no3*=no2;
//no3-=no2;
//no3/=no2;
//console.log(no3);


//Comparison operator
var x=100;
var y=88;
//console.log(x==y);
//console.log(x>=y);
//console.log(x>y);
//console.log(x<y);


//Logical operators
//AND
//console.log(true && true);
//console.log(true && false);
//console.log(false && true);
//console.log(false && false);

//OR
//console.log(true || true);
//console.log(true || false);
//console.log(false || true);
//console.log(false || false);

//Not
//console.log(!false);
//console.log(!true);


//functions in javascript

//DRY Principle:do not repeat yourself
function avg(a,b){
    c=(a+b)/2;
    return c;
}

c1=avg(4,6);
c2=avg(10,2);
c3=avg(20,56)

//console.log(c1,c2,c3);

//Conditionals in javascript

var age=20;

//single if
//If else
//if(age>18){
//    console.log("You can drink rasna water");
//}
//else{
//    console.log("You cannot drink water");
//}


//Ifelse ladder
//if(age>32){
//console.log("You are not a kid");
//}
//else if(age>26 && age<22){
//console.log("Bachhe nahi rahe");
//}
//else if(age>22 && age<20){
//console.log("Yes Bachhe nahi rahe");
//}
//else if(age>20 && age<18){
//console.log("18 Bachhe nahi rahe");
//}
//else{
//console.log("Bachhe rahe");
//}

//var arr=[1,2,3,4,5,6,7];
//console.log(arr);
//

//for loop in javascript
//for(var i=0;i<arr.length;i++){
//    console.log(arr[i])
//}

//for each loop
//arr.forEach(function(element){
//    console.log(element);
//})

//while loop
let j=0;//block level scope
//while(j<arr.length){
//    console.log(arr[j]);
//    j++;
//}

//do while loop
//do{
//    console.log(arr[j]);
//    j++;
//}while(j<arr.length);


//for(var i=0;i,arr.length;i++){
//    if(i==2){
//        break;
//       continue;
//    }
//
//    console.log(arr[i]);
//}

//array methods
let myArr=["Fan","Camera",34,null,true];
console.log(myArr.length);

//pops the last element
myArr.pop();
console.log(myArr);

//push the element to the last
myArr.push("harry");
console.log(myArr);

//shift gives first element
myArr.shift()
console.log(myArr);

//unshift
const newLen=myArr.unshift("harry");
console.log(newLen);
console.log(myArr);

//sort();

//String methods in javaScript
let mylovelystring = "Suffy is a good guy";
//console.log(mylovelystring.length)
//console.log(mylovelystring.indexOf("good"));
//console.log(mylovelystring.lastIndexOf("good"));

console.log(mylovelystring.slice(0,3))