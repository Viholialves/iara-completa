// Função para navegar para as páginas das opções
function navigateTo(page) {
    window.location.href = page;
}

// Função para encerrar a sessão do usuário
function logout() {
    const confirmation = confirm('Tem certeza de que deseja encerrar a sessão?');
    if (confirmation) {
        // Simula o encerramento da sessão (adicione a lógica real de logout aqui)
        alert('Sessão encerrada com sucesso.');
        window.location.href = '../index.html'; // Redireciona para a página de login ou inicial
    }
}
