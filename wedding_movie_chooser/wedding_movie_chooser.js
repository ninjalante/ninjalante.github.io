//click anywhere for YES
//fade in/fade out for questions
//buttons lead to the next step
//find another movie? // reset

let path = [];

function sayYes() {
    console.log("They said yes!");
    document.querySelector("#landingPage").style.opacity = "0%";
    document.querySelector("#questionButton").style.opacity = "100%";
    document.querySelector("#questionButton").style.visibility = "visible";
    document.querySelector("#sayYes:hover").style.cursor = "default";
    firstQuestion = document.querySelector("#questionValue");
    firstQuestion.innerHTML += rootQ.seeValue();
    let rootA = document.querySelector("#a");
    rootA.innerHTML += rootQ.seeA();
    let rootB = document.querySelector("#b");
    rootB.innerHTML += rootQ.seeB();
    let rootC = document.querySelector("#c");
    rootC.innerHTML += rootQ.seeC();
    document.querySelector("#d").style.visibility = "hidden";
    let comment = document.querySelector("#comment");
    comment.innerHTML += rootQ.seeComment();
};

function askQuestion(question) {
    currentQuestion = document.querySelector("questionValue");
    currentQuestion.innerHTML += question.seeValue();
    if (question.a != undefined) {
        optionA = document.querySelector("a").innerHTML;
        optionA += question.seeA();
        document.querySelector("a").style.visibility = "visible";
        document.querySelector("a").style.opacity = "100%";
        console.log(question.a);
    }
    if (question.b != undefined) {
        document.querySelector("b").innerHTML += question.seeB();
        document.querySelector("b").style.visibility = "visible";
        document.querySelector("b").style.opacity = "100%";
    }
    if (question.c != undefined) {
        document.querySelector("c").innerHTML += question.seeC();
        document.querySelector("c").style.visibility = "visible";
        document.querySelector("c").style.opacity = "100%";
    }
    if (question.d != undefined) {
        document.querySelector("d").innerHTML += question.seeC();
        document.querySelector("d").style.visibility = "visible"
        document.querySelector("d").style.opacity = "100%";
    }
    path.push(question.seeName())
}

function answerQuestion(answer) {
    console.log("They answered the question!")
    console.log(answer)
}