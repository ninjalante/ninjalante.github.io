//click anywhere for YES
//fade in/fade out for questions
//buttons lead to the next step
//find another movie? // reset
function fadeInfadeOut(fadingOut, fadingIn) {
    document.querySelector(fadingOut).style.opacity = "0%";
    document.querySelector(fadingIn).style.opacity = "100%";
    document.querySelector(fadingIn).style.visibility = "visible";
}

let path = [];

function askQuestion(question) {
    document.querySelector("question").innerHTML += question.value();
    if (question.a != undefined) {
        document.querySelector("a").innerHTML += question.a();
        document.querySelector("a").style.visibility = "visible";
    }
    if (question.b != undefined) {
        document.querySelector("b").innerHTML += question.b();
        document.querySelector("b").style.visibility = "visible";
    }
    if (question.c != undefined) {
        document.querySelector("c").innerHTML += question.c();
        document.querySelector("c").style.visibility = "visible";
    }
    if (question.d != undefined) {
        document.querySelector("d").innerHTML += question.d();
        document.querySelector("d").style.visibility = "visible"
    }
    path.push(question.name())
}

function sayYes() {
    console.log("They said yes!");
    document.querySelector("#landingPage").style.opacity = "0%";
    document.querySelector("#questionButton").style.opacity = "100%";
    document.querySelector("#questionButton").style.visibility = "visible";
    askQuestion(rootQ)
};

function answerQuestion(answer) {
    console.log("They answered the question!")
    console.log(answer)
}