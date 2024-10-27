let maiorSalario = 0;
let nomeMaiorSalario = '';

while (true) {
    let nome = prompt("Digite o nome da pessoa:");
    let salario = parseFloat(prompt("Digite o salário da pessoa:"));

    if (salario > maiorSalario) {
        maiorSalario = salario;
        nomeMaiorSalario = nome;
    }

    let continuar = prompt("Deseja continuar? (sim/não)").toLowerCase();

    if (continuar !== 'sim') {
        break;
    }
}

alert(`A pessoa com o maior salário é ${nomeMaiorSalario}, com um salário de ${maiorSalario}.`);
