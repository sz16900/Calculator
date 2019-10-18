const buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let a = "";
let b = "";
let o = "";
let x = [];


buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.className === 'btn-num') {
            if (b === "") {
                a += button.id;
                console.log(a);

            } else {
                b += button.id;
            }
        }
        if (button.className === 'btn-operator') {
            if (b !== "") {
                x.push(b);
                b = "";
            }
            if (a !== "") {
                x.push(a);
                a = "";
            }
            o = button.id;
            x.push(o)
            o = "";
            console.log(x)
        }
        if (button.id === "=") {
            operate();
        }
    });
});




function operate() {
    if (Number(x[x.length - 1]) !== "number") { x.pop() }
    console.log(x);

};
