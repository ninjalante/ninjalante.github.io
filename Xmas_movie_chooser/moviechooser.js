//click the button on the landing page to open the quiz
function clickTheButton() { 
    document.querySelector("#landingPage").style.opacity = "0%";
    document.querySelector("#movieChooser").style.opacity = "100%";
    document.querySelector("#movieChooser").style.visibility = "visible";
    
   };

// -------------------- choose a movie with a perfect score only -----------------
function choosePerfectMovie() {
  let perfectMovies = [];
  for (i = 0; i < XmasMovies.length; i++){
    if (XmasMovies[i].myScore == 100) {
     perfectMovies.push(XmasMovies[i].title);
      }
  }
  document.querySelector("#movieChooser").style.opacity = "0%";
  document.querySelector("#movieChooser").style.visibility = "hidden";
  document.querySelector("#movieRec").style.opacity = "100%";
  document.querySelector("#movieRec").style.visibility = "visible";
  
  let movieOutput = document.querySelector("#movieRecommendations");

  console.log(perfectMovies);//check code in console
  for (let movie of perfectMovies) {
      movieOutput.innerHTML += '<h1>' + movie + '</h1>'
    }
};
//end of perfect movie function 

//---------------- choosing elements ----------------------
//make an array for the choices
let booleanChoices = [];

//make a function for each choice; will push the movie element to the array

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

//------------- choosing movie recommendations -------------

function chooseMovie() {
  //make sure each element is only listed once. this part is done!
  let chosenElementsUniq = [];
  booleanChoices.forEach((e) => {
        if(!chosenElementsUniq.includes(e)) {
              chosenElementsUniq.push(e);
            }
        }
     );
  //make arrays for movie scores, titles, etc.
 let partialMatches = [];
 
 //test code in console
 console.log(partialMatches)
 console.log(chosenElementsUniq);
 //push titles into "partialMatches", same number of times they have been chosen
 for (i = 0; i < XmasMovies.length; i++){
   if (XmasMovies[i].romance == true && chosenElementsUniq.includes("romance")) {
    partialMatches.push(XmasMovies[i].title);
    
     
    }
   if (XmasMovies[i].mistakenIdentity == true && chosenElementsUniq.includes("mistakenId")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].realSanta == true && chosenElementsUniq.includes("santa")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].musical == true && chosenElementsUniq.includes("musical")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].charmingInn == true && chosenElementsUniq.includes("inn")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].royalFairyTale == true && chosenElementsUniq.includes("royal")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].familyIsNumber1 == true && chosenElementsUniq.includes("family")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].countryVsCity == true && chosenElementsUniq.includes("country")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].corporateLemming == true && chosenElementsUniq.includes("corp")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].wishFulfillment == true && chosenElementsUniq.includes("wish")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].adaptation == true && chosenElementsUniq.includes("adaptation")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].freshStart == true && chosenElementsUniq.includes("freshStart")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
  
   if (XmasMovies[i].famousActor == true && chosenElementsUniq.includes("famousActor")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].childActor == true && chosenElementsUniq.includes("childStar")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].familyFriendly == true && chosenElementsUniq.includes("familyFriendly")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].pilf == true && chosenElementsUniq.includes("pilf")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
 }
  
//filter movie titles so that only the ones that are mentioned as many times as booleanChoices.length are published
//This is the tricky part. We need: if partialMatches.count("title") === booleanChoices.length { finalChoices.push("title")}
let finalChoices = [];

//-------------- get the final recommendations from the partial matches array -------------



  
 //publish movie titles 
 
 
  document.querySelector("#movieChooser").style.opacity = "0%";
  document.querySelector("#movieChooser").style.visibility = "hidden";
  document.querySelector("#movieRec").style.opacity = "100%";
  document.querySelector("#movieRec").style.visibility = "visible";

  let movieOutput = document.querySelector("#movieRecommendations");

 //------when you're done this needs to change to finalChoices---------
 if (partialMatches.length == 0) {
  movieOutput.innerHTML += '<h1>There is no movie that matches your search results. Please try again.</h1>'
} else {
 for (let movie of partialMatches) {
  movieOutput.innerHTML += '<h1>' + movie + '</h1>'
  }
 }
 //--------- END of the movie chooser function: final curly brace below ------------ END OF FUNCTION END OF FUNCTION
}
   
//publish some details too?
//have those pop up when you hover over the title?
