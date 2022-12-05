var inputText = document.querySelector(".input-text");
var btn = document.querySelector("button");
var outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function fetchingServerURL(text){
    return serverURL + "?" + "text="  + text;
}

btn.addEventListener("click", eventHandler);

function eventHandler(){
    fetch(fetchingServerURL(inputText.value))
        .then(response => response.json())
        .then(json => {
            outputDiv.innerText = json.contents.translated;
        })
}