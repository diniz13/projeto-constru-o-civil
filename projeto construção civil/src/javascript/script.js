document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

let etapaSelecionada = '';

function mostrarPrioridades(etapa) {
    etapaSelecionada = etapa;
    document.getElementById('modal-prioridades').style.display = "block";
}

function fecharModal() {
    document.getElementById('modal-prioridades').style.display = "none";
}

function definirPrioridade(prioridade) {
    const etapaElement = document.getElementById(etapaSelecionada);
    
    // Remove as classes de prioridade existentes
    etapaElement.classList.remove('alta-prioridade', 'media-prioridade', 'baixa-prioridade', 'concluida-prioridade', 'destacada');

    // Adiciona a nova classe de prioridade
    if (prioridade === 'alta') {
        etapaElement.classList.add('alta-prioridade');
        etapaElement.classList.add('destacada'); // Para fazer piscar
    } else if (prioridade === 'media') {
        etapaElement.classList.add('media-prioridade');
        etapaElement.classList.add('destacada');
    } else if (prioridade === 'baixa') {
        etapaElement.classList.add('baixa-prioridade');
        etapaElement.classList.add('destacada');
    } else if (prioridade === 'concluida') {
        etapaElement.classList.add('concluida-prioridade'); // Remove o piscar e muda para branco
    }

    fecharModal();
}

function mostrarAnotacoes(etapa) {
    document.getElementById('modal-anotacoes').style.display = "block";
    // Carregar anotações específicas se necessário
}

function fecharModalAnotacoes() {
    document.getElementById('modal-anotacoes').style.display = "none";
}

function salvarAnotacoes() {
    let anotacao = document.getElementById('anotacao_texto').value;
    // Aqui você pode salvar a anotação usando JavaScript ou enviar para o backend
    fecharModalAnotacoes();
}
