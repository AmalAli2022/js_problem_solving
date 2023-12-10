//asn Q1
// var enteredNumber= prompt('Enter a number');

// document.getElementById('ans1').innerHTML= `The entered number is ${enteredNumber}`;

//////////////ans Q2///////////////////////

// var enteredNumber= prompt('Enter a number');
// if (enteredNumber%3 ==0 && enteredNumber%4 ==0)
// console.log( `Yes`);
// else
// console.log( `No`);

//////////////ans Q3///////////////////////

// var firstNumber= prompt('Enter first number');
// var secondNumber= prompt('Enter second number');
// if (Number(firstNumber) > Number(secondNumber))
// console.log( ` ${firstNumber} is bigger than ${secondNumber}`);
// else if (Number(firstNumber) < Number(secondNumber))
// console.log( ` ${secondNumber} is bigger than ${firstNumber}`);
// else
// console.log( ` ${secondNumber} equal to ${firstNumber}`);

//////////////ans Q4///////////////////////

// var enteredNumber= prompt('Enter a number');
// if (enteredNumber >=0)
// console.log( `Positive`);
// else
// console.log( `Negative`);

//////////////ans Q5///////////////////////

// var firstNumber= prompt('Enter first number');
// var secondNumber= prompt('Enter second number');
// var thirdNumber= prompt('Enter second number');
// console.log('The max number is ' + maxNumber(firstNumber,secondNumber,thirdNumber));
// console.log('The min number is ' + minNumber(firstNumber,secondNumber,thirdNumber));

// function maxNumber(firstNumber,secondNumber,thirdNumber){

//     var max = 0;
//     if((firstNumber >= secondNumber) && (firstNumber >= thirdNumber)){
//         max = firstNumber;
//     }
//     else if((secondNumber >= firstNumber) && (secondNumber >= thirdNumber)){
//         max = secondNumber;
//     }
//     else{
//         max = thirdNumber;
//     }
// return max;
// }

// function minNumber(firstNumber,secondNumber,thirdNumber){

//     var min = 0;
//     if((firstNumber <= secondNumber) && (firstNumber <= thirdNumber)){
//         min = firstNumber;
//     }
//     else if((secondNumber <= firstNumber) && (secondNumber <= thirdNumber)){
//         min = secondNumber;
//     }
//     else{
//         min = thirdNumber;
//     }
// return min;
// }

//////////////ans Q6///////////////////////

// var enteredNumber= prompt('Enter a number');
// if (enteredNumber %2 ==0)
// console.log( `even`);
// else
// console.log( `odd`);

//////////////ans Q8///////////////////////

// var enteredChar= prompt('Enter a character');
// switch(enteredChar){
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//     case 'A':
//     case 'E':
//     case 'I':
//     case 'O':
//     case 'U':
//         console.log(`${enteredChar} is vowel`);
//     break;
//     default:
//         console.log(`${enteredChar} is constant`);
//         break;
// }

//////////////ans Q9///////////////////////

// var enteredNumber= prompt('Enter a number');
//     for (var i=1;i<= enteredNumber;i++){
//         console.log(i);
// }

//////////////ans Q10///////////////////////

// var enteredNumber= prompt('Enter a number');
//     for (var i=1;i<= 12;i++){
//         console.log(`${enteredNumber} * ${i} = ${enteredNumber*i}`);
// }

//////////////ans Q11///////////////////////

// var enteredNumber= prompt('Enter a number');
//     for (var i=1;i<= enteredNumber;i++){
//         if(i%2==0)
//         console.log(i);
// }

//////////////ans Q12///////////////////////

// var power =1;
// var firstNumber= prompt('Enter first number');
// var secondNumber= prompt('Enter second number');
// for (var i=0; i<secondNumber;i++){
//  power*=firstNumber;
// }

// console.log( ` power(${firstNumber} ,${secondNumber} ) = ${power}`);

//////////////ans Q13///////////////////////
// var sum=0;
// for(i=0;i<5;i++){
// sum+= Number(prompt("eneter a number"));
// }
// var avg = sum/5;
// var percentage = sum * 100 /500;
// console.log(`Total marks = ${sum}`); 
// console.log(`Total average = ${avg}`);  
// console.log(`Total percentage = ${percentage}`); 

//////////////ans Q14///////////////////////

// var enterMonth= prompt('Enter a Month');
// switch(enterMonth){
//     case '1':
//     case '3':
//     case '5':
//     case '7':
//     case '8':
//     case '10':
//     case '12':
//         console.log(`${enterMonth} has 31 day`);
//           break;
//     case '4':
//     case '6':
//     case '9':
//     case '11':
//         console.log(`${enterMonth} is 30`);
//          break;
//     case '2':
//         console.log(`${enterMonth} is 28`);
//         break;
//     default:
//         console.log(`${enterMonth} is not a month`);
//         break;
// }

//////////////ans Q15///////////////////////

// var physics= prompt('Enter a Physics');
// var chemistry = prompt('Enter a Chemistry');
// var biology = prompt('Enter a Biology');
// var mathematics = prompt('Enter a Mathematics');
// var computer = prompt('Enter a Computer');
// var  sum = Number(physics)+Number(chemistry)+Number(biology)+Number(mathematics)+Number(computer);
// var percentage= sum /5;
// console.log(`The percentage is ${percentage}`); 
// if (percentage >= 90)
// console.log('Grad A'); 
// else if (percentage >= 80)
// console.log('Grad B');
// else if (percentage >= 70)
// console.log('Grad C');
// else if (percentage >= 60) 
// console.log('Grad D');
// else if (percentage >= 40) 
// console.log('Grad E');
// else if (percentage < 40)
// console.log('Grad F');

//////////////ans Q16///////////////////////

// var enterMonth= prompt('Enter a Month');
// switch(enterMonth){
//     case '1':
//     case '3':
//     case '5':
//     case '7':
//     case '8':
//     case '10':
//     case '12':
//         console.log(`${enterMonth} has 31 day`);
//           break;
//     case '4':
//     case '6':
//     case '9':
//     case '11':
//         console.log(`${enterMonth} is 30`);
//          break;
//     case '2':
//         console.log(`${enterMonth} is 28`);
//         break;
//     default:
//         console.log(`${enterMonth} is not a month`);
//         break;
// }

//////////////ans Q16///////////////////////

// var enteredChar= prompt('Enter a character');
// switch(enteredChar){
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//     case 'A':
//     case 'E':
//     case 'I':
//     case 'O':
//     case 'U':
//         console.log(`${enteredChar} is vowel`);
//     break;
//     default:
//         console.log(`${enteredChar} is constant`);
//         break;
// }

//////////////ans Q17///////////////////////

//  var firstNumber= prompt('Enter first number');
// var secondNumber= prompt('Enter second number');

// switch(true){
//     case (Number(firstNumber)> Number(secondNumber)):
//         console.log(`${firstNumber}  `);
//          break;
//     case (Number(firstNumber) < Number(secondNumber)):
//         console.log(` ${secondNumber}`);
//         break;
//     case (Number(firstNumber)== Number(secondNumber)):
//         console.log(` equal`);
//         break;
// }

//////////////ans Q18///////////////////////

// var num= prompt('Enter a number');

// switch(true){
//     case (Number(num)%2==0):
//         console.log(`even`);
//          break;
//     case (Number(num)%2!=0):
//         console.log(`odd`);
//         break;
//     default:
//         console.log(` not a number`);
//         break;
// }

//////////////ans Q19///////////////////////

// var num= prompt('Enter a number');

// switch(true) {
//     case (num > 0):
//         console.log("Positive number");
//         break;
//     case (num < 0):
//         console.log("Negative number");
//         break;
//     case (num == 0):
//         console.log("Zero");
//         break;
// }

//////////////ans Q19///////////////////////

 var firstNumber= Number(prompt('Enter first number'));
var secondNumber= Number(prompt('Enter second number'));
var operator = prompt('Enter operator (+,-,*,/)');

switch(operator){
    case '+':
        console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber} `);
         break;
    case '-':
        console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber} `);
        break;
        case '*':
            console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber} `);
        break;
        case '/':
            console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber} `);
        break;
    default:
        console.log(`${operator} not an oprator`);


}