const buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
// let displayContent = "";
let operand1 = "";
let operand2 = "";
let operator = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === "clear") {
            operand1 = "";
            operand2 = "";
            operator = "";
            display.innerHTML = "";
        }
        if (operator === "" && operand2 === "" && button.className === 'btn-num') {
            operand1 += button.id;
            display.innerHTML = operand1;
        }
        if (operand1 !== "" && operator === "" && button.className === 'btn-operator') {
            operator += button.id;
            display.innerHTML = operand1 + " " + operator;
        }
        if (operand1 !== "" && operator !== "" && button.className === 'btn-num') {
            operand2 += button.id;
            display.innerHTML = operand1 + " " + operator + " " + operand2;
        }
        if (operand1 !== "" && operand2 !== "" && operator !== "") {
            if (button.id === "=") {
                display.innerHTML = operate();
                operand1 = "";
                operand2 = "";
                operator = "";
            }
            else { return }
        }

    });
});

function operate() {
    // if (operator === '+') { return (Number(operand1) + Number(operand2)) }
    // if (operator === '-') { return (Number(operand1) - Number(operand2)) }
    // if (operator === '*') { return (Number(operand1) * Number(operand2)) }
    // if (operator === '/') { return (Number(operand1) / Number(operand2)) }
    return Number("33/2")
};
