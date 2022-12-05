/*import movie objects*/


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

  let intro = document.querySelector("#introToMovies");

  console.log(perfectMovies);//check code in console
  introToMovies.innerHTML += '<h1>These movies all get a perfect score in my book.</h1>';
  for (let movie of perfectMovies) {
      movieOutput.innerHTML += '<h1>' + movie + '</h1>';
    }
};
//---------recommend one of the WORST movies------------------

let worstMovies = [];
for (i = 0; i < XmasMovies.length; i++){
  if (XmasMovies[i].myScore < 60) {
    worstMovies.push(XmasMovies[i].title);
  }
}

function chooseWorstMovie(){
 
    console.log(worstMovies);
    
    let numOfMovies = worstMovies.length;
    
    let number = Math.floor(Math.random() * numOfMovies);

    let worstMovie = worstMovies[number];

    document.querySelector("#movieChooser").style.opacity = "0%";
    document.querySelector("#movieChooser").style.visibility = "hidden";
    document.querySelector("#movieRec").style.opacity = "100%";
    document.querySelector("#movieRec").style.visibility = "visible";
    document.querySelector("#worstButton").style.opacity = "100%";
    document.querySelector("#worstButton").style.visibility = "visible";

  let movieOutput = document.querySelector("#movieRecommendations");

  let intro = document.querySelector("#introToMovies");

  console.log(worstMovie);//check code in console
  intro.innerHTML += '<h1>Don\'t say I didn\'t warn you...</h1>';
  movieOutput.innerHTML += '<h1> "' + worstMovie + '" is really one of the worst I\'ve ever seen.</h1>'
  worstMovies.splice(number, 1);
    
}

function oneMore() {
  if (worstMovies.length > 0) {
    console.log(worstMovies);
    
    let numOfMovies = worstMovies.length;
    
    let number = Math.floor(Math.random() * numOfMovies);

    let worstMovie = worstMovies[number];
    //make sure the movies don't repeat
  let movieOutput = document.querySelector("#movieRecommendations");
  movieOutput.innerHTML += '<h1>..."' + worstMovie + '"?</h1>'
  worstMovies.splice(number, 1);
  } else {
    let movieOutput = document.querySelector("#movieRecommendations");
    movieOutput.innerHTML += '<h1>That\'s all I got, girl. Pick something, for crying out loud</h1>'
  };
}
//end of perfect/worst movie function 

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
  booleanChoices.push(document.querySelector("#charmingInn").value);
};

function chooseRoyal() {
  booleanChoices.push(document.querySelector("#royal").value);
};

function chooseFamily() {
  booleanChoices.push(document.querySelector("#familyIsNumber1").value);
};

function chooseCountry() {
  booleanChoices.push(document.querySelector("#country").value);
};

function chooseMagic() {
  booleanChoices.push(document.querySelector("#magic").value);
};

function chooseFamousActor() {
  booleanChoices.push(document.querySelector("#famousActor").value);
}

function chooseChildStar() {
  booleanChoices.push(document.querySelector("#childStar").value);
}

function chooseFamilyFriendly() {
  booleanChoices.push(document.querySelector("#familyFriendly").value);
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

 //test code in console
 console.log(chosenElementsUniq);
 //push titles into "partialMatches", same number of times they have been chosen
 let partialMatches = [];

 for (i = 0; i < XmasMovies.length; i++){
   if (XmasMovies[i].romance == true && chosenElementsUniq.includes("romance")) {
    partialMatches.push(XmasMovies[i].title);  
    }
   if (XmasMovies[i].mistakenIdentity == true && chosenElementsUniq.includes("mistakenId")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].realMagic == true && chosenElementsUniq.includes("magic")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].musical == true && chosenElementsUniq.includes("musical")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].charmingInn == true && chosenElementsUniq.includes("charmingInn")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].royalFairyTale == true && chosenElementsUniq.includes("royal")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].familyIsNumber1 == true && chosenElementsUniq.includes("familyIsNumber1")) {
     partialMatches.push(XmasMovies[i].title);
     
   }
   if (XmasMovies[i].countryVsCity == true && chosenElementsUniq.includes("country")) {
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
 };
  
//filter movie titles so that only the ones that are mentioned as many times as booleanChoices.length are published
//This is the tricky part. We need: if partialMatches.count("title") === booleanChoices.length { finalChoices.push("title")}

//what if the elements are counted first, before the movies are pushed? wouldn't that save time and space?
let finalChoices = [];

//-------------- get the final recommendations from the partial matches arrays -------------
console.log(partialMatches);
  
  let magicNumber = chosenElementsUniq.length;
  
  const counts = {};
  partialMatches.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });
  console.log(counts)
  
  let movieNumberCounts = Object.entries(counts);
  console.log(movieNumberCounts);
  
  for (let m = 0; m < movieNumberCounts.length; m++) {
    if (movieNumberCounts[m][1] === magicNumber) {
      finalChoices.push(movieNumberCounts[m][0]);
    };
  };
  
  console.log(finalChoices);

 
 
  document.querySelector("#movieChooser").style.opacity = "0%";
  document.querySelector("#movieChooser").style.visibility = "hidden";
  document.querySelector("#movieRec").style.opacity = "100%";
  document.querySelector("#movieRec").style.visibility = "visible";

  let movieOutput = document.querySelector("#movieRecommendations");
  let intro = document.querySelector("#introToMovies");

 //------when you're done this needs to change to finalChoices---------
 if (finalChoices.length === 0) {
  intro.innerHTML += '<h1>There is no movie that matches your search results.</h1><p>Try choosing fewer options!</p>'
} else {
  intro.innerHTML += '<h1>These movies are sure to fill you with holiday cheer!</h1>';
  movieOutput.innerHTML += '<h2>Your choices: ' + chosenElementsUniq + '</h2>';
 for (let movie of finalChoices) {
  movieOutput.innerHTML += '<h1>' + movie + '</h1>';
  }
 }
 //___________maybe i should define the final movie chooser function outside this function and call it inside?____________//

   
//publish some details too?
//have those pop up when you hover over the title?
}
//end of movie chooser function
