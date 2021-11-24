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
 let romantic = [];
 let mistakenic = [];
 let santaic = [];
 let musically = [];
 let charminn = [];
 let princely = [];
 let familyy = [];
 let countryy = [];
 let corpinc = [];
 let iwish = [];
 let adapt = [];
 let anustart = [];
 let famous = [];
 let child = [];
 let allages = [];
 let pilfme = [];

 
 //test code in console
 console.log(chosenElementsUniq);
 //push titles into "partialMatches", same number of times they have been chosen
 for (i = 0; i < XmasMovies.length; i++){
   if (XmasMovies[i].romance == true && chosenElementsUniq.includes("romance")) {
    romantic.push(XmasMovies[i].title);
    
     
    }
   if (XmasMovies[i].mistakenIdentity == true && chosenElementsUniq.includes("mistakenId")) {
     mistakenic.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].realSanta == true && chosenElementsUniq.includes("santa")) {
     santaic.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].musical == true && chosenElementsUniq.includes("musical")) {
     musically.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].charmingInn == true && chosenElementsUniq.includes("inn")) {
     charminn.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].royalFairyTale == true && chosenElementsUniq.includes("royal")) {
     princely.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].familyIsNumber1 == true && chosenElementsUniq.includes("family")) {
     familyy.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].countryVsCity == true && chosenElementsUniq.includes("country")) {
     countryy.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].corporateLemming == true && chosenElementsUniq.includes("corp")) {
     corpinc.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].wishFulfillment == true && chosenElementsUniq.includes("wish")) {
     iwish.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].adaptation == true && chosenElementsUniq.includes("adaptation")) {
     adapt.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].freshStart == true && chosenElementsUniq.includes("freshStart")) {
     anustart.push(XmasMovies[i].title);
     
   }
  
   if (XmasMovies[i].famousActor == true && chosenElementsUniq.includes("famousActor")) {
     famous.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].childActor == true && chosenElementsUniq.includes("childStar")) {
     child.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].familyFriendly == true && chosenElementsUniq.includes("familyFriendly")) {
     allages.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].pilf == true && chosenElementsUniq.includes("pilf")) {
     pilfme.push(XmasMovies[i].title);
     
   }
 };
  
//filter movie titles so that only the ones that are mentioned as many times as booleanChoices.length are published
//This is the tricky part. We need: if partialMatches.count("title") === booleanChoices.length { finalChoices.push("title")}
let finalChoices = [];

//-------------- get the final recommendations from the partial matches arrays -------------

let allMovies = [romantic, mistakenic, santaic, musically, charminn, princely, familyy, countryy, corpinc, iwish, adapt, anustart, famous, child, allages, pilfme];
//remove categories from array if they're empty?

for (let category of allMovies) {
  for (let i = 0; i < category.length; i++){
    console.log(category[i]);
    for (let movie in category) {
      if (category[i] === movie) {
        finalChoices.push(category[i]);
      }
     }
    };
  };
//^^ this doesn't quite work yet. we'll get there  
console.log(allMovies);
console.log(finalChoices);
  
 //publish movie titles 
 
 
  document.querySelector("#movieChooser").style.opacity = "0%";
  document.querySelector("#movieChooser").style.visibility = "hidden";
  document.querySelector("#movieRec").style.opacity = "100%";
  document.querySelector("#movieRec").style.visibility = "visible";

  let movieOutput = document.querySelector("#movieRecommendations");

 //------when you're done this needs to change to finalChoices---------
 if (finalChoices.length === 0) {
  movieOutput.innerHTML += '<h1>There is no movie that matches your search results.</h1><p>Maybe try choosing fewer options. Or, follow <a href="./allmovies.html">this link</a> to see all movies in the database.</p>'
} else {
 for (let movie of finalChoices) {
  movieOutput.innerHTML += '<h1>' + movie + '</h1>'
  }
 }
 //--------- END of the movie chooser function: final curly brace below ------------ END OF FUNCTION END OF FUNCTION
 //___________maybe i should define the final movie chooser function outside this function and call it inside?____________//

   
//publish some details too?
//have those pop up when you hover over the title?
}
