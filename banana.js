var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

function clickHandler() {
    outputDiv.innerHTML = "translated text" +txtInput.value;   
}

btnTranslate.addEventListener("click", clickHandler);

