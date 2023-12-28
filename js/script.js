const inputs = document.querySelectorAll('input[type="text"], textarea');

inputs.forEach((input) => {
    input.addEventListener("input", function () {
        let texto = input.value;

        if (texto.length > 0) {
            texto = texto.charAt(0).toUpperCase() + texto.slice(1);
        }

        input.value = texto;
    });
});

// Capturando o elemento de input de data
const inputData = document.getElementById("purchase-date");

// Obtendo o ano atual
const anoAtual = new Date().getFullYear();

// Adicionando um ouvinte de evento para verificar a data inserida
inputData.addEventListener("change", function () {
    // Convertendo a data inserida para um objeto Date
    const dataInserida = new Date(inputData.value);

    // Obtendo o ano da data inserida
    const anoInserido = dataInserida.getFullYear();

    // Verificando se a data inserida é maior que o ano atual
    if (anoInserido > anoAtual) {
        alert("Por favor, insira uma data até o ano atual.");
        inputData.value = ""; // Limpa o campo se a data for inválida
    }
});
