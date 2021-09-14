function refreshPage() {
     location.reload();
};

function pickSurprisingMovie() {
    let surprise = Math.floor(Math.random() * 20);
    let movie;
    switch (surprise) {
        case 0:
            movie = 'No Country for Old Men';
            break; //I also want to print runtime, the poster, and the director
        case 1:
            movie = 'Gravity';
            break;
        case 2:
            movie = 'Bandersnatch';
            break;
        case 3:
            movie = 'The Martian';
            break;
        case 4:
            movie = 'Moon';
            break;
        case 5:
            movie = 'Forbidden Planet';
            break;
        case 6:
            movie = 'Brazil';
            break;
        case 7:
            movie = '28 Days Later';
            break;
        case 8: 
            movie = 'The Shootist';
            break;
        case 9:
            movie = 'The Good, the Bad, and the Ugly';
            break;
        case 10:
            movie = 'Jane Got a Gun';
            break;
        case 11:
            movie = 'The Shining';
            break;
        case 12:
            movie = 'Welcome to Collinwood';
            break;
        case 13:
            movie = 'The Ballad of Buster Scruggs';
            break;
        case 14:
            movie = 'Rambo: First Blood';
            break;
        case 15:
            movie = 'The Midnight Sky';
            break;
        case 16:
            movie = 'Arrival';
            break;
        case 17:
            movie = 'A Quiet Place';
            break;
        case 18:
            movie = 'Brightburn';
            break;
        case 19:
            movie = 'Love and Monsters';
            break;
    }
    const should = ['You should watch ', 'Have you seen ', 'What about ', 'Let\'s watch ', 'How \'bout '];
    const s = Math.floor(Math.random() * should.length)
    movie = movie.italics();
    document.getElementById('surpriseMe').innerHTML = `${should[s]}${movie}<br><small>Choose again</small>`;
    //make the movie show up on the screen
    //keep working on it. 
    switch(movie) {
        case 'No Country for Old Men':
            function movieAppears () {
            let poster = document.createElement('img');
            poster.id = 'noCountryPoster';
            poster.innerHTML = './noCountryPoster';
            document.getElementById('answer').appendChild(poster); 
            let post = document.createElement('h3');
            post.id = 'noCountryPost';
            post.innerHTML = 'One of the strongest Coen brothers outings in a decade,\
            this slow burn earned Javier Bardem multiple roles as soft-spoken weirdos.';
            document.getElementById('answer').appendChild(post);
            }
            break;
    }
};

function pickNostalgicMovie() {
    let surprise = Math.floor(Math.random() * 15);
    let movie;
    switch (surprise) {
        case 0:
            movie = 'Honey, I Shrunk the Kids';
            break; //I also want to print runtime, the poster, and the director -- but to the side, or the bottom.
            //how about a link on the text that leads to the imdb page for the movie?
        case 1:
            movie = 'Bedknobs & Broomsticks';
            break;
        case 2:
            movie = 'Pete\'s Dragon';
            break;
        case 3:
            movie = 'The Goonies';
            break;
        case 4:
            movie = 'Rudy';
            break;
        case 5:
            movie = 'March of the Wooden Soldiers';
            break;
        case 6:
            movie = 'The Princess Bride';
            break;
        case 7:
            movie = 'Short Circuit';
            break;
        case 8: 
            movie = 'The Parent Trap';
            break;
        case 9:
            movie = 'War Games';
            break;
        case 10:
            movie = 'Ferris Bueller\'s Day Off';
            break;
        case 11:
            movie = 'Caddyshack';
            break;
        case 12:
            movie = 'Clueless';
            break;
        case 13:
            movie = 'Sister Act';
            break;
        case 14:
            movie = 'Matilda';
            break;            
    }
    movie = movie.italics();
    const should = ['You should watch ', 'Have you seen ', 'What about ', 'Let\'s watch ', 'How \'bout '];
    const s = Math.floor(Math.random() * should.length)
    movie = movie.italics();
    document.getElementById('nostalgia').innerHTML = `${should[s]}${movie}<br><small>Choose again</small>`;
};

function pickExcitingMovie() {
    let exciting = Math.floor(Math.random() * 15);
    let movie;
    switch (exciting) {
        case 0:
            movie = 'Once Upon A Time In Hollywood';
            break;
        case 1:
            movie = 'Kung Fu Hustle';
            break;
        case 2:
            movie = 'Mission Impossible: Ghost Protocol';
            break;
        case 3:
            movie = 'Jurassic Park';
            break;
        case 4:
            movie = 'Spider-Man: Into the Spider-Verse';
            break;
        case 5:
            movie = 'Train to Busan';
            break;
        case 6:
            movie = 'Minority Report';
            break;
        case 7:
            movie = 'The Raid';
            break;
        case 8: 
            movie = 'John Wick 3';
            break;
        case 9:
            movie = 'Ip Man 2';
            break;
        case 10:
            movie = 'Terminator 2';
            break;
        case 11:
            movie = 'Godzilla VS. Kong';
            break;
        case 12:
            movie = 'Supercop';
            break;        
        case 13:
            movie = 'Die Hard';
            break;  
    }
    movie = movie.italics();
    const should = ['You should watch ', 'Have you seen ', 'What about ', 'Let\'s watch ', 'How \'bout '];
    const s = Math.floor(Math.random() * should.length)
    movie = movie.italics();
    document.getElementById('bored').innerHTML = `${should[s]}${movie}<br><small>Choose again</small>`;
};

function pickRomanticMovie() {
    let romantic = Math.floor(Math.random() * 17);
    let movie;
    switch (romantic) {
        case 0:
            movie = 'To All the Boys I Loved Before';
            break;
        case 1:
            movie = 'Always Be My Maybe';
            break;
        case 2:
            movie = 'Eternal Sunshine of the Spotless Mind';
            break;
        case 3:
            movie = 'When Harry Met Sally';
            break;
        case 4:
            movie = 'Meet Me In St. Louis';
            break;
        case 5:
            movie = 'Return to Me';
            break;
        case 6:
            movie = 'Pride & Prejudice';
            break;
        case 7:
            movie = 'Never Been Kissed';
            break;
        case 8: 
            movie = 'In & Out';
            break;
        case 9:
            movie = 'You\'ve Got Mail';
            break;
        case 10:
            movie = 'While You Were Sleeping';
            break;
        case 11:
            movie = 'Bridget Jones\'s Diary';
            break;
        case 12:
            movie = 'Crazy Stupid Love';
            break;     
        case 13:
            movie = 'Waitress';
            break;
        case 14:
            movie = 'Casablanca';
            break;
        case 15:
            movie = 'The Apartment';
            break;     
    }
    movie = movie.italics();
    const should = ['You should watch ', 'Have you seen ', 'What about ', 'Let\'s watch ', 'How \'bout '];
    const s = Math.floor(Math.random() * should.length)
    movie = movie.italics();
    document.getElementById('romance').innerHTML = `${should[s]}${movie}<br><small>Choose again</small>`;
};

function pickProvacativeMovie() {
    let huh = Math.floor(Math.random() * 18);
    let movie;
    switch (huh) {
        case 0:
            movie = 'Friends With Money';
            break;
        case 1:
            movie = 'The Sting';
            break;
        case 2:
            movie = 'I Heart Huckabees';
            break;
        case 3:
            movie = 'Amelie';
            break;
        case 4:
            movie = 'About a Boy';
            break;
        case 5:
            movie = 'Fight Club';
            break;
        case 6:
            movie = 'Stranger Than Fiction';
            break;
        case 7:
            movie = '12 Monkeys';
            break;
        case 8: 
            movie = 'Being John Malkovich';
            break;
        case 9:
            movie = 'Snowpiercer';
            break;
        case 10:
            movie = 'Parasite';
            break;
        case 11:
            movie = 'I\'m Thinking of Ending Things';
            break;
        case 12:
            movie = 'Waking Life';
            break;     
        case 13:
            movie = 'Primal Fear';
            break;
        case 14:
            movie = '25th Hour';
            break;
        case 15:
            movie = 'Donnie Darko';
            break;     
        case 16:
            movie = 'Get Out';
            break;
        case 17:
            movie = 'In the Bedroom';
            break;
    }
    movie = movie.italics();
    const should = ['You should watch ', 'Have you seen ', 'What about ', 'Let\'s watch ', 'How \'bout '];
    const s = Math.floor(Math.random() * should.length)
    movie = movie.italics();
    document.getElementById('think').innerHTML = `${should[s]}${movie}<br><small>Choose again</small>`;
};

function pickFunnyMovie() {
    let haha = Math.floor(Math.random() * 17);
    let movie;
    switch (haha) {
        case 0:
            movie = 'Death Becomes Her';
            break;
        case 1:
            movie = 'Some Like It Hot';
            break;
        case 2:
            movie = 'It\'s A Mad, Mad, Mad, Mad World';
            break;
        case 3:
            movie = 'Jojo Rabbit';
            break;
        case 4:
            movie = 'Tootsie';
            break;
        case 5:
            movie = 'Bad Moms';
            break;
        case 6:
            movie = 'Borat';
            break;
        case 7:
            movie = 'Spy';
            break;
        case 8: 
            movie = 'Deadpool';
            break;
        case 9:
            movie = 'Dumb and Dumber';
            break;
        case 10:
            movie = 'Hot Fuzz';
            break;
        case 11:
            movie = 'Barb and Star Go to Vista Del Mar';
            break;
        case 12:
            movie = 'Waiting for Guffman';
            break;     
        case 13:
            movie = 'The Baxter';
            break;
        case 14:
            movie = 'Arsenic and Old Lace';
            break;
        case 15:
            movie = 'Mrs. Doubtfire';
            break;     
    }
    movie = movie.italics();
    const should = ['You should watch ', 'Have you seen ', 'What about ', 'Let\'s watch ', 'How \'bout '];
    const s = Math.floor(Math.random() * should.length)
    movie = movie.italics();
    document.getElementById('laugh').innerHTML = `${should[s]}${movie}<br><small>Choose again</small>`;
};

function pickBuddyMovie() {
    let friends = Math.floor(Math.random() * 13);
    let movie;
    switch (friends) {
        case 0:
            movie = 'Bridesmaids';
            break;
        case 1:
            movie = 'Beaches';
            break;
        case 2: 
            movie = 'I Love You, Man';
            break;
        case 3:
            movie = 'Romy and Michelle\'s High School Reunion';
            break;
        case 4:
            movie = 'The First Wives Club';
            break;
        case 5:
            movie = 'Toy Story 2';
            break;
        case 6:
            movie = 'In Her Shoes';
            break;
        case 7:
            movie = 'Booksmart';
            break;
        case 8: 
            movie = 'How to Be Single';
            break;
        case 9:
            movie = 'Wine Country';
            break;
        case 10:
            movie = 'Sisters';
            break;
        case 11:
            movie = 'Sideways';
            break;
        case 12:
            movie = 'Role Models';
            break;         
    }
    movie = movie.italics();
    const should = ['You should watch ', 'Have you seen ', 'What about ', 'Let\'s watch ', 'How \'bout '];
    const s = Math.floor(Math.random() * should.length)
    movie = movie.italics();
    document.getElementById('lonely').innerHTML = `${should[s]}${movie}<br><small>Choose again</small>`;
};

function pickCampyMovie() {
    let dragQueen = Math.floor(Math.random() * 18);
    let movie;
    switch (dragQueen) {
        case 0:
            movie = 'Rocky Horror Picture Show';
            break;
        case 1:
            movie = 'The Boys in the Band';
            break;
        case 2:
            movie = 'To Wong Foo, Thanks for Everything, Julie Newmar';
            break;
        case 3:
            movie = 'The Birdcage';
            break;
        case 4:
            movie = 'Wet Hot American Summer';
            break;
        case 5:
            movie = 'Showgirls';
            break;
        case 6:
            movie = 'The Babysitter';
            break;
        case 7:
            movie = 'Frankenhooker';
            break;
        case 8: 
            movie = 'Whatever Happened to Baby Jane?';
            break;
        case 9:
            movie = 'Logan\'s Run';
            break;
        case 10:
            movie = 'Cabaret';
            break;
        case 11:
            movie = 'Serial Mom';
            break;
        case 12:
            movie = 'Mamma Mia';
            break;     
        case 13:
            movie = 'Les Miserables';
            break;
        case 14:
            movie = 'Chicago';
            break;
        case 15:
            movie = 'Moulin Rouge';
            break;
        case 16:
            movie = 'Enchanted';
            break;     
    }
    movie = movie.italics();
    const should = ['You should watch ', 'Have you seen ', 'What about ', 'Let\'s watch ', 'How \'bout '];
    const s = Math.floor(Math.random() * should.length)
    movie = movie.italics();
    document.getElementById('camp').innerHTML = `${should[s]}${movie}<br><small>Choose again</small>`;
};



/*
I'd love to make an individual page for each movie eventually, with my own summary and comments. 
Not like I have anything else on my plate...
ALSO, create a new page on my website where people can actually access this.

    
 */