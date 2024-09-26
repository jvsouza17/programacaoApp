//crie um programa que leia uma temperatura e converta para a temperatura escolhida pelo usuario7

function converterTemperatura(valor, unidadeOrigem, unidadeDestino) {
    let resultado;

    
    switch (unidadeOrigem.toLowerCase()) {
        case 'celsius':
            resultado = valor;
            break;
        case 'fahrenheit':
            resultado = (valor - 32) * 5/9;
            break;
        case 'kelvin':
            resultado = valor - 273.15;
            break;
        default:
            return 'Unidade de origem inválida';
    }


    switch (unidadeDestino.toLowerCase()) {
        case 'celsius':
            break;
        case 'fahrenheit':
            resultado = (resultado * 9/5) + 32;
            break;
        case 'kelvin':
            resultado = resultado + 273.15;
            break;
        default:
            return 'Unidade de destino inválida';
    }

    return `A temperatura convertida é: ${resultado.toFixed(2)} ${unidadeDestino}`;
}

const valor = parseFloat(prompt("Digite o valor da temperatura:"));
const unidadeOrigem = prompt("Digite a unidade de origem (Celsius, Fahrenheit, Kelvin):");
const unidadeDestino = prompt("Digite a unidade de destino (Celsius, Fahrenheit, Kelvin):");

const resultado = converterTemperatura(valor, unidadeOrigem, unidadeDestino);
console.log(resultado);