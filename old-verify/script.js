function verificar(){
    var ano = parseInt((document.querySelector("#ano")).value);
    var sexo = document.getElementsByName("radsex");
    
    if(sexo[0].checked){
        var saida = document.querySelector("#saida");
        var image = document.querySelector("img");
        saida.innerHTML = "Homem de " + (2023 - ano) + " anos de idade.";

        if((2023 - ano)<18){
            image.src = "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/41997/no-one-under-eighteen-emoji-clipart-md.png";
        }else if((2023 - ano)>18 && (2023 - ano)<30){
            image.src = "";
        }
        else if((2023 - ano)>30 && (2023 - ano)<50){
            image.src = "";
        }
        else if((2023 - ano)>50){
            image.src = "";
        }
    } else if(sexo[1].checked){
        var saida = document.querySelector("#saida");
        var image = document.querySelector("img");
        saida.innerHTML = "Mulher de " + (2023 - ano) + " anos de idade.";

        if((2023 - ano)<18){
            image.src = "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/41997/no-one-under-eighteen-emoji-clipart-md.png";
        }else if((2023 - ano)>18 && (2023 - ano)<30){
            image.src = "";
        }
        else if((2023 - ano)>30 && (2023 - ano)<50){
            image.src = "";
        }
        else if((2023 - ano)>50){
            image.src = "";
        }
    }
}
