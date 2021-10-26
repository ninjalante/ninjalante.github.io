function clickTheButton() { 
    document.querySelector("#landingPage").style.opacity = "0%";
    document.querySelector("#movieChooser").style.opacity = "100%";
    document.querySelector("#movieChooser").style.visibility = "visible";
    
   };

function choosePerfectMovie() {
  let perfectMovies = [];
  for (i = 0; i < XmasMovies.length; i++){
    if (XmasMovies[i].myScore == 100) {
     perfectMovies.push(XmasMovies[i].title);
      }
  }
  let movieOutput = document.querySelector("#movieRecommendations");
  console.log(perfectMovies);
  for (let movie of perfectMovies) {
      movieOutput.innerHTML += '<h1>' + movie + '</h1>'
    }
    document.querySelector("#movieChooser").style.opacity = "0%";
    document.querySelector("#movieChooser").style.visibility = "hidden";
};

let booleanChoices = [];

function chooseColor() {
  booleanChoices.push(document.querySelector("#inColor").value);
  let snark = document.querySelector("#snark")
     snark.innerHTML += '<em> Seriously?</em>'
}

function chooseRomance() {
  booleanChoices.push(document.querySelector("#romance").value);
};

function chooseMusical() {
  booleanChoices.push(document.querySelector("#musical").value);
};

function chooseMistakenId() {
  booleanChoices.push(document.querySelector("#mistakenId").value);
};

function chooseInn() {
  booleanChoices.push(document.querySelector("#inn").value);
};

function chooseRoyal() {
  booleanChoices.push(document.querySelector("#royal").value);
};

function chooseFamily() {
  booleanChoices.push(document.querySelector("#family").value);
};

function chooseCountry() {
  booleanChoices.push(document.querySelector("#country").value);
};

function chooseCorp() {
  booleanChoices.push(document.querySelector("#corp").value);
};

function chooseWish() {
  booleanChoices.push(document.querySelector("#wish").value);
};

function chooseSanta() {
  booleanChoices.push(document.querySelector("#santa").value);
};

function chooseAdaptation() {
  booleanChoices.push(document.querySelector("#adaptation").value);
};

function chooseFresh() {
  booleanChoices.push(document.querySelector("#freshStart").value);
}

function choosePrecociousChild() {
  booleanChoices.push(document.querySelector("#precocious").value);
}

function chooseBaker() {
  booleanChoices.push(document.querySelector("#baker").value);
}

function chooseDeadParent() {
  booleanChoices.push(document.querySelector("#deadParent").value);
}

function chooseFamousActor() {
  booleanChoices.push(document.querySelector("#famousActor").value);
}

function chooseChildStar() {
  booleanChoices.push(document.querySelector("#childStar").value);
}

function chooseFamilyFriendly() {
  booleanChoices.push(document.querySelector("#familyFriendly").value);
}

function choosePilf() {
  booleanChoices.push(document.querySelector("#pilf").value);
}

//final function for button

function chooseMovie() {
  //make sure each element is only listed once. this part is done!
  let chosenElementsUniq = [];
  booleanChoices.forEach((e) => {
        if(!chosenElementsUniq.includes(e)) {
              chosenElementsUniq.push(e);
            }
        }
     );
  //find the elements in the XmasMovies array
 let partialMatches = [];
 let summaries = [];
 let myScores = [];
 let myComments = [];
 //test code in console
 console.log(partialMatches)
 console.log(chosenElementsUniq);
 
 for (i = 0; i < XmasMovies.length; i++){
   if (XmasMovies[i].romance == true && chosenElementsUniq.includes("romance")) {
    partialMatches.push(XmasMovies[i].title);
    summaries.push(XmasMovies[i].summary);
    myScores.push(XmasMovies[i].myScore);
    myComments.push(XmasMovies[i].comments);
     
    }
   if (XmasMovies[i].mistakenIdentity == true && chosenElementsUniq.includes("mistakenId")) {
     partialMatches.push(XmasMovies[i].title);
     summaries.push(XmasMovies[i].summary);
     myScores.push(XmasMovies[i].myScore);
     myComments.push(XmasMovies[i].comments);
   }
   if (XmasMovies[i].realSanta == true && chosenElementsUniq.includes("santa")) {
     partialMatches.push(XmasMovies[i].title);
     summaries.push(XmasMovies[i].summary);
     myScores.push(XmasMovies[i].myScore);
     myComments.push(XmasMovies[i].comments);
   }
   if (XmasMovies[i].musical == true && chosenElementsUniq.includes("musical")) {
     partialMatches.push(XmasMovies[i].title);
     summaries.push(XmasMovies[i].summary);
     myScores.push(XmasMovies[i].myScore);
     myComments.push(XmasMovies[i].comments);
   }
   if (XmasMovies[i].charmingInn == true && chosenElementsUniq.includes("inn")) {
     partialMatches.push(XmasMovies[i].title);
     summaries.push(XmasMovies[i].summary);
     myScores.push(XmasMovies[i].myScore);
     myComments.push(XmasMovies[i].comments);
   }
   if (XmasMovies[i].royalFairyTale == true && chosenElementsUniq.includes("royal")) {
     partialMatches.push(XmasMovies[i].title);
     summaries.push(XmasMovies[i].summary);
     myScores.push(XmasMovies[i].myScore);
     myComments.push(XmasMovies[i].comments);
   }
   if (XmasMovies[i].familyIsNumber1 == true && chosenElementsUniq.includes("family")) {
     partialMatches.push(XmasMovies[i].title);
     summaries.push(XmasMovies[i].summary);
     myScores.push(XmasMovies[i].myScore);
     myComments.push(XmasMovies[i].comments);
   }
   if (XmasMovies[i].countryVsCity == true && chosenElementsUniq.includes("country")) {
     partialMatches.push(XmasMovies[i].title);
     summaries.push(XmasMovies[i].summary);
     myScores.push(XmasMovies[i].myScore);
     myComments.push(XmasMovies[i].comments);
   }
   if (XmasMovies[i].corporateLemming == true && chosenElementsUniq.includes("corp")) {
     partialMatches.push(XmasMovies[i].title);
     summaries.push(XmasMovies[i].summary);
     myScores.push(XmasMovies[i].myScore);
     myComments.push(XmasMovies[i].comments);
   }
   if (XmasMovies[i].wishFulfillment == true && chosenElementsUniq.includes("wish")) {
     partialMatches.push(XmasMovies[i].title);
     summaries.push(XmasMovies[i].summary);
     myScores.push(XmasMovies[i].myScore);
     myComments.push(XmasMovies[i].comments);
   }
   if (XmasMovies[i].adaptation == true && chosenElementsUniq.includes("adaptation")) {
     partialMatches.push(XmasMovies[i].title);
     summaries.push(XmasMovies[i].summary);
     myScores.push(XmasMovies[i].myScore);
     myComments.push(XmasMovies[i].comments);
   }
   if (XmasMovies[i].freshStart == true && chosenElementsUniq.includes("freshStart")) {
     partialMatches.push(XmasMovies[i].title);
     summaries.push(XmasMovies[i].summary);
     myScores.push(XmasMovies[i].myScore);
     myComments.push(XmasMovies[i].comments);
   }
   if (XmasMovies[i].precociousChild == true && chosenElementsUniq.includes("precocious")) {
     partialMatches.push(XmasMovies[i].title);
     summaries.push(XmasMovies[i].summary);
     myScores.push(XmasMovies[i].myScore);
     myComments.push(XmasMovies[i].comments);
   }
   if (XmasMovies[i].charmingBaker == true && chosenElementsUniq.includes("baker")) {
     partialMatches.push(XmasMovies[i].title);
     summaries.push(XmasMovies[i].summary);
     myScores.push(XmasMovies[i].myScore);
     myComments.push(XmasMovies[i].comments);
   }
   if (XmasMovies[i].deadParent == true && chosenElementsUniq.includes("deadParent")) {
     partialMatches.push(XmasMovies[i].title);
     summaries.push(XmasMovies[i].summary);
     myScores.push(XmasMovies[i].myScore);
     myComments.push(XmasMovies[i].comments);
   }
   if (XmasMovies[i].famousActor == true && chosenElementsUniq.includes("famousActor")) {
     partialMatches.push(XmasMovies[i].title);
     summaries.push(XmasMovies[i].summary);
     myScores.push(XmasMovies[i].myScore);
     myComments.push(XmasMovies[i].comments);
   }
   if (XmasMovies[i].childActor == true && chosenElementsUniq.includes("childStar")) {
     partialMatches.push(XmasMovies[i].title);
     summaries.push(XmasMovies[i].summary);
     myScores.push(XmasMovies[i].myScore);
     myComments.push(XmasMovies[i].comments);
   }
   if (XmasMovies[i].familyFriendly == true && chosenElementsUniq.includes("familyFriendly")) {
     partialMatches.push(XmasMovies[i].title);
     summaries.push(XmasMovies[i].summary);
     myScores.push(XmasMovies[i].myScore);
     myComments.push(XmasMovies[i].comments);
   }
   if (XmasMovies[i].pilf == true && chosenElementsUniq.includes("pilf")) {
     partialMatches.push(XmasMovies[i].title);
     summaries.push(XmasMovies[i].summary);
     myScores.push(XmasMovies[i].myScore);
     myComments.push(XmasMovies[i].comments);
   }
   if (XmasMovies[i].inColor == true && chosenElementsUniq.includes("inColor")) {
     partialMatches.push(XmasMovies[i].title);
     summaries.push(XmasMovies[i].summary);
     myScores.push(XmasMovies[i].myScore);
     myComments.push(XmasMovies[i].comments);
   }
 }
  
//filter movie titles so that only the ones that are mentioned as many times as booleanChoices.length are published
let finalChoices = [];
  
 //publish movie titles 
 let movieOutput = document.querySelector("#movieRecommendations");
 document.querySelector("#movieChooser").style.opacity = "0%";
 document.querySelector("#movieChooser").style.visibility = "hidden";
 if (partialMatches.length == 0) {
  movieOutput.innerHTML += '<h1>There is no movie that matches your search results. Please try again.</h1>'
} else {
 for (let movie of partialMatches) {
  movieOutput.innerHTML += '<h1>' + movie + '</h1>'
  }
 }
}
   
//publish some details too?
//have those pop up when you hover over the title?

 
//end of the movie chooser function
