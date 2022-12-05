var inputText = document.querySelector(".input-text");
var btn = document.querySelector("button");
var outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function fetchingServerURL(text){
    return serverURL + "?" + "text="  + text;
}

btn.addEventListener("click", eventHandler);

function eventHandler(){
    outputDiv.innerText = inputText.value;
    fetch(fetchingServerURL(inputText.value))
        .then(response => response.json())
        .then(json => console.log(json))
}