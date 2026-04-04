document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const btnAumentar = document.getElementById('aumentar-fonte');
    const btnDiminuir = document.getElementById('diminuir-fonte');


    const tamanhoSalvo = localStorage.getItem('tamanhoFonte');
    if (tamanhoSalvo) {
        document.documentElement.style.fontSize = tamanhoSalvo + '%';
    }


    document.addEventListener('DOMContentLoaded', () => {

        const btnAumentar = document.getElementById('aumentar-fonte');

    });

    let tamanhoAtual = 100;
    html.style.fontSize = "100%";

    const atualizarFonte = (novoTamanho) => {
        tamanhoAtual = novoTamanho;
        html.style.fontSize = `${tamanhoAtual}%`;
    };

    btnAumentar.addEventListener('click', () => {
        if (tamanhoAtual < 150) {
            atualizarFonte(tamanhoAtual + 10);
        }
    });

    btnDiminuir.addEventListener('click', () => {
        if (tamanhoAtual > 80) {
            atualizarFonte(tamanhoAtual - 10);
        }
    });

    const btnContraste = document.getElementById('autocontraste');
    if (localStorage.getItem('contraste') === 'true') {
        document.body.classList.add('contraste-alto');
    }

    btnContraste.addEventListener('click', () => {
        document.body.classList.toggle('contraste-alto');
        localStorage.setItem('contraste', document.body.classList.contains('contraste-alto'));
    });
});
