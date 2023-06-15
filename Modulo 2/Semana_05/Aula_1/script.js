
let a = 5;
let b = 10;

const conta = (x, y) => {
    let operacao;

    if (x > 5) {
        operacao = x * y;
    } else {
        operacao = x / y; // 5 / 10 = 0.5
    }

    return operacao;
}

console.log("o resultado da conta foi: ", conta(a, b));