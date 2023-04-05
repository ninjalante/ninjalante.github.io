
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
    firstQuestion.innerHTML += rootQ.quest();
    let rootA = document.querySelector("#a");
    rootA.innerHTML += rootQ.seeA();
    let rootB = document.querySelector("#b");
    rootB.innerHTML += rootQ.seeB();
    let rootC = document.querySelector("#c");
    rootC.innerHTML += rootQ.seeC();
    document.querySelector("#d").style.visibility = "hidden";
    let comment = document.querySelector("#comment");
    comment.innerHTML += rootQ.seeComment();
    console.log(rootQ);

};

let path = [];
//OLD function that kind of works
function askQuestion(answer, nextQ = rootQ) { //the rootQ is going in TWICE before it's answered.       
    if (nextQ instanceof WeddingMovie) {
        let disappear = document.querySelector("#questionButton");
        disappear.style.visibility = "hidden";
        disappear.style.opacity = "0%";
        disappear.style.width = "0%";
        let recommendation = document.querySelector("#recommendation");
        recommendation.style.visibility = "visible";
        recommendation.style.opacity = "100%";
        recommendation.style.width = "auto";
        let announcement = document.querySelector("#announcement");
        announcement.innerHTML += "I have the perfect movie for you!";
        let movieRec = document.querySelector("#movieRec");
        movieRec.innerHTML += nextQ.returnDeets();
    } else {
        path.push(nextQ.seeName());
        console.log(path);
        console.log(nextQ);
        if (answer === "a") {
            console.log("It's a!");
            rootQ = nextQ.children.a;
            answer = "a";
        } else if (answer === "b") {
            console.log("It's b!");
            rootQ = nextQ.children.b;
            answer = "b";
        } else if (answer === "c") {
            console.log("It's c!");
            rootQ = nextQ.children.c;
            answer = "c";
        } else if (answer === "d") {
            console.log("It's d!");
            rootQ = nextQ.children.d;
            answer = "d";
        };
        console.log(nextQ.quest());
        console.log(nextQ.seeA());
        console.log(nextQ.seeB());
        console.log("This is ask Question.")

        if (nextQ.children.c) {
            console.log(nextQ.seeC());
        };
        if (nextQ.children.d) {
            console.log(nextQ.seeD());
        };

        currentQuestion = document.querySelector("#questionValue");
        currentQuestion.innerHTML = nextQ.quest();

        let optionA = document.querySelector("#a");
        let optionB = document.querySelector("#b");
        let optionC = document.querySelector("#c");
        let optionD = document.querySelector("#d");

        if (nextQ.a != undefined) {
            optionA.innerHTML = nextQ.seeA();
        }
        if (nextQ.b != undefined) {
            optionB.innerHTML = nextQ.seeB();
        }
        if (nextQ.c != undefined) {
            optionC.style.visibility = "visible";
            optionC.style.opacity = "100%";
            optionC.style.width = "auto";
            optionC.innerHTML = nextQ.seeC();

        } else if (nextQ.c == undefined) {
            optionC.style.visibility = "hidden";
            optionC.style.opacity = "0%";
            optionC.style.width = "0%";
        }
        if (nextQ.d != undefined) {
            optionD.style.visibility = "visible";
            optionD.style.opacity = "100%";
            optionD.style.width = "auto";
            optionD.innerHTML = nextQ.seeD();

        } else if (nextQ.d == undefined) {
            optionD.style.visibility = "hidden";
            optionD.style.opacity = "0%";
            optionD.style.width = "0%";
        }
    };
    };
