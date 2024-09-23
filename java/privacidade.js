// Salva a aceitação quando "Eu Aceito" é clicado
document.getElementById('acceptButton').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Sua aceitação foi registrada!');
    goBack('areaUsuario.html'); // Especifica a página para onde o usuário deve ser redirecionado
});

// Função para redirecionar para uma página específica
function goBack(url) {
    // Redireciona para a página especificada
    window.location.href = url;
}
