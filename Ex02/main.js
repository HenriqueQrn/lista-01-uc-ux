function criarTabela() {
    
    document.getElementById('tabelaContainer').innerHTML = '';

    var n = document.getElementById('numeroInput').value;
    var texto = document.getElementById('textoInput').value;

    var tabela = document.createElement('table');
    var tbody = document.createElement('tbody');

    for (var i = 1; i <= n; i++) {
        var row = document.createElement('tr');

        var colunaIndice = document.createElement('td');
        colunaIndice.textContent = i;
        row.appendChild(colunaIndice);

        var colunaTexto = document.createElement('td');
        colunaTexto.textContent = texto;
        row.appendChild(colunaTexto);

        tbody.appendChild(row);
    }

    tabela.appendChild(tbody);

    document.getElementById('tabelaContainer').appendChild(tabela);
}