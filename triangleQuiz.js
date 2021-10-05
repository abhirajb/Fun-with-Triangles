const quizForm = document.querySelector(".quiz-container");
const submitBtn = document.querySelector(".btn");
var outputMsg = document.querySelector(".msg");

var score=0;
var idx=0;
const answerKey = ["90°","right angled"];

function checkAnswer(){
    //console.log("hi");
    const fd = new FormData(quizForm);
    //console.log(fd.values());
    for(let val of fd.values()){
        if(val === answerKey[idx]){
            score=score+1;
        }
        idx=idx+1;
    }
    outputMsg.innerText="Your score is: "+score;
}
submitBtn.addEventListener("click",checkAnswer);