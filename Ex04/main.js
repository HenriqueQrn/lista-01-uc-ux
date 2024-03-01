    var numeros = [];
    var input;

    while (true) {
        input = prompt("Digite um número ou 'm' para calcular a média:");

        if (input.toLowerCase() === 'm') {

            if (numeros.length > 0) {
                const soma = numeros.reduce((acc, num) => acc + num, 0);
                const media = soma / numeros.length;
                alert("Média dos números: " + media.toFixed(2));
            } else {
                alert("Nenhum número foi inserido.");
            }
            break; 
        }

        const numero = parseFloat(input);
        if (!isNaN(numero)) {
            numeros.push(numero);
        } else {
            alert("Por favor, digite um número válido ou 'm' para calcular a média.");
        }
    }
