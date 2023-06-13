function gerarImagem() {
    document.getElementById("buttonContainer").style.display = "none";
    var container = document.querySelector(".img_container");
    html2canvas(container).then(function (canvas) {
        document.getElementById("buttonContainer").style.display = "flex";
        var imgData = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.href = imgData;
        link.download = "screenshot.png";
        link.click();
    });
}
var data = new Date();
var hora = data.getHours();

// Definir as saudações
var saudacao;
if (hora >= 5 && hora < 12) {
  saudacao = 'Bom dia !';
} else if (hora >= 12 && hora < 18) {
  saudacao = 'Boa tarde !';
} else {
  saudacao = 'Boa noite !';
}

// Exibir a saudação na página
document.getElementById('saudacao').innerHTML = saudacao;
function reescreverInformacoes() {
    var nome = prompt("Digite o nome:");
    var veiculo = prompt("Digite o veículo:");
    var placa = prompt("Digite a placa:");
    var oficina = prompt("Digite a oficina:");
    var prazo = prompt("Digite o prazo:");

    document.getElementById("nome").innerHTML = nome;
    document.getElementById("veiculo").innerHTML = veiculo;
    document.getElementById("placa").innerHTML = placa;
    document.getElementById("oficina").innerHTML = oficina;
    document.getElementById("prazo").innerHTML = prazo;
}

// Obter a data atual
var data = new Date();
var dia = data.getDate();
var mes = data.toLocaleString('pt-BR', { month: 'long' });
var ano = data.getFullYear();

// Formatar a data
var dataFormatada = dia + ' de ' + mes + ' de ' + ano;

// Exibir a data na página
document.getElementById('data').innerHTML = dataFormatada;