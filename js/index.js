//FUNçÃO PARA EXIBIR E ESCONDER DETALHES AO ACIONAR BOTÃO

function Maisinformacoes(el) {
    var display = document.getElementById(el).style.display;
    var botao = document.getElementById("mais-info");

    if(display == "none") {
        document.getElementById(el).style.display = 'block';
        botao.innerHTML = "Menos Informações";
    }
    else {
        document.getElementById(el).style.display = 'none';
        botao.innerHTML = "Mais Informações";
    }
}