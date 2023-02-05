//click anywhere for YES
//fade in/fade out for questions
//buttons lead to the next step
//find another movie? // reset
function fadeInfadeOut(fadingOut, fadingIn) {
    document.querySelector(fadingOut).style.opacity = "0%";
    document.querySelector(fadingIn).style.opacity = "100%";
    document.querySelector(fadingIn).style.visibility = "visible";
}

function sayYes() {
    console.log("They said yes!");
    document.querySelector("#landingPage").style.opacity = "0%";
    document.querySelector("#questionButton").style.opacity = "100%";
    document.querySelector("#questionButton").style.visibility = "visible";
};

function answerQuestion(answer) {
    console.log("They answered the question!")
    console.log(answer)
}

function changeButtonText(button, text) {
    document.querySelector(button).innerHTML = text
    //how do I access the nodes for this? time to do some sketching. not right now. now is for food
}