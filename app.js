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

let a = prompt("hey ! whats your age");
a = Number.parseInt(a);
// console.log(a)
if(a >= 18){
    alert("Now you are ready to take ride ")
}
else if(a <= 9 && a >= 6){
    alert("your are kid take candy and enjoy");
}
else if (a <= 1){
    alert("golu molu")
}
else if(a <=5 && a>= 2 ){
    alert("play with toy")

}
else{
    alert("you are not able tp take ride ")
}
// turnary operator 

console.log("you can", a > 30? "not drive":"drive")