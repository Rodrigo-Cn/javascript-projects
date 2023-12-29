var data = new Date();
var texto = document.querySelector("#text");
texto.innerHTML = `Agora são ${data.getHours()} horas`;
if(data.getHours()>7 && data.getHours()<12){
    var corpo = document.querySelector("body");
    var imagem = document.querySelector("#image");
    corpo.style.background = "#ffe4c4";
    imagem.src = "https://www.novotempo.com/wp-content/uploads/2020/04/Amanhecer01.jpg";
}else if(data.getHours()>12 && data.getHours()<18){
    var corpo = document.querySelector("body");
    var imagem = document.querySelector("#image");
    corpo.style.background = "#d09348";
    imagem.src = "https://images.pexels.com/photos/2386144/pexels-photo-2386144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
}else{
    var corpo = document.querySelector("body");
    var imagem = document.querySelector("#image");
    corpo.style.background = "#261c44";
    imagem.src = "https://2.bp.blogspot.com/-yGf3t6uiy0c/WT9iOl7OjUI/AAAAAAAAv0k/XDAr4Ru2nWY5iaPGDvMXIrd8QLQ07PinwCLcB/s1600/dddd.jpg";
}