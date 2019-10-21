// Things to work on:
// when first button pressed is operator, it pushes it to array
// refactor operate function
// divide by zero
// display
// decimal




const buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let a = "";
let x = [];


buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            a = "";
            x = [];
        }
        if (button.className === 'btn-num') {
            a += button.id;
            display.innerHTML = a;
        }
        if (button.className === 'btn-operator') {
            x.push(a);
            a = "";
            x.push(button.id);
            display.innerHTML = button.id;

        }
        if (button.id === '=') {
            if (a !== "") { x.push(a) };
            if (x[x.length - 1] === "+" || x[x.length - 1] === "-" ||
                x[x.length - 1] === "*" || x[x.length - 1] === "/") {
                x.pop();
            }
            operate();
            display.innerHTML = x[0]
            a = "";
            x = [];
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
