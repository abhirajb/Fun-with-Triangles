var inputVal = document.querySelectorAll('.angleVal');
//var angleTwo = document.querySelector("#secondVal");
//var angleThree = document.querySelector("#thirdVal");
var btn = document.querySelector("#btn");
var outputMsg = document.querySelector("#msg");


//console.log(angleSum);

//btn.addEventListener("click",console.log("fff"));

function isTriangle() {
    //console.log("hi");
    const angleSum = Number(inputVal[0].value) + Number(inputVal[1].value) + Number(inputVal[2].value);
    //console.log(typeof angleSum);
    //console.log(angleSum)
    if(angleSum === 180){
        outputMsg.innerText = "Triangle can be formed!";

    }
    else{
        outputMsg.innerText = "OH No! triangle can't be formed..Try again with different values";
    }

    }



btn.addEventListener("click",isTriangle);

