// Things to work on:
// when first button pressed is operator, it pushes it to array
// refactor operate function
// divide by zero




const buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let x = [];


buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'back') {
            if (x.length === 0) { }
            else if (['+', '-', '*', '/'].indexOf(x[x.length - 1]) !== -1) { }
            else {
                let removeChar = x[x.length - 1].slice(0, -1);
                x[x.length - 1] = removeChar;
                display.innerHTML = displayStr();
            }

        }
        if (button.id === '.') {
            if ((x[x.length - 1]).includes('.')) {

            } else {
                if (['+', '-', '*', '/'].indexOf(x[x.length - 1]) !== -1) {

                } else {
                    x[x.length - 1] += button.id;
                    display.innerHTML = displayStr();

                }
            }
        }
        if (button.id === 'clear') {
            x = [];
            display.innerHTML = "";
        }
        if (button.className === 'btn-num') {
            if (x.length === 0) {
                x.push(button.id)
                display.innerHTML = displayStr();
            } else if (x[x.length - 1] === "+" || x[x.length - 1] === "-" ||
                x[x.length - 1] === "*" || x[x.length - 1] === "/") {
                x.push(button.id);
                display.innerHTML = displayStr();
            }
            else {
                x[x.length - 1] += button.id;
                display.innerHTML = displayStr();
            }

        }
        if (button.className === 'btn-operator') {
            // HOW DOES THIS WORK?
            if (['+', '-', '*', '/'].indexOf(x[x.length - 1]) !== -1) {
            }
            else {
                x.push(button.id);
                display.innerHTML = displayStr();
            }

        }
        if (button.id === '=') {
            if (x.length > 2) {
                if (['+', '-', '*', '/'].indexOf(x[x.length - 1]) !== -1) {
                    x.pop();
                }
                operate();
                display.innerHTML = Math.round(x[0] * 100) / 100
                x = [];
            } else {

            }

        }
    });
});

function operate() {
    while (x.length > 1) {
        while (x.includes('*') || x.includes('/')) {
            let a = x.indexOf('*');
            let b = x.indexOf('/');

            if (a === -1 && b === -1) {
            }

            else if (a > 0 && b === -1) {
                let z = (x[a - 1] * x[a + 1]);
                x.splice(a - 1, 3, z);
            }
            else if (a === -1 && b > 0) {
                let z = (x[b - 1] / x[b + 1]);
                x.splice(b - 1, 3, z);
            }
            else {
                if (a < b) {
                    let z = (x[a - 1] * x[a + 1]);
                    x.splice(a - 1, 3, z);
                } else {

                    let z = (x[b - 1] / x[b + 1]);
                    x.splice(b - 1, 3, z);
                }
            }
        }
        while (x.includes('+') || x.includes('-')) {
            let a = x.indexOf('+');
            let b = x.indexOf('-');

            if (a === -1 && b === -1) {
            }

            else if (a > 0 && b === -1) {
                let z = (Number(x[a - 1]) + Number(x[a + 1]));
                x.splice(a - 1, 3, z);
            }
            else if (a === -1 && b > 0) {
                let z = (Number(x[b - 1]) - Number(x[b + 1]));
                x.splice(b - 1, 3, z);
            }
            else {
                if (a < b) {
                    let z = (Number(x[a - 1]) + Number(x[a + 1]));
                    x.splice(a - 1, 3, z);
                } else {
                    let z = (Number(x[b - 1]) - Number(x[b + 1]));
                    x.splice(b - 1, 3, z);
                }
            }
        }
    }

};

function displayStr() {
    str = "";
    for (let i = 0; i < x.length; i++) {
        str += x[i];
        str += " ";
    }
    console.log(str);
    return str;
}

