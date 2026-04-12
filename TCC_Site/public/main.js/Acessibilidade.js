window.addEventListener('componentesCarregados', () => {

    const html = document.documentElement;

    const btnAumentar = document.getElementById('aumentar-fonte');
    const btnDiminuir = document.getElementById('diminuir-fonte');
    const btnContraste = document.getElementById('autocontraste');

    if (!btnAumentar || !btnDiminuir || !btnContraste) return;

    let tamanhoAtual = localStorage.getItem('tamanhoFonte') 
        ? parseInt(localStorage.getItem('tamanhoFonte')) 
        : 100;

    html.style.fontSize = tamanhoAtual + "%";

    function atualizarFonte(novoTamanho) {
        tamanhoAtual = novoTamanho;
        html.style.fontSize = tamanhoAtual + "%";
        localStorage.setItem('tamanhoFonte', tamanhoAtual);
    }

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

    if (localStorage.getItem('contraste') === 'true') {
        document.body.classList.add('contraste-alto');
    }

    btnContraste.addEventListener('click', () => {
        document.body.classList.toggle('contraste-alto');

        localStorage.setItem(
            'contraste',
            document.body.classList.contains('contraste-alto')
        );
    });

});
