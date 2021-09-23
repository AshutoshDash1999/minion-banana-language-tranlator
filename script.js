var inputTxt = document.querySelector("#inputTxt");
var translateBtn = document.querySelector("#translateBtn");
var outputTxt = document.querySelector("#outputTxt");
var serverURL = "https://api.funtranslations.com/translate/minion.json"


function translateURL(text){
    return serverURL+"?text="+text;
}

function showError(error){
    console.log("error: "+error)
    alert("error: "+error)
}

function  clickEvent(){
    var inputText = inputTxt.value;
    fetch(translateURL(inputText)).then(response => response.json()).then(json => {
        outputTxt.value = json.contents.translated
    }).catch(showError)
};

translateBtn.addEventListener("click", clickEvent)