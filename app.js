var inputText = document.querySelector(".input-text");
var btn = document.querySelector("button");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function fetchingServerURL(text){
    return serverURL + "?" + "text="  + text;
}

function errorHandler(error){
    console.error("An error occured, ", error);
    alert("Error occured: "+ error+ ".Try again later");
}

btn.addEventListener("click", eventHandler);

function eventHandler(){
    fetch(fetchingServerURL(inputText.value))
        .then(response => response.json())
        .then(json => {
            outputDiv.innerText = json.contents.translated;
        })
        .catch(errorHandler);
}