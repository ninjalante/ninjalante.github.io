
//buttons lead to the next step
//find another movie? // reset

let path = [];

function sayYes() {
    console.log("They said yes!");
    document.querySelector("#landingPage").style.opacity = "0%";
    document.querySelector("#questionButton").style.opacity = "100%";
    document.querySelector("#questionButton").style.visibility = "visible";
    document.querySelector("#sayYes:hover").style.cursor = "default";
    let firstQuestion = document.querySelector("#questionValue");
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

function askQuestion(answer, nextQuestion = rootQ) {       
    if (nextQuestion instanceof WeddingMovie) {
        let announcement = document.querySelector("#announcement");
        announcement.innerHTML = "I have the perfect movie for you!";
        let movieRec = document.querySelector("#movieTitle");
        movieRec.innerHTML += nextQuestion.value();
    } else {
        if (answer === "a") {
            console.log("It's a!");
            nextQuestion = nextQuestion.children.a;
        } else if (answer === "b") {
            console.log("It's b!");
            nextQuestion = nextQuestion.children.b;
        } else if (answer === "c") {
            console.log("It's c!");
            nextQuestion = nextQuestion.children.c;
        } else if (answer === "d") {
            console.log("It's d!");
            nextQuestion = nextQuestion.children.d;
        };
        path.push(nextQuestion.seeName());
        console.log(path);
        console.log(nextQuestion.seeValue());
        console.log(nextQuestion.seeA());
        console.log(nextQuestion.seeB());
        currentQuestion = document.querySelector("#questionValue");
        currentQuestion.innerHTML = nextQuestion.seeValue();
        if (nextQuestion.a != undefined) {
            let optionA = document.querySelector("#a");
            optionA.innerHTML = nextQuestion.seeA();
        }
        if (nextQuestion.b != undefined) {
            let optionB = document.querySelector("#b");
            optionB.innerHTML = nextQuestion.seeB();
        }
        if (nextQuestion.c != undefined) {
            let optionC = document.querySelector("#c");
            optionC.innerHTML = nextQuestion.seeC();
        }
        if (nextQuestion.d != undefined) {
            optionD = document.querySelector("#d");
            optionD.innerHTML = nextQuestion.seeD();
        };
        }
    };
/*
function askQuestion(question) {
    currentQuestion = document.querySelector("#questionValue");
    currentQuestion.innerHTML = question.seeValue();
    if (question.a != undefined) {
        optionA = document.querySelector("#a").innerHTML;
        optionA = question.seeA();
    }
    if (question.b != undefined) {
        optionB = document.querySelector("#b").innerHTML;
        optionB = question.seeB();
    }
    if (question.c != undefined) {
        optionC = document.querySelector("#c").innerHTML;
        optionC = question.seeC();
    }
    if (question.d != undefined) {
        optionD = document.querySelector("#d").innerHTML;
        optionD = question.seeD();
    };
    
};

function answerQuestion(answer, movieTree = rootQ) {
    console.log("They answered the question!");
    if (answer instanceof WeddingMovie) {
        return revealMovie(answer);
    } else {
        if (answer === "a") {
            console.log("It's a!");
            let nextQuestion = movieTree.children.a;
        } else if (answer === "b") {
            console.log("It's b!");
            let nextQuestion = movieTree.children.b;
        } else if (answer === "c") {
            console.log("It's c!");
            let nextQuestion = movieTree.children.c;
        } else if (answer === "d") {
            console.log("It's d!");
            let nextQuestion = movieTree.children.d;
        };
        path.push(nextQuestion.seeName());
        console.log(path);
        console.log(nextQuestion.seeValue());
        console.log(nextQuestion.seeA());
        console.log(nextQuestion.seeB());
        askQuestion(answer, nextQuestion);
    }
};

function revealMovie() {
    console.log("here it is!");
};
*/
