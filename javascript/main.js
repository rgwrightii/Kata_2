//  ADD :
//     1.) Write a function "add" 2 agruments(input variables)
//      Return their sum.
//     2.) Use built-in operators
//      
function add(x, y) {
    return x + y; 
}
console.log(add(2, 3));

//  MULTIPLY :
//      1.) Write a function named "multiply" 
//      agruments(input variables) Return their product.
//      2.) No built-in operators
// Use a FOR LOOP which calls the function "add"
//      
function multiply(x, y) {
    let i = 0; 
    for (let count = 0; count < y; count++) {
    i = add(i, x);  
        
    }
    return i
}
console.log(multiply(5, 5));

//   POWER/EXPONENTIATION :
//      1.)Write a function named "power"
//          Two arguements (x and n) 
//          return the result by raising x to the n th power.
//          reuse functions from other katas.
//        To get correct result for power(2, 8) we want to multiply
//          2 by itself 8 times.
function power(x, y) {
    let i = 1;
    for (let count = 0; count < y; count++){
    i = multiply(i, x);
    }
    return i
}
console.log(power(5, 5));
//  FACTORIAL :
//      1.) Write a function named "factorial"
//          Return the factorial value.
//      ***NO BUILT-IN MATH OPERATORS***       x
//              A factorial multiplies a given number
//                     >     y 
//              by every number below it.
function factorial(x, y){
    let i = 1;
    for (let count = 0; count >= y; count-=) {
    }
        i = multiply(i, x);
    }
    return i

console.log(factorial(5, 4));

//   BONUS--FIBONACCI :
//      1.)