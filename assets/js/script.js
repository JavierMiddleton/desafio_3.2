/* Excercise 1*/ 

let imgClick = document.getElementById("img-1").addEventListener('click', excercise1);

function excercise1 () {
    let imgClick = document.getElementById("img-1");
    if (imgClick.style.border == '') {
        imgClick.style.border = 'solid 2px red'
    } else {
        imgClick.style.border = ''
    }
}

/* Exercise 2*/

let buttonClickExe2 = document.getElementById("verify1-button").addEventListener('click', excercise2);

function excercise2 () {
    let stickerInput1 = document.getElementById("sticker1-input").value;
    let stickerInput2 = document.getElementById("sticker2-input").value;
    let stickerInput3 = document.getElementById("sticker3-input").value;
    let resultExcercise2 = Number(stickerInput1)+ Number(stickerInput2) + Number(stickerInput3)
    let textResultExcercise2 = document.getElementById("excercise2-text")
    if (resultExcercise2 <= 10) {
        textResultExcercise2.innerHTML = "Llevas " + resultExcercise2 + " stickers"
    } else {
        textResultExcercise2.innerHTML = "Llevas demasiados stickers"
    }
}

/* Exercise 3*/

let buttonClickExe3 = document.getElementById("verify2-button").addEventListener('click', excercise3);

function excercise3 () {
    let passInput1 = document.getElementById("select-1").value;
    let passInput2 = document.getElementById("select-2").value;
    let passInput3 = document.getElementById("select-3").value;
    let resultExcercise3 = passInput1 + passInput2 + passInput3
    let textResultExcercise3 = document.getElementById("pass-check")
    if (resultExcercise3 == "911") {
        textResultExcercise3.innerHTML = "Password 1 correcto"
    } else if (resultExcercise3 == "714") {
        textResultExcercise3.innerHTML = "Password 2 correcto"
    } else {
        textResultExcercise3.innerHTML = "Password incorrecto"
    }
}
