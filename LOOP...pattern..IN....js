/// QUESTION === 1:-



// *
// **
// ***
// ****
// *****


// const input = require("readline-sync")
// let n = input.questionInt("enter the number :");
// for (let i = 0; i <=n; i++) {
//     let c="";
//     for (let j = 0; j <=i; j++) {
//         c +="*"
        
//     }
//     console.log(c);
// }





// QUESTION 2 ===:--




// *****
// ****
// ***
// **
// *

//  const input = require("readline-sync");
//  let n = input.questionInt("enter the value :");
 
//  let c = "";
//  for(let i = n; i >= 0; i--){
//     for(let j = 1; j <= i ; j++){
//         c += "* ";
//     }
//     c +="\n";
//  }console.log(c);





/// QUESTION 3 ===:--





//1
//2 3
//4 5 6
//7 8 9 10

// const input = require("readline-sync");
// let n = input.questionInt("enter the value :");
// let c = "";
// let k = 0;
// for(let i = 1; n >=i; i++ ){
//     for(let j =1; j <=i; j++){
//         k++;
//         c += k + " ";
//     }
//     c +="\n";
// }console.log(c);






///QUESTION 4 ===:--




// 1
// 1 2 1
// 1 2 3 2 1
// 1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1
 

// const input = require("readline-sync");
// let n = input.questionInt("enter the value :");
// let c = "";
// let j = 1;
// for(let i = 1; n >=i; i++){
//    for(let j =1; j <=i; j++){
//         c += j + "";
//     }for( j=i-1;  j>0; j--){
//         c += j + "";
//     } c +="\n";
// }console.log(c);






/// QUESTION 5 ===:--




// *
// * * *
// * * * * *
// * * * * * * *



// const input = require("readline-sync");
// let n = input.questionInt("enter the value :");
// let c = "";
// let j = 1;
// for(let i = 1; n >=i; i++){
//    for(let j =1; j <=i; j++){
//         c +=  "*";
//     }for( j=i-1;  j>0; j--){
//         c += "*";
//     } c +="\n";
// }console.log(c);


//

// const input = require('readline-sync');
// let n = input.questionInt("enter the value :")
// let i = 1; j =1;
// while(i<=n){
//     console.log("*".repeat(j));
//     j+=2
//     i ++
// } 





// QUESTION 6 ===:--




// *
// * * *
// * * * * *
// * * * * * * *
// * * * * *
// * * *
// *


// const input = require('readline-sync');
// let n = input.questionInt("enter the value :");
// let i = 1; j =1;
// while(i<=n){
//     console.log("*".repeat(j));
//     j+=2
//     i ++
// }
// let k = j-4
// while(k>0){
//     console.log("*".repeat(k));
//      k-=2
    
// } 






/// QUESTION 7 ===:---





// * *
// ** **
// *** ***
// ********
// *** ***
// ** **
// * *



// const input = require('readline-sync');
// let n = input.questionInt("Enter the value: ");
// let i = 1, j = 1;

// while (i < n) {
//     console.log("*".repeat(j) + " " + "*".repeat(j));
//     j += 1;
//     i += 1;
// }


// console.log("*".repeat(j) + "*".repeat(i));


// let k = j - 1;
// while (k > 0) {
//     console.log("*".repeat(k) + " " + "*".repeat(k));
//     k -= 1;
// }







/// QUESTION 8 ===:--




// 4
// 4 3 4
// 4 3 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 3 4
// 4 3 4
// 4



// const input = require("readline-sync");
// let n = input.questionInt("enter the value :");
// let p = "";
// for(let i = 1; i<=n; i++)
// { let b=n
// for( let j = 1;  j<=i; j++)
// {   p+= b + " ";
//     b--;
//     c=b;
   
// }
// for(let c = b+2; c<=n; c++){
//     p+= c + " ";
// } p += "\n";
// }

// for(let i=n-1; i>=1; i--)
// {let b=n;
//     for(let j = 1; j<=i; j++)
//     { p += b + " ";
//       b--;
//       c=b;
        
    
// }for(let c = b+2; c<=n; c++){
//     p += c + " ";
 
    
// } p += "\n";
// } console.log(p);







// QUESTION 9 ===:--




//n=5

// 0 0 0 0 0
// x 0 0 0 x
// x x 0 x x
// x 0 0 0 x
// 0 0 0 0 0



// const input = require('readline-sync');
// let n = input.questionInt("Enter the value: ");
// let c = "";
// let k = "";
// let b = "";
// let s = "";
// let r = "";


// for (let i = 1; i <= n; i++) {
//     c += "0 ";
// }
// console.log(c);


// k += "x ";
// for (let p = 1; p<n-1; p++) {
//     k += "0 ";
// }
// k += "x";
// console.log(k);


// for (let m = 1; m <= n; m++) {
//     if(m==3)
//     {
//         b+="0 ";
//     }
//     else
//     {
//         b+="X ";
//     }
// }
// console.log(b);


// r += "x ";
// for (let d = 1; d < n - 1; d++) {
//     r += "0 ";
// }
// r += "x ";
// console.log(r);


// for (let t = 1; t <= n; t++) {
//     s += "0 ";
// }
// console.log(s);








// QUESTION 10 ==:--





// N=5
// *
// * *
// * *
// * *
// * * * * *

//const input = require("readline-sync");
//let n = input.questionInt("enter the value:");
// c = ""; 
// for(let i = 0; i<=0; i++){
//     c+="* "; 
// }
// console.log(c);

// for (let i = 2; i < n; i++) {
//     console.log('* *');
// }for(let i = 1; i<=n; i++){
//     c+="* ";
// }console.log(c);








// QUESTION 11 ===:--





// N=6
// * * * * * *
// * *
// * *
// * *
// * *
// * * * * * *



// const input = require("readline-sync");
// let n = input.questionInt("enter the value:");
// c = ""; 
// for(let i = 1; i<=n; i++){
//     c+="* "; 
// }
// console.log(c);

// for (let i = 2; i < n; i++) {
//     console.log('* *');
// }for(let i = 1; i>n; i++){
//     c+="* ";
// }console.log(c);








// QUESTION 12 ===:--





//n=4

// *
// * *
// * *
// * *
// * *
// * *
// *



// const input = require("readline-sync");
// let n = input.questionInt("enter the value:");
// c = ""; 
// for(let i = 0; i<=0; i++){
//     c+="* "; 
// }
// console.log(c);

// for (let i = 0; i <= n; i++) {
//     console.log('* *');
// }for(let i = 1; i<0; i++){
//     c+="* ";
// }console.log(c);








// QUESTION 13 ===:--






//N=4
// * * * *
// * *
// * *
// *
// * *
// * *
// * * * *



// const input = require("readline-sync");
// let n = input.questionInt("enter the value:");
// c = ""; 
// for(let i = 1; i<=n; i++){
//     c+="* "; 
// }
// console.log(c);

// for (let i = 2; i <n; i++) {
//     console.log('* *');
// }console.log("*");
// for(let i = 2; i <n; i++){
//     console.log('* *')
// }for(let i = 1; i>n; i++) { 
//      c+="* ";
//  } console.log(c);

