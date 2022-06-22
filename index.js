let operator = prompt('enter operator e.g +, -, *. /, %: ')
let num1 = parseFloat(prompt('enter first number: '))
let num2 = parseFloat(prompt('enter second number \n' +  num1 + operator + '_'))
answer = null

let operation = num1 + operator + num2 + ' = '

switch(operator){
    case('+'):
    answer = num1 + num2;
    alert(operation +answer) ;
    break;
    case('-'):
    answer = num1 - num2;
    alert(operation +answer) ;
    break;
    case('*'):
    answer = num1 * num2;
    alert(operation +answer) ;
    break;
    case('/'):
    answer = num1 / num2;
    alert(operation +answer) ;
    break;
    case('%'):
    answer = num1 % num2;
    alert(operation +answer) ;
    break;
}
 


