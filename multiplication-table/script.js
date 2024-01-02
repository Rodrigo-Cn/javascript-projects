function verificar() {
    var num = parseInt(document.querySelector("#number").value);
    var saida = document.querySelector("#saida");

    saida.innerHTML = "";

    for (var i = 1; i <= 9; i++) {
        var num1 = num * i;
        var option = document.createElement("option");
        option.text = i + "x" + num + " = " + num1;
        saida.add(option);
    }
}
