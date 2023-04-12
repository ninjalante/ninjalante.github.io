
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
        console.log("wedding movie detected!")
        path.push(rootQ.name); //
        console.log(path);


        let disappear = document.querySelector("#questionButton");
        disappear.style.visibility = "hidden";
        disappear.style.opacity = "0%";
        disappear.style.width = "0%";
        comment.style.visibility = "hidden";
        comment.style.opacity = "0%";
        comment.style.width = "0%";

        let recommendation = document.querySelector("#recommendation");
        recommendation.style.visibility = "visible";
        recommendation.style.opacity = "100%";
        recommendation.style.width = "auto";

        let announcement = document.querySelector("#announcement");
        announcement.innerHTML += "I have the perfect movie for you!";

        let movieRec = document.querySelector("#movieRec");
        movieRec.innerHTML += rootQ.returnDeets(); //

        let footer = document.querySelector("footer");
        footer.style.visibility = "visible";
        footer.style.opacity = "100%";
        footer.style.width = "auto";

        return rootQ.movie; //

    } 
    
    if (nextQ instanceof Question) {

        path.push(rootQ.name);//
        //rootQ name has to go BEFORE the root is changed because it's added after the fact in the next node
        console.log("The answer...")
        rootQ = rootQ.children[answer]; //
        console.log("...it's " + answer);
        //This section of code runs again even after the rootQ becomes a movie. 
        console.log(rootQ instanceof Question);
        let nextQuestion = document.querySelector("#questionValue");
        nextQuestion.innerHTML = rootQ.question; //
        
        console.log(rootQ.name); //

        //you can do this. you can figure this shit out. 
    
        let optionA = document.querySelector("#a");
        let optionB = document.querySelector("#b");
        let optionC = document.querySelector("#c");
        let optionD = document.querySelector("#d");
//
///THIS is where the problem is. we only want this to run if it's a Question.
///
        
        if (rootQ.a !== undefined) { ///
            optionA.innerHTML = rootQ.a; ///
            //console.log(rootQ.children.a); //
            console.log("inside rootQ a if statement");
        }
        
        if (rootQ.b !== undefined) { //
            optionB.innerHTML = rootQ.b; ///
            console.log(rootQ.children.b); ///
        }
        if (rootQ.c !== undefined) { /////
            optionC.style.visibility = "visible";
            optionC.style.opacity = "100%";
            optionC.style.width = "auto";
            optionC.innerHTML = rootQ.c; ////
            console.log(rootQ.children.c); ////

        } else if (rootQ.c === undefined) { ///
            optionC.style.visibility = "hidden";
            optionC.style.opacity = "0%";
            optionC.style.width = "0%";
        }
        if (rootQ.d !== undefined) { ///
            optionD.style.visibility = "visible";
            optionD.style.opacity = "100%";
            optionD.style.width = "auto";
            optionD.innerHTML = rootQ.d; /////
            console.log(rootQ.children.d); ///

        } else if (rootQ.d === undefined) { ////
            optionD.style.visibility = "hidden";
            optionD.style.opacity = "0%";
            optionD.style.width = "0%";

        } 
    }
    console.log("outside if statement");
};
