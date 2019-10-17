let x = [1, "+", 2, "+", 10, '/', 2, '*', 2, '+', 90, "*", 2];

// // while (x.length > 1) {
// //     for (let i = 0; i < x.length; i++) {
// //         if (x[i] === '*' || x[i] === '/') {
// //             console.log(x[x - 1] * x[x + 1]);
// //         }
// //     }
// // }
// console.log(x[x.indexOf('*') - 1] * x[x.indexOf('*') + 1]);

while (x.length > 1) {
    while (x.includes('*') || x.includes('/')) {
        let a = x.indexOf('*')
        let b = x.indexOf('/');
        if (a === -1 && b === -1) { return }
        else if (b === -1 || b > a) {
            let result = (x[a - 1] * x[a + 1]);
            x.splice(a - 1, 3, result);
        }
        else if (a === -1 || a > b) {
            console.log('this' + " " + x)
            let result = (x[b - 1] / x[b + 1]);
            x.splice(b - 1, 3, result);
            console.log(x);
        }
    }
    while (x.includes('+') || x.includes('-')) {
        let a = x.indexOf('+')
        let b = x.indexOf('-');
        if (x[a] === '+' && a !== -1) {
            let result = (x[a - 1] + x[a + 1]);
            x.splice(a - 1, 3, result);
        } else if (x[b] === '-' && b !== -1) {
            let result = (x[b - 1] - x[b + 1]);
            x.splice(b - 1, 3, result);
        }
    }
}
console.log(x);