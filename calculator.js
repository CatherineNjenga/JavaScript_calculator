let answer = prompt("What operation would you like to make? (input '+' or '*' or '-' or /' or '%')")

let numOne = Number(window.prompt("Kindly input your first number."))
let numTwo = Number(window.prompt("Kindly input your second number."))

if (answer == '+'){
    result = numOne + numTwo;
    alert(`The result is ${result}.`);
} else if (answer == '*') {
    result = numOne * numTwo;
    alert(`The result is ${result}.`);
} else if (answer == '-') {
    result = numOne - numTwo;
    alert(`The result is ${result}.`)
} else if (answer == '/') {
    result = numOne / numTwo;
    alert(`The result is ${result}.`)
} else if (answer == '%') {
    result = numOne % numTwo;
    alert(`The result is ${result}.`)
}