// 1- Write a program that allow to user enter number then print it

// var number = window.prompt("Enter Number");
// window.alert(number);
// ---------------------------------------------------------------------------------------------

// 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

// var number = window.prompt("Enter Number");
// number = Number(number);
// if (number % 3 == 0 && number % 4 == 0) {
//     window.alert(true);
// } else {
//     window, prompt(false);
// }
// ---------------------------------------------------------------------------------------------

// 3- Write a program that allows the user to insert 2 integers then print the max
// var int1 = Number(window.prompt("Enter The First Number"));
// var int2 = Number(window.prompt("Enter The Second Number"));

// if (int1 > int2) {
//     window.alert(int1)
// }
// else if (int2 > int1) {
//     window.alert(int2)
// }
// else{
//     window.alert("Both Is Equal")

// }
// ---------------------------------------------------------------------------------------------

// 4- Write a program that allows the user to insert an integer then print negative if it is

// var int = Number(window.prompt("Enter Your Number"))

// if (int >= 0) {
//     window.alert("Positive")
// }
// else if (int <= 0) {
//     window.alert("Negative")
// }
// else {
//     window.alert("it's wong input")
// }
// ---------------------------------------------------------------------------------------------

// 5- Write a program that take 3 integers from user then print the max element
// and the min element.

// var int1 = Number(window.prompt("Enter The First Number"));
// var int2 = Number(window.prompt("Enter The Second Number"));
// var int3 = Number(window.prompt("Enter The Third Number"));

// if (int1 >= int2 && int1 >= int3) {
//     window.alert(int1)
// }
// else if (int2 >= int1 && int1 >= int3) {
//     window.alert(int2)
// } else {
//     window.alert(int3)

// }
// if (int1 <= int2 && int1 <= int3) {
//     window.alert(int1)
// }
// else if (int2 <= int1 && int1 <= int3) {
//     window.alert(int2)
// } else {
//     window.alert(int3)

// }
// ---------------------------------------------------------------------------------------------

// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd

// var int = Number(window.prompt("Enter The Number"));

// if(int % 2 == 0){
//         window.alert("The Number Is EVEN")
// }
// else(
//     window.alert("The Number Is ODD")

// )
// ---------------------------------------------------------------------------------------------

// 7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant

// Prompt the user to enter a character

// var char = window.prompt("Enter a character: ").toLowerCase();
// switch (char) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         window.alert("Vowel");
//         break;
//     default:
//         window.alert("Consonant");
//         break;
// }
// ---------------------------------------------------------------------------------------------

// 8- Write a program that allows user to insert integer then print all numbers between 1 to
// that’s number

// var int1 = window.prompt("Enter the start");
// var int2 = window.prompt("Enter the end");
// for(var i = int1; i <= int2; i++){
//     console.log(i);
// };
// ---------------------------------------------------------------------------------------------

//10 - Write a program that allows user to insert integer then print a multiplication table up to 12
// var number = Number(window.prompt("Enter number :"));
// for(var i=1;i<=12;i++){
//     window.alert(i*number);
// }
// ---------------------------------------------------------------------------------------------


//11- Write a program that allows to user to insert number then print all even numbers between 1 to this number
// var number = Number(window.prompt("Enter number :"));
// for (var i = 2; i <= number; i += 2) {
//   window.alert(i);
// }
// ---------------------------------------------------------------------------------------------

// 12- Write a program that take two integers then print the power

// var number = Number(window.prompt("Enter number :"));
// var power = Number(window.prompt("Enter power :"));
// var result = 1;

// for (var i = 0; i < power; i++) {
//     result*=number;
// }
// window.alert(result);
// ---------------------------------------------------------------------------------------------

// 13- Write a program to enter marks of five subjects and calculate total, average and percentage.

// var total =0;
// for(var i =0 ;i<5;i++){
//     total+=Number( window.prompt("Enter mark subject"+(i+1)));
// }

// window.alert("Total marks = "+total);
// window.alert("Avg = "+total/5);
// window.alert("percentage = "+ total/500*100);
// ---------------------------------------------------------------------------------------------

// 13- Write a program to input month number and print number of days in that month.

// var monthNumber = window.prompt("Enter month number");
// if(monthNumber ==1||monthNumber==3 ||monthNumber==5 ||monthNumber==7||monthNumber==8||monthNumber==10||monthNumber==12){
//     window.alert("31")
// }else if(monthNumber ==2){
//     window.alert("28 days in a common year and 29 days in leap years")
// }else if(monthNumber==4||monthNumber==6||monthNumber==9||monthNumber==11){
//     window.alert("30");
// }
// ---------------------------------------------------------------------------------------------

// 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade,

var physics = Number(window.prompt("Enter marks for Physics: "));
var chemistry = Number(window.prompt("Enter marks for Chemistry: "));
var biology = Number(window.prompt("Enter marks for Biology: "));
var mathematics = Number(window.prompt("Enter marks for Mathematics: "));
var computer = Number(window.prompt("Enter marks for Computer: "));

var totalMarks = physics + chemistry + biology + mathematics + computer;
var percentage = (totalMarks / 500) * 100;

percentage = percentage.toFixed(2);

var grade;
if (percentage >= 90) {
    grade = 'A+';
} else if (percentage >= 80) {
    grade = 'A';
} else if (percentage >= 70) {
    grade = 'B';
} else if (percentage >= 60) {
    grade = 'C';
} else if (percentage >= 50) {
    grade = 'D';
} else {
    grade = 'F';
}

window.alert("Percentage: " + percentage + "%");
window.alert("Grade: " + grade);