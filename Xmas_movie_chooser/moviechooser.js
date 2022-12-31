
//click the button on the landing page to open the quiz
 

function clickTheButton() { 
    document.querySelector("#landingPage").style.opacity = "0%";
    document.querySelector("#movieChooser").style.opacity = "100%";
    document.querySelector("#movieChooser").style.visibility = "visible";
    
   };

// -------------------- choose a movie with a perfect score only -----------------
function choosePerfectMovie() {
  let perfectMovies = [];
  for (let i = 0; i < XmasMovies.length; i++){
    if (XmasMovies[i].myScore == 100) {
     perfectMovies.push(XmasMovies[i]);
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
          movieOutput.innerHTML += '<h1>' + movie.title + '</h1>';
          movieOutput.innerHTML += '<h2>My score: ' + movie.myScore + '/100</h2>';
          movieOutput.innerHTML += '<h2>Summary: ' + movie.summary + '</h2>';
        
      } 
    };
//---------recommend one of the WORST movies------------------

let worstMovies = [];
for (let i = 0; i < XmasMovies.length; i++){
  if (XmasMovies[i].myScore < 60) {
    worstMovies.push(XmasMovies[i]);
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

  console.log(worstMovie.title);//check code in console
  intro.innerHTML += '<h1>Don\'t say I didn\'t warn you...</h1>';
  movieOutput.innerHTML += '<h1> "' + worstMovie.title + '" is really one of the worst I\'ve ever seen.</h1>'
  movieOutput.innerHTML += '<h2>My score: ' + worstMovie.myScore + '/100</h2>';
  movieOutput.innerHTML += '<h2>Summary: ' + worstMovie.summary + '</h2>';

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
  movieOutput.innerHTML += '<h1>..."' + worstMovie.title + '"?</h1>'
  movieOutput.innerHTML += '<h2>My score: ' + worstMovie.myScore + '/100</h2>';
  movieOutput.innerHTML += '<h2>Summary: ' + worstMovie.summary + '</h2>';
  worstMovies.splice(number, 1);
  } else {
    let movieOutput = document.querySelector("#movieRecommendations");
    movieOutput.innerHTML += '<h1>That\'s all I got, girl. Pick something, for crying out loud</h1>'
  };
}
//end of perfect/worst movie function 



//new code 12/14/2022
//---------------- choosing elements ----------------------
//make an array for the choices

let chosenElements = [];

//choosing the checkbox adds that element to the chosenElements array

function chooseElement(elementId) {
  let element = document.querySelector(elementId).name;
  if (!chosenElements.includes(element)) {
  chosenElements.push(element);
  console.log(chosenElements);
  };
};


//create an array to hold the final movies
let finalMovies = [];


function chooseMovie(){
  if (chosenElements.length === 0) {
    window.alert("Choose some elements first!");
    return;
  } else {
    for (let m = 0; m < XmasMovies.length; m++) {
      let count = 0;
      for (let e = 0; e < chosenElements.length; e++) {
        if (XmasMovies[m][chosenElements[e]] === true) {
          count += 1;
          console.log(XmasMovies[m].title)
          console.log(count);
        };
      if (count === chosenElements.length) {
        finalMovies.push(XmasMovies[m]);
       };
      };
    };
    console.log(finalMovies);
  };
  document.querySelector("#movieChooser").style.opacity = "0%";
  document.querySelector("#movieChooser").style.visibility = "hidden";
  document.querySelector("#movieRec").style.opacity = "100%";
  document.querySelector("#movieRec").style.visibility = "visible";

  let movieOutput = document.querySelector("#movieRecommendations");
  let intro = document.querySelector("#introToMovies");

 if (finalMovies.length === 0) {
  intro.innerHTML += '<h1>There is no movie that matches your search results.</h1><h2>Try refining your search.</h2>'
  intro.innerHTML += '<h2>Or, view <a href="./allmovies.html">all movies</a> and pick one that looks good.</h2>'
  //put the buttons here, but they need to be in their own container.
} else {
  intro.innerHTML += '<h1>These movies are sure to fill you with holiday cheer!</h1>';
  
  movieOutput.innerHTML += '<h2>Your choices: ' + chosenElements + '</h2>';
//output movie title and details
    for (let movie of finalMovies){
      
          movieOutput.innerHTML += '<h1>' + movie.title + '</h1>';
          movieOutput.innerHTML += '<h2>My score: ' + movie.myScore + '/100</h2>';
          movieOutput.innerHTML += '<h2>Summary: ' + movie.summary + '</h2>';
    } 
 } 
}
//end of movie chooser function
