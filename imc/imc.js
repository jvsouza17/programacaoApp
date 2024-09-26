//Faça uma caluladora de IMC

function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        return "Obesidade grau 1";
    } else if (imc >= 35 && imc < 39.9) {
        return "Obesidade grau 2";
    } else {
        return "Obesidade grau 3";
    }
}

function calcularEExibirIMC() {
    const peso = parseFloat(prompt("Digite o seu peso em kg:"));
    const altura = parseFloat(prompt("Digite a sua altura em metros (ex: 1.75):"));

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const imc = calcularIMC(peso, altura);
    const classificacao = classificarIMC(imc);

    alert(`Seu IMC é ${imc} (${classificacao}).`);
}

// Exemplo de uso:
calcularEExibirIMC();