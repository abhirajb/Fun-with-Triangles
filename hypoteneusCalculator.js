var inputs = document.querySelectorAll(".inputVal");
var btn = document.querySelector("#btn");
const msg = document.querySelector(".msg");


function calculateHypoteneus(){
    var output = Math.sqrt(Number(inputs[0].value**2)+Number(inputs[1].value**2));
    //console.log(typeof output);
    msg.innerText = output;
    //console.log("hi");
}

btn.addEventListener("click",calculateHypoteneus);
