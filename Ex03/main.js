function validarFormulario() {
    
    var nome = document.getElementById('nome').value;
    var endereco = document.getElementById('endereco').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;

    if (nome === '' || endereco === '' || telefone === '' || email === '') {
        
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false; 
    }

    return true;
}
