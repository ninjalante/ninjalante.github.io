
//buttons lead to the next step
//find another movie? // reset

//let path = []

function sayYes() {
    console.log("They said yes!");
    document.querySelector("#landingPage").style.opacity = "0%";
    document.querySelector("#questionButton").style.opacity = "100%";
    document.querySelector("#questionButton").style.visibility = "visible";
    document.querySelector("#sayYes:hover").style.cursor = "default";
    let firstQuestion = document.querySelector("#questionValue");
    firstQuestion.innerHTML += rootQ.seeQuestion();
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

let path = [];
//OLD function that kind of works
function askQuestion(answer, nextQuestion = rootQ, path = [rootQ.seeName()]) {       
    if (nextQuestion instanceof WeddingMovie) {
        let announcement = document.querySelector("#announcement");
        announcement.innerHTML = "I have the perfect movie for you!";
        let movieRec = document.querySelector("#movieRec");
        movieRec.innerHTML += nextQuestion.returnDeets();
    } else {
        if (answer === "a") {
            console.log("It's a!");
            rootQ = nextQuestion.children.a;
        } else if (answer === "b") {
            console.log("It's b!");
            rootQ = nextQuestion.children.b;
        } else if (answer === "c") {
            console.log("It's c!");
            rootQ = nextQuestion.children.c;
        } else if (answer === "d") {
            console.log("It's d!");
            rootQ = nextQuestion.children.d;
        };
        if (nextQuestion instanceof Question) {
            path += [nextQuestion.seeName()];
        };
        console.log(path);
        console.log(nextQuestion.seeQuestion());
        console.log(nextQuestion.seeA());
        console.log(nextQuestion.seeB());

        if (nextQuestion.children.c) {
            console.log(nextQuestion.seeC());
        };
        if (nextQuestion.children.d) {
            console.log(nextQuestion.seeD());
        };

        currentQuestion = document.querySelector("#questionValue");
        currentQuestion.innerHTML = nextQuestion.seeQuestion();

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
