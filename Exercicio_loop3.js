const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function main() {
    const rl = readline.createInterface({ input, output });

    const totalCalculos = parseInt(await rl.question("Quantos cálculos você deseja realizar? "));

    for (let i = 1; i <= totalCalculos; i++) {
        console.log(`\n--- Cálculo ${i} de ${totalCalculos} ---`);
        const num1 = parseFloat(await rl.question("Digite o primeiro número: "));
        const num2 = parseFloat(await rl.question("Digite o segundo número: "));

        const soma = num1 + num2;
        const subtracao = num1 - num2;
        const multiplicacao = num1 * num2;
        const divisao = num2 !== 0 ? (num1 / num2) : "Não é possível dividir por zero";

        console.log(`Soma: ${soma}`);
        console.log(`Subtração: ${subtracao}`);
        console.log(`Multiplicação: ${multiplicacao}`);
        console.log(`Divisão: ${divisao}`);
    }

    rl.close();
}

main();