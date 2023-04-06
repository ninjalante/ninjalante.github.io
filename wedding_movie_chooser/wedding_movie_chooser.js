
function sayYes() {
    console.log("They said yes!");
    document.querySelector("#landingPage").style.opacity = "0%";
    document.querySelector("#questionButton").style.opacity = "100%";
    document.querySelector("#questionButton").style.visibility = "visible";
    document.querySelector("#sayYes:hover").style.cursor = "default";
    let firstQuestion = document.querySelector("#questionValue");
    firstQuestion.innerHTML += rootQ.question;
    let rootA = document.querySelector("#a");
    rootA.innerHTML += rootQ.a;
    let rootB = document.querySelector("#b");
    rootB.innerHTML += rootQ.b;
    let rootC = document.querySelector("#c");
    rootC.innerHTML += rootQ.c;
    document.querySelector("#d").style.visibility = "hidden";
    let comment = document.querySelector("#comment");
    comment.innerHTML += rootQ.comment;

};

let path = [];
function askQuestion(answer, nextQ = rootQ) {        
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
        path.push(nextQ.getName);
        console.log(path);
        console.log(nextQ.question);
        console.log(nextQ.a);
        console.log(nextQ.b);
        console.log("This is ask Question.")
        
        if (answer === "a") {
            console.log("It's a!");
            rootQ = nextQ.children.a;
        } else if (answer === "b") {
            console.log("It's b!");
            rootQ = nextQ.children.b;
        } else if (answer === "c") {
            console.log("It's c!");
            rootQ = nextQ.children.c;
        } else if (answer === "d") {
            console.log("It's d!");
            rootQ = nextQ.children.d;
        };

        if (nextQ.children.c) {
            console.log(nextQ.c);
        };
        if (nextQ.children.d) {
            console.log(nextQ.d);
        };

        //girl, you've come so far. you can do this. you can figure this shit out. 
        //tomorrow.
        currentQuestion = document.querySelector("#questionValue");
        nextQ.question = currentQuestion.innerHTML;

        let optionA = document.querySelector("#a");
        let optionB = document.querySelector("#b");
        let optionC = document.querySelector("#c");
        let optionD = document.querySelector("#d");

        if (nextQ.a != undefined) {
            optionA.innerHTML = nextQ.a;
        }
        if (nextQ.b != undefined) {
            optionB.innerHTML = nextQ.b;
        }
        if (nextQ.c != undefined) {
            optionC.style.visibility = "visible";
            optionC.style.opacity = "100%";
            optionC.style.width = "auto";
            optionC.innerHTML = nextQ.c;

        } else if (nextQ.c == undefined) {
            optionC.style.visibility = "hidden";
            optionC.style.opacity = "0%";
            optionC.style.width = "0%";
        }
        if (nextQ.d != undefined) {
            optionD.style.visibility = "visible";
            optionD.style.opacity = "100%";
            optionD.style.width = "auto";
            optionD.innerHTML = nextQ.d;

        } else if (nextQ.d == undefined) {
            optionD.style.visibility = "hidden";
            optionD.style.opacity = "0%";
            optionD.style.width = "0%";
        }
    };
    };
