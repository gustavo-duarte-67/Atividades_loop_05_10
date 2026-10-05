const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function main() {
    const rl = readline.createInterface({ input, output });

    let continuar = "s";

    while (continuar.toLowerCase() === "s") {
        const num1 = parseFloat(await rl.question("Digite o primeiro número: "));
        const num2 = parseFloat(await rl.question("Digite o segundo número: "));

        const soma = num1 + num2;
        const subtracao = num1 - num2;
        const multiplicacao = num1 * num2;
        const divisao = num2 !== 0 ? (num1 / num2) : "Não é possível dividir por zero";

        console.log("\n--- Resultados ---");
        console.log(`Soma: ${soma}`);
        console.log(`Subtração: ${subtracao}`);
        console.log(`Multiplicação: ${multiplicacao}`);
        console.log(`Divisão: ${divisao}\n`);

        continuar = await rl.question("Deseja realizar outro cálculo? (s/n): ");
    }

    rl.close();
}

main();