var inputs = document.querySelectorAll(".inputVal");
var outputMsg = document.querySelector("#msg");
var areaButton = document.querySelector("#btn");

function calculateArea(){
    var result = (1/2)*inputs[0].value*inputs[1].value;
    outputMsg.innerText =result;
}

areaButton.addEventListener("click",calculateArea);