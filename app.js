// alert("mazhar ahmed")

/*


Operator	Description

Arthematic operators
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ESa016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement

let a = 2;
let b = 3;

console.log(a + b); 
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
// a++;
// b--;
console.log(++a);
console.log(--b);

++a;
--b;
console.log(a);
console.log(b);
*/

// Assignment Operators

// Operator	Example	Same As
// =	    x = y	  x = y
// +=	    x += y	  x = x + y
// -=	    x -= y	  x = x - y
// *=	    x *= y	  x = x * y
// /=	    x /= y	  x = x / y
// %=	    x %= y	  x = x % y
// **=	    x **= y   x = x ** y

// let  a = 5;
// a += 4;
// console.log(a)
// a -= 4;
// console.log(a)
// a *= 4;
// console.log(a)
// a /= 4;
// console.log(a)
// a %= 4;
// console.log(a)
// a **= 4;
// console.log(a)


// Logical  Operators


// Operator	Example	    Same As
// &&=	    x &&= y	    x = x && (x = y)
// ||=	    x ||= y	    x = x || (x = y)

// let x = 5;
// let y = 6;
//  console.log(x < 6 && x == 5)
//  console.log(x > 6 || x == 5)
//  console.log(!true)



// Comparisons Operators 
// The chapter JS Comparisons gives a full overview of comparison operators.

// The chapter JS If Else gives a full overview of conditional statements.

// Here are some examples:

// Operator	Description	     Example
// ==	    equal to	     if (day == "Monday")    
// >	    greater than	     if (salary > 9000)
// <	    less than	     if (age < 18)


// let a = 5;
// let b = "5";

// console.log("a == b =", a==b);
// console.log("a == b =", a!=b);
// console.log("a == b =", a>b);
// console.log("a == b =", a<b);
// console.log("a == b =", a===b);


// comments in js 
// 1 - //
// 2 - /*   */



// Conditional expression (if ,else)



// let a = prompt("hey ! whats your age");
// a = Number.parseInt(a);
// console.log(a)
// if(a >= 18){
//     alert("Now you are ready to take ride ")
// }
// else if(a <= 9 && a >= 6){
//     alert("your are kid take candy and enjoy");
// }
// else if (a <= 1){
//     alert("golu molu")
// }
// else if(a <=5 && a>= 2 ){
//     alert("play with toy")

// }
// else{
//     alert("you are not able tp take ride ")
// }
// // turnary operator 

// console.log("you can", a > 30? "not drive":"drive")




// Switch case conditional expression in java script 




// let month = prompt("Enter month Number from 1 to 12")
// month = Number.parseInt(month);
// switch (month) {
//     case 1:
//         document.write("Janurary");
//         break;
//     case 2:
//         document.write("Feburary");
//         break;
//     case 3:
//         document.write("March");
//         break;
//     case 4:
//         document.write("Aprial");
//         break;
//     case 5:
//         document.write("May");
//         break;
//     case 6:
//         document.write("June");
//         break;
//     case 7:
//         document.write("july");
//         break;
//     case 8:
//         document.write("august");
//         break;
//     case 9:
//         document.write("September");
//         break;
//     case 10:
//         document.write("Octuber");
//         break;
//     case 11:
//         document.write("November");
//         break;
//         case 12:
//         document.write("December");
//         break;
//     default:
//         alert("Please Enter valid age from 1 to 12. Beacuse MOnth are 12")
//         break;
// }



// using turnay operator

// let age = prompt("enter your age ")

// age = Number.parseInt(age);
// age = age >=18? "you can drive":"you can't drive";
// console.log(age)


// Loops IN js 


// for loooooooooooooooop;

// let n = prompt("enter number")
// n = Number.parseInt(n)

// for (let i = 0; i <= n; i++) {
//  console.log("mazhar",i)

// }


// For In loops 

// let obj = {
//     mazhar : "90",
//     ahmed : "100",
//     Afnan : "110",
//     attique : "120"
// }

// console.log(obj.mazhar, obj);
// console.log(obj.ahmed);
// console.log(obj.Afnan);
// console.log(obj.attique);



// for(let key in obj){
//     console.log(key + " ; " + obj[key] )
// }


// For In loops 
// let name = "mazhar";
// let array = ["1", "2", "3", "4", "5"]
// for (let a of array) {
//     console.log(a);
// }


// while loops in JS


// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;

// }

// do  while looop in js 
// let i = 11
// do {
// console.log(i)
// i++

// }while(i < 10)



// function  in java script 
// let a = 3;
// let b = 4;

// function sum(x, y) {
//     console.log(arguments);
//     return (x + y);
// }

// sum();
// console.log(sum(a ,b));

// function onePlusAvg(x, y) {
//  return Math.round(1 + (x +y )/2)   
// }
// let c = onePlusAvg(a, b);

// console.log("the value of one plus avg of a and b is ",c);

// Arrow funstion in js 

// const hello = () =>{
//     // console.log(arguments)
//     console.log("Hellow how are you doing toady")
// }
// hello();

// let marks = {
//     mazhar : "90",
//     Ayaz : "40",
//     Afnan : "4"
// }

// for(key in marks){
//     console.log("the number of " + key+ " are " + marks[key]);
// }

// let cr = 3;
// let a ;
// while(a != cr){
//     a = prompt("enter a Correct number")
//     a= Number.parseInt(a)
//     console.log(a);

// }
// console.log("you enter a correct no.", cr);

// const mean =(a,b,c,d)=>{
//     return (a+b+c+d)/4
// }

//  console.log(mean(3,4,5,6));

// Strings In detail 

// let name = "mazh\"ar"
// let name1 = 'mazha\'r'
// let name2 = `ahme\`d`
// console.log(name, name1, name2);

// console.log(`${name} is a friend \n \t of ${name2}`);


// object in JS

let obj = {
    firstName: "Mazhar",
    lastName: "Ahmed",
    age: 18,
    country: "pakistan",
    obj1: {
        mazhar: 30,
        ahmed: 40,
        ayaz: 3
    },
    mazhar: ["mazhar", 8, "atiq", "afnan"],
    func: function sum(x, y) {
        return x + y;
    }
}
console.log(obj);
console.log(obj.age);
console.log(obj.obj1)
console.log(obj.func(2,3))
