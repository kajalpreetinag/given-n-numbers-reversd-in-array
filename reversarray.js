// Write a program to reverse the array and print the reversed array.

const  input = require("readline-sync")
let n = input.questionInt("enter the number: ")
let array=[];
let i = 0;

while(i<n)
{
    let a = input.questionInt("enter :")
    array[i]=a;
    i++   
}
i=n-1;
while(0<=i){
    let b = array[i]
    i--
    console.log(b)
}
