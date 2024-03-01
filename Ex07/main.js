function calcularFibonacci() {
    
    document.querySelector('#tabelaFibonacci tbody').innerHTML = '';
    document.getElementById('mensagemErro').textContent = '';

    const numeroElementos = parseInt(document.getElementById('numeroElementos').value);

    if (isNaN(numeroElementos) || numeroElementos < 1) {
        document.getElementById('mensagemErro').textContent = 'Por favor, insira um número válido maior que zero.';
        return;
    }

    let fibArray = [0, 1];
    for (let i = 2; i < numeroElementos; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    const tabela = document.querySelector('#tabelaFibonacci tbody');
    for (let i = 0; i < numeroElementos; i++) {
        const row = tabela.insertRow();
        const cellIndex = row.insertCell(0);
        const cellValue = row.insertCell(1);

        cellIndex.textContent = i;
        cellValue.textContent = fibArray[i];
    }
}
