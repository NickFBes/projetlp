let imagemAtual = 1; // Imagem inicial

        function trocarImagem(numero) {
            // Esconde todas as imagens
            const imagens = document.querySelectorAll('.imagem');
            imagens.forEach(img => img.classList.remove('ativa'));

            // Mostra a imagem selecionada
            const imagemSelecionada = document.getElementById(`img${numero}`);
            imagemSelecionada.classList.add('ativa');
        }