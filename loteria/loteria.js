function sortearNumeros(qtdNumeros, numerosTotais) {
    let numeros = new Set();

    while (numeros.size < qtdNumeros) {
        let numero = Math.floor(Math.random() * numerosTotais) + 1;
        numeros.add(numero);
    }

    return Array.from(numeros);
}

function escolher() {
    let opt = prompt("Escolha uma das opções: (mega sena, lotofacil, quina)");

    let numerosSorteados;

    switch(opt.toLowerCase()) {
        case 'mega sena':
            numerosSorteados = sortearNumeros(6, 60);
            alert("Números sorteados da Mega-Sena: " + numerosSorteados.join(", "));
            break;
        case 'lotofacil':
            numerosSorteados = sortearNumeros(15, 25);
            alert("Números sorteados da Lotofácil: " + numerosSorteados.join(", "));
            break;
        case 'quina':
            numerosSorteados = sortearNumeros(5, 80);
            alert("Números sorteados da Quina: " + numerosSorteados.join(", "));
            break;
        default:
            alert("Opção inválida");
            break;
    }
}

escolher();
