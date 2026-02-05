function downloadArquivo(url, nomeArquivo) {
    // Cria um elemento <a> temporário
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = nomeArquivo; // Define o nome do arquivo baixado

    // Adiciona ao corpo, clica e remove
    document.body.appendChild(a);
    a.click();
    
    // Limpa a memória
    setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 100);
}

// Exemplo de uso:
document.getElementById('btnDownload').addEventListener('click', () => {
    downloadArquivo('https://exemplo.com', 'meu-arquivo.pdf');
});
</script>
2. Gerar e Baixar Arquivos de Texto/CSV/JSON no Navegador
Para dados gerados na hora (sem URL), cria-se um Blob (Binary Large Object) e transforma-o em uma URL temporária. 
html
<button id="btnSalvarTxt">Salvar Texto</button>

<script>
document.getElementById('btnSalvarTxt').addEventListener('click', () => {
    const conteudo = "Este é o conteúdo do meu aplicativo.";
    const nomeArquivo = ".bat";
    
    // Cria o Blob
    const blob = new Blob([conteudo], { type: 'text/plain' });
    
    // Cria URL para o Blob
    const url = window.URL.createObjectURL(blob);
    
    // Usa a mesma lógica de download
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = nomeArquivo;
    
    document.body.appendChild(a);
    a.click();
    
    // Limpeza
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
});
