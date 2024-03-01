function calcularFibonacci() {
    var n = document.getElementById('numeroN').value;

    if (isNaN(n) || n < 0) {
        alert("Por favor, insira um número inteiro não negativo.");
        return;
    }

    n = parseInt(n);

    var resultado = fibonacci(n);

    document.getElementById('resultado').innerHTML = "O " + n + "-ésimo elemento da sequência de Fibonacci é: " + resultado;
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
