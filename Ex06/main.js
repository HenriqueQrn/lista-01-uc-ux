function verificarTelefone() {
    
    var telefone = document.getElementById('telefone').value;
    var padrao = /^\d{4}-\d{4}$/;

    if (padrao.test(telefone)) {
        document.getElementById('resultado').innerHTML = 'Telefone válido!';
        document.getElementById('resultado').style.color = 'green';
    } else {
        document.getElementById('resultado').innerHTML = 'Telefone inválido! Por favor, siga o formato dddd-dddd.';
        document.getElementById('resultado').style.color = 'red';
    }
}
