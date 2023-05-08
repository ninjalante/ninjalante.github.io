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

function startOver() {
    document.location.reload();
    
};

let path = [];

function askQuestion(answer) {
    console.log(rootQ);
    //THIS WAS THE PROBLEM. I HAD TO CHANGE WHAT ROOTQ WAS **FIRST**.
    rootQ = rootQ.children[answer];    
    if (rootQ instanceof Question) { 
        console.log("The answer...")
        
        //add path name to path
        path.push(rootQ.name); //

        console.log("...it's " + answer);
        
        console.log(rootQ);
        let nextQuestion = document.querySelector("#questionValue");
        nextQuestion.innerHTML = rootQ.question; //
        console.log(nextQuestion);
        ////////you're here, there's nothing I fear
        //you can do this. you can figure this shit out. 
        //you did it. it just took you two months.
        
        comment.style.visibility = "hidden";
        comment.style.opacity = "0%";
        comment.style.width = "0%";

        let optionA = document.querySelector("#a");
        let optionB = document.querySelector("#b");
        let optionC = document.querySelector("#c");
        let optionD = document.querySelector("#d");

        optionA.innerHTML = rootQ.a; ///
        optionB.innerHTML = rootQ.b; /// 

        if (rootQ.c !== undefined) { /////
            optionC.style.visibility = "visible";
            optionC.style.opacity = "100%";
            optionC.style.width = "auto";
            optionC.innerHTML = rootQ.c; ////

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

        } else if (rootQ.d === undefined) { ////
            optionD.style.visibility = "hidden";
            optionD.style.opacity = "0%";
            optionD.style.width = "0%";
        };

    } else {
        
        console.log("wedding movie detected!")
        path.push(rootQ.name); 
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

        let pathLook = document.querySelector("#path");
        for (let i = 0; i < path.length; i++) {
            pathLook.innerHTML += path[i] + " >>> ";
        };

        let movieRec = document.querySelector("#movieRec");
        movieRec.innerHTML += rootQ.returnDeets(); //


        return rootQ.movie; //
        
     };
    console.log("Outside if statements:")
    console.log("Root Q: " + rootQ.name);
    console.log(rootQ instanceof WeddingMovie);
    console.log(path);
};
