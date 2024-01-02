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
            image.src = "https://img.freepik.com/fotos-premium/jovem-brasileiro-isolado-no-fundo-branco-rindo_1368-362553.jpg?w=996";
        }
        else if((2023 - ano)>30 && (2023 - ano)<50){
            image.src = "https://img.freepik.com/fotos-gratis/homem-adulto-atraente-cruzando-os-bracos-e-sorrindo_176420-18744.jpg?w=996&t=st=1704162367~exp=1704162967~hmac=05cfa8960e92c0aa3ee762e612e3dc90ec824978630b559326d75a226aff3077";
        }
        else if((2023 - ano)>50){
            image.src = "https://i0.wp.com/www.kdcare.com.br/wp-content/uploads/2019/01/Acessibilidade-para-idosos-5-dicas-para-deixar-sua-casa-mais-segura.jpg?w=2500&ssl=1";
        }
    } else if(sexo[1].checked){
        var saida = document.querySelector("#saida");
        var image = document.querySelector("img");
        saida.innerHTML = "Mulher de " + (2023 - ano) + " anos de idade.";

        if((2023 - ano)<18){
            image.src = "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/41997/no-one-under-eighteen-emoji-clipart-md.png";
        }else if((2023 - ano)>18 && (2023 - ano)<30){
            image.src = "https://img.freepik.com/fotos-premium/closeup-atrevida-bonita-confiante-jovem-feminina-na-jaqueta-jeans-com-cabelo-longo-e-saudavel-tocando-o-queixo-e-sorrindo-autoconfiante-em-pe-satisfeito-e-otimista-sobre-fundo-branco_176420-55550.jpg?w=996";
        }
        else if((2023 - ano)>30 && (2023 - ano)<50){
            image.src = "https://img.freepik.com/fotos-premium/mulher-milenar-sorridente-com-as-maos-cruzadas-olhando-para-a-camera-vestida-de-branco-com-cabelo-encaracolado-natural_165285-3025.jpg?w=740";
        }
        else if((2023 - ano)>50){
            image.src = "https://regenerati.com.br/wp-content/uploads/2022/02/papel-do-idoso-na-sociedade.jpg";
        }
    }
}
