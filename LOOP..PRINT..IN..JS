
//question 1 ==




/*
Take the number N and the name from the user as inputs, and print the name N times.
*/




//  const input = require("readline-sync");
//  let n = input.questionInt("enter the value :");
//  let c = "";
//  for(let i = 1; i <=n; i++){
//     {     
//         c += "Bedanti";
//                        }
//         c +="\n";
//  }console.log(c);





//question 2 ==




  /*Take a number N from the user as input, and print even numbers up to N.*/



// const input = require("readline-sync");
// let n = input.questionInt("enter the value");
// for(let i = 1; i<=n; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }





// question 3 ==



/*Write a program to print the sum of odd numbers up to N.*/




//  const input = require("readline-sync");
// let n = input.questionInt("Enter the value: ");
// let sum = 0;

// for(let i = 1; i <= n; i += 1){
//     if (i % 2 !== 0) {
//         sum = sum + i;
//     }
// }

// console.log( sum);




//question 4 ==



/*Write a program to take two integers M, and N and print the sum of numbers in the range M to N.*/



// const input =require("readline-sync");
// let n = input.questionInt("enter the first number :");
// let m = input.questionInt("enter the second number: ");
// let p = 0;
// for(let i = n; i<=m; i++){
// p = p + i;  
// }
// console.log(p);





// quetsion 5 ==


/* 
Write a program to calculate the sum of the following series where N is input from the user. 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/N
*/




// const input = require("readline-sync");
// let n = input.questionInt("enter the value :");
// let s = 0 ;
// let c = 1;
// for(let i = 1; i<=n; i++){
//     c = 1/i;
//     s = s+c
// }console.log(s);





// question 6 ==




/* Write a program to take a number from the user and print the 
number of digits in the given number. (can you do it without loop O(1) )*/




// const input = require("readline-sync");
// let n = input.questionInt("Enter the value: ");
// let count = 0;

// while (n !== 0) {
//     n = Math.floor(n / 10);
//     count++;
// }

// console.log(count);






// question 7 ==




/*Write a program to take a number from the user and print the sum of the digits of the given number.*/





// const input = require("readline-sync");
// let n = input.questionInt("enter the value:");
// let s = 0;
// for(let i = 0; i<=n; i++){ 
//     r = n%10;
//     s = s+r;
//     n = Math.floor(n/10);
//  }
//  console.log(s);






//question 8 ==



/*Write a program that takes a number from the user and prints the number that is formed by reversing the digits of the number.*/



// const input = require("readline-sync");
// let n = input.questionInt("enter the value:");
// let p =0;
// let i = 1; 
// while(n>=i){
//     r = n%10;   
//     p=p*10+r;
//     n=Math.floor(n/10)
    
// }
// console.log(p);









// question 9 ==



/*Factors question */



// const input = require("readline-sync");
// let n = input.questionInt("enter the value:");
// let i = 1;
// while(i<=n){
//     if(n%i==0)
//     {
//     console.log(i);
//     }i++;
// }





//question 11 ==



/*Write a program to take two numbers from the user as input and obtain the HCF and LCM of the two numbers.*/





// const input = require ('readline-sync');
// let a = input.questionInt("enter first number:");
// let b = input.questionInt("enter second number:");
// let p=a*b

// while(a%b!=0){r=a%b, a=b, b=r}

// console.log
// ("hcf=",b,"lcf=",p/b) 
   





// question 12 ==




/* Write a program to take a number from the user and then determine if that 
number is a special type of number called a 'perfect number'.
A perfect number is a number where the sum of all its factors (excluding the
number itself) is equal to the number itself. Print Yes if the number is a
perfect number else print No.
*/ 




// const input = require("readline-sync")
// let n = input.questionInt("enter the number:")
// let i = 1
// sum = 0
// while(i<n)
//  { 
//    if(n%i==0){ 
//    sum=sum+i
// }
// i++
// }
// if(sum==n)
// {
//     console.log("yes");

// }
// else{
//     console.log("no");
// }




