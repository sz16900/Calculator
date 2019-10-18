// let displayContent = "";
let operand1 = false;
let operand2 = false;
let operator = false;

if (button.id === "clear") {
    operand1 = "";
    operand2 = "";
    operator = "";
    display.innerHTML = "";
    operand1, operand2, operator = false;
}
if (operand1 === false) {
    operand1 = true;
    operand1 += button.id;
    display.innerHTML = operand1;
}
if (operand1 = true) {
    operator = true;
    operator += button.id;
    display.innerHTML = operand1 + " " + operator;
}
if (operand1 === true && operator === true) {
    operand2 = true;
    operand2 += button.id;
    display.innerHTML = operand1 + " " + operator + " " + operand2;
}
if (operand1 === true && operand2 === true && operator === true) {
    if (button.id === "=") {
        display.innerHTML = operate();
        operand1 = "";
        operand2 = "";
        operator = "";
    }
    else { return }
}