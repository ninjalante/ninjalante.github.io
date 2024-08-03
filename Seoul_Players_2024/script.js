window.onload = function(){
    let readMore = document.getElementById('read-more');

    readMore.addEventListener('click', function(e){
     smoothScroll({toElement: document.getElementById('myDiv'), duration: 1300 });
});
}
/*
let pageTitle = document.getElementById("main-title");
let pageContent = document.getElementById("main-content");
function transition(page) {
    console.log("Prepare to be boarded!");
    pageTitle.style.visibility = "hidden";
    pageContent.style.visibility = "hidden";
    let mainTitle = page.document.getElementById("main-title");
    let mainContent = page.document.getElementById("main-content");
    mainTitle.style.visibility = "visible";
    mainContent.style.visibility = "visible";
};
*/
