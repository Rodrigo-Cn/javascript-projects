function verificar() {
    var num1 = parseInt(document.querySelector("#number1").value);
    var num2 = parseInt(document.querySelector("#number2").value);
    var num3 = parseInt(document.querySelector("#number3").value);
    var saida = document.querySelector("#saida");

    if (num2 < num1) {
        saida.innerHTML = "Número final não pode ser menor que o inicial";
    } else if (num3 > (num2 - num1)) {
        saida.innerHTML = "Número de passos não pode ser maior que o intervalo";
    } else {
        saida.innerHTML = "Contagem de Casas:<br>";
        for (var i = num1; i < num2; i += num3) {
            saida.innerHTML += "| "+i+" |";
        }
    }
}
