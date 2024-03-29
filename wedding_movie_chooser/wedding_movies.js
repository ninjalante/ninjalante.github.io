class WeddingMovie {
    constructor(movie, deets={}, name = null) {
        this.movie = movie;
        this.deets = deets;
        this.name = name;
    }

    returnDeets() {
        return "<h2>" + this.movie + "</h2>" + "<p>" + this.deets.summary + "<br><em>Rated: " + this.deets.rated + "</em></p>";
    }


};

class Question {
    constructor(question, name, a, b, c = undefined, d = undefined) {
        this.question = question;
        this.name = name;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.children = {};
    }

};

//  MOVIES //
let dresses27 = new WeddingMovie("27 Dresses", {"summary": "A young woman who's been a bridesmaid 27 times is forced to serve as maid of honor as her capricious little sister marries the man she's in love with.", "rated": "PG-13"});

let sexCity = new WeddingMovie("Sex and the City: The Movie", {"summary": "When Carrie suffers a devastating emotional setback, Charlotte, Miranda, and Samantha are there to help her write a book about it.", "rated": "R"});

let bFatGreek = new WeddingMovie("My Big Fat Greek Wedding", {"summary": "A shy, frumpy woman gives her life a makeover in order to win the man of her dreams...but she's Greek!", "rated": "PG"});

let mammaMia = new WeddingMovie("Mamma Mia!", {"summary": "A young bride invites the three men who might be her father to her wedding...without telilng her mother.", "rated": "PG"});

let bridesmaids = new WeddingMovie("Bridesmaids", {"summary": "A middle-aged, underemployed woman struggles to keep up with the lavish wedding her best friend is planning with her work bestie.", "rated": "R"});

let weddingPlanner = new WeddingMovie("The Wedding Planner", {"summary": "An unlucky-in-love wedding planner meets the man of her dreams when he saves her life...and then hires her to plan his wedding!", "rated": "PG-13"});

let crazyRichA = new WeddingMovie("Crazy Rich Asians", {"summary": "A Chinese-American woman tries to fit in at a wedding when she learns that her suave boyfriend is a member of the richest family in Singapore.", "rated": "PG-13"});

let freakyFriday = new WeddingMovie("Freaky Friday", {"summary": "A mother and daughter who never listen to each other magically swap bodies to learn about each other's lives.", "rated": "PG"});

let muriels = new WeddingMovie("Muriel's Wedding", {"summary": "A woman who's never been on a date steals some cash, runs away, changes her name, and changes her life.", "rated": "R"});

let royalTreat = new WeddingMovie("The Royal Treatment", {"summary": "An uptown stylist is hired to do hair and makeup for a prince's wedding...but he's handsome!", "rated": "PG"});

let hangover = new WeddingMovie("The Hangover", {"summary": "A groom goes missing after his brother-in-law-to-be surreptitiously drugs his bachelor party, sending the men on a scavenger hunt to track down their friend and remember what happened that night.", "rated": "R"});

let weddingSinger = new WeddingMovie("The Wedding Singer", {"summary": "A brokenhearted wedding singer finds the will to love again when he's befriended by an adorable bride-to-be.", "rated": "PG-13"});

let oneNight = new WeddingMovie("It Happened One Night", {"summary": "When an heiress disappears in order to marry her scandalous European lover, an American journalist agrees to help her in exchange for exclusive rights to her story.", "rated": "G"});

let repeat = new WeddingMovie("Love Wedding Repeat", {"summary": "Alternate timelines abound when the best man is tasked with keeping a troublesome guest out of the wedding.", "rated": "R"});

let proposal = new WeddingMovie("The Proposal", {"summary": "A Canadian book publisher proposes a green card marriage (and a promotion) to her ambitious subordinate, and they have to keep up the ruse when they fly to Alaska to meet his family.", "rated": "PG-13"});

let tag = new WeddingMovie("Tag", {"summary": "Five lifelong best friends continue their decades-long game of tag at a lavish wedding with a tag-hating bride.", "rated": "R"});

let loveYouMan = new WeddingMovie("I Love You, Man", {"summary": "After getting engaged, a straight-laced fella realizes he doesn't have any close guy friends and recruits a chill acquaintance to be his best man.", "rated": "R"});

let fatherBride = new WeddingMovie("Father of the Bride", {"summary": "A successful but uptight father freaks out over every little decision made when his daughter brings home a man he's never met and says she's getting married.", "rated": "PG"});

let crashers = new WeddingMovie("Wedding Crashers", {"summary": "Two bros have strict rules when they crash weddings and seduce bridesmaids all summer, but he's broken the biggest one: don't fall in love.", "rated": "R"});

let parents = new WeddingMovie("Meet the Parents", {"summary": "He's about to propose to his girlfriend when he learns that he's expected to ask her father, an intense ex-CIA agent who looks and talks exactly like Robert De Niro, for her hand in marriage.", "rated": "PG-13"});

let naked = new WeddingMovie("Naked", {"summary": "A cold-footed groom finds himself naked and stuck in a time loop as his bride waits for him to get it all right and show up at the altar.", "rated": "PG-13"});

let weekOf = new WeddingMovie("The Week Of", {"summary": "Two family patriarchs find themselves at odds in the seven days leading up to the marriage of their children.", "rated": "PG-13"});

let sevenBrides = new WeddingMovie("Seven Brides for Seven Brothers", {"summary": "Seven brothers from a rural family travel to town to kidnap one bride for each of them.", "rated": "PG"});

let inLaws = new WeddingMovie("The In-Laws", {"summary": "A risk-adverse father of the bride is whisked away on a dangerous adventure by an international spy -- the father of the groom.", "rated": "PG-13"});

let rachel = new WeddingMovie("Rachel Getting Married", {"summary": "A young woman struggling with substance abuse problems reunites with her family for her sister's wedding.", "rated": "R"});

let marryMe = new WeddingMovie("Marry Me", {"summary": "After a pop star is left at the altar during a live concert, she impulsively marries a single dad in the audience.", "rated": "PG-13"});

let fourWeddingsFuneral = new WeddingMovie("Four Weddings and a Funeral", {"summary": "Criss-crossing lives turn to love over the course of five events.", "rated": "R"});

let destination = new WeddingMovie("Destination Wedding", {"summary": "Two talkative cynics meet on their way to a destination wedding, only to find that the one thing they both like is each other.", "rated": "R"});

let myBoy = new WeddingMovie("That's My Boy", {"summary": "A young groom finds his wedding day complicated by the reappearance of his dad, who raised him when he was only a teen.", "rated": "R"});

let princess = new WeddingMovie("The Princess Bride", {"summary": "A kooky grandfather reads his favorite book to his cynical grandson while he's sick in bed.", "rated": "G"});

let monsoon = new WeddingMovie("Monsoon Wedding", {"summary": "A large Indian family struggles personally and financially as their eldest daughter prepares to enter an arranged marriage.", "rated": "R"});

let weddingSeason = new WeddingMovie("Wedding Season", {"summary": "A young woman under pressure from her family to get married makes a deal with an eligible bachelor to be each others' dates for the upcoming wedding season.", "rated": "PG"});

let youPeople = new WeddingMovie("You People", {"summary": "A white Jewish man and a Black Muslim woman fall in love, but planning a wedding - with THEIR families??? - feels impossible.", "rated": "R"});

let palmSprings = new WeddingMovie("Palm Springs", {"summary": "A carefree young man happily seduces the maid of honor at a wedding - but when she follows him into a desert cave, she's pulled into his time loop.", "rated": "R"});

let ticket2Paradise = new WeddingMovie("Ticket to Paradise", {"summary": "A long-divorced couple reunites at their daughter's destination wedding with the shared goal of getting her to call it off.", "rated": "PG-13"});

let roughNight = new WeddingMovie("Rough Night", {"summary": "A bride-to-be's worlds collide when she brings together her best friends for a wild party -- and manslaughter.", "rated": "R"});

let bachelorette = new WeddingMovie("Bachelorette", {"summary": "Three former high school mean girls are drafted as bridesmaids for someone they used to bully.", "rated": "R"});

let corpseBride = new WeddingMovie("Corpse Bride", {"summary": "On the eve of his wedding, a hapless groom accidentally reanimates a long-dead spinster who insists that they are now man and wife.", "rated": "PG"});

let peopleWeHate = new WeddingMovie("The People We Hate at the Wedding", {"summary": "Two bickering siblings make things worse in the week of celebrations before their half-sister's wedding.", "rated": "R"});

let shotgun = new WeddingMovie("Shotgun Wedding", {"summary": "A couple's perfect destination wedding is ruined when priates take the guests hostage.", "rated": "R"});

let bestMan = new WeddingMovie("The Best Man", {"summary": "On the eve of his wedding, a groom learns all about his bride's past...from his best man.", "rated": "R",});

let plusOne = new WeddingMovie("Plus One", {"summary": "Two college friends - one happily single, one reeling from a breakup - agree to be each other's dates for a summer of college friends' weddings.", "rated": "R"});

let somethingBorrowed = new WeddingMovie("Something Borrowed", {"summary": "A timid young woman regrets letting her best friend swoop on the guy she likes...but when they get engaged, her feelings get stronger.", "rated": "PG"});

let runaway = new WeddingMovie("Runaway Bride", {"summary": "A journalist who's fired for printing an erroneous story about a three-time altar-dumping bride hunts the woman down to coax out her real story and get his job back.", "rated": "PG"});

let sideways = new WeddingMovie("Sideways", {"summary": "An insecure man takes a former soap opera star on a picturesque trip through wine country for his stag do, but the groom's behavior complicates his friend's plans.", "rated": "R"});

let madeHonor = new WeddingMovie("Made of Honor", {"summary": "A womanizer realizes his feelings for his female best friend after she gets engaged.", "rated": "PG-13"});

let brideWars = new WeddingMovie("Bride Wars", {"summary": "Two lifelong best friends schedule their dream weddings at the Plaza on the same day at the same time - and set out to ruin each other's big day.", "rated": "PG"});

let bestFriends = new WeddingMovie("My Best Friend's Wedding", {"summary": "When a young woman discovers her 'marriage deal' with her best friend won't go through because he recently got engaged to a younger woman, she sets out to destroy their relationship.", "rated": "PG-13"});

let weddingDate = new WeddingMovie("The Wedding Date", {"summary": "Desperate to impress her ex-fiance at her sister's wedding, a young woman hires a handsome and confident escort to pose as her boyfriend.", "rated": "PG-13"});

let politeSociety = new WeddingMovie("Polite Society", {"summary": "A young woman obsessed with martial arts movies sets out to 'rescue' her sister from her upcoming marriage.", "rated": "PG-13"});

let because = new WeddingMovie("Because I Said So", {"summary": "A divorced mom of three daughters worries that her youngest doesn't take relationships seriously enough, and secretly sets her up with a series of men she's personally vetted.", "rated": "PG-13"});

let monster = new WeddingMovie("Monster-in-Law", {"summary": "A wealthy mother recovering from a mental breakdown target the young woman that her son brings home to introduce to her.", "rated": "PG-13"});

//  QUESTIONS //
let rootQ = new Question("Are you looking for a movie with a male or female protagonist?", "Ready for wedding season", "Male", "Female", "Both!");
//^
let maleProtag = new Question("Got it. Do you want something that's...", "Male protagonist", "Family-friendly", "As family-UNfriendly as you can");
//^
let femaleProtag = new Question("Female leads it is! Do you want...", "Female protagonist", "A fun, family-friendly movie", "Something more mature and risque");
//^
let ensemble = new Question("Are you looking for...", "More than one protagonist", "A single pair of protagonists", "An ensemble cast");
//^
let rootQComment = "Unfortunately I have not found any wedding movies with non-binary and/or trans protagonists. Please <a href='mailto:gretacwink@gmail.com'>@ me</a> if you have one!";

rootQ.comment = rootQComment;
rootQ.children.a = maleProtag;
rootQ.children.b = femaleProtag;
rootQ.children.c = ensemble;
//^^^^

let mFF = new Question("Would you prefer a classic movie that might be in black and white, or something more modern?", "Family-friendly", "Ooo, hit me with a classic", "Oh, something modern");
//^
let mNotFF = new Question("Kids shouldn't be allowed at weddings anyway. Do you want...", "Not family-friendly", "A buddy comedy", "Something else");
//^
maleProtag.children.a = mFF;
//^
maleProtag.children.b = mNotFF;
//^
let classic = new Question("Last question. How do you feel about musicals?", "Classic", "Love 'em!", "Not tonight.");
//^
mFF.children.a = classic;
//^
classic.children.a = sevenBrides;
sevenBrides.name = "Musical";
classic.children.b = oneNight;
oneNight.name = "Not a musical";
//^
mFF.children.b = fatherBride;
fatherBride.name = "Modern";
//^
let fFF = new Question("Cool. You have some fun options. Are you looking for...", "Family-friendly", "Something nostalgic", "Something fresh and new");
//^
let fNotFF = new Question("You've got some very different options, so let's narrow it down. Do you want...", "Not family-friendly", "Complicated characters and difficult situations", "Easy-to-consume motivations I won't have to think about too much");
//^
femaleProtag.children.a = fFF;
//^
femaleProtag.children.b = fNotFF;
//^
let nostalgic = new Question("Do you want a lot of singing and dancing?", "Nostalgic", "Yes! Sweep me away!", "No, calm down");
//^
let italianOrIndian = new Question("Okay. You're ordering food to watch with your movie. Which do you order?", "Something new", "Italian!", "No, Indian!");
//^

fFF.children.a = nostalgic;
//^
fFF.children.b = italianOrIndian;
//^
nostalgic.children.a = mammaMia;
mammaMia.name = "Here I go again";
//^
let bodySwap = new Question("Are you into body swap hijinks?", "No musicals", "Heck yeah, let's swap!", "I prefer characters who learn to be comfortable in their own skin without shenanigans.");
//^
nostalgic.children.b = bodySwap;
//^
bodySwap.children.a = freakyFriday;
freakyFriday.name = "Body swap!";
bodySwap.children.b = bFatGreek;
bFatGreek.name = "Character growth without shenanigans";
//^
italianOrIndian.children.b = weddingSeason;
weddingSeason.name = "Indian";
italianOrIndian.children.a = royalTreat;
royalTreat.name = "Italian";
//^

let substance = new Question("But, like, HOW complicated and difficult?", "Something with substance", "Really dramatic. I want it to hurt", "Eh. It can have a side of fun");
//^
fNotFF.children.a = substance;
//^
let plane15 = new Question("All you need to do is choose your leading man!", "Watched on a plane 15 years ago", "Matthew McConaghey", "James Marsden", "Dermot Mulroney");
//^
let drama = new Question("Which of these storylines appeals to you more?", "Drama-rama", "A recovering addict sees her family for the first time in years", "Former high school classmates see each other for the first time in years");
//^
let moreFun = new Question("Do you want to hate the protagonist?", "More fun please", "Yes, I want to feel the hate flowing through me", "No, I'd rather have someone likable");
//^
let hate = new Question("Which character are you?", "Filled with hate", "Carrie", "Miranda", "Samantha", "Charlotte");
let romp = new Question("Do you want a <em>rom</em> com or a <em>romp</em> com?", "A likable protagonist", "Rom com please", "Romp com?! Absolutely");
let romCom = new Question("How much do you want to indulge in obscene capitalist fantasy?", "I don't like rom-com-related wordplay", "As much as humanly possible", "Help me, I'm poor");
romCom.children.a = crazyRichA;
crazyRichA.name = "No one likes free stuff more than rich people";
romCom.children.b = bridesmaids;
bridesmaids.name = "Help me, I'm poor";
romp.children.a = romCom;
romp.children.b = politeSociety;
politeSociety.name = "Time to romp it up!"
let easyToConsume = new Question("I don't blame you. Do you want...", "Easy to consume", "Something you probably watched on a plane 15 years ago", "Something that's probably new to you");
//^
fNotFF.children.b = easyToConsume;
//^
let newToYou = new Question("How do you feel about meddling moms?", "New to me", "Sounds good! Hits close to home", "Sounds AWFUL. Hits TOO close to home");
easyToConsume.children.a = plane15;
//^
easyToConsume.children.b = newToYou;
meddlingMoms = new Question("Pick a feminist icon.", "Moms be a-meddlin'", "Jane Fonda", "Diane Keaton");
newToYou.children.a = meddlingMoms;
meddlingMoms.children.a = monster;
monster.name = "Jane Fonda";
meddlingMoms.children.b = because;
because.name = "Diane Keaton";
laughSweet = new Question("Final question. Do you want something that's laugh-out-loud outrageous, or sweet and comforting?", "No manipulative parents please", "Laugh-out-loud outrageous", "Sweet and comforting");
newToYou.children.b = laughSweet;
laughSweet.children.a = roughNight;
roughNight.name = "outRAgeous!";
laughSweet.children.b = muriels;
muriels.name = "Toni Collette forever";
//^
substance.children.a = drama;
//^
drama.children.a = rachel;
rachel.name = "Recovering alcoholic";
//^
substance.children.b = moreFun;
moreFun.children.a = hate;
moreFun.children.b = romp;
//^

//^
//^^
plane15.children.a = weddingPlanner;
weddingPlanner.name = "McConaghey";
plane15.children.b = dresses27;
dresses27.name = "Marsden";
plane15.children.c = weddingDate;
weddingDate.name = "Mulroney -- wow, really?!";
//^^
drama.children.b = bachelorette;
bachelorette.name = "Recovering high schoolers";
//^
hate.children.a = bestFriends;
bestFriends.name = "I literally can't stomach this movie. Good luck";
hate.children.b = sexCity;
hate.children.c = sexCity;
hate.children.d = sexCity;
sexCity.name = "One woman's trash is another woman's treasure";
//^


let buddy = new Question("There's some fun buddy comedies. Do you want a movie with...", "Buddy comedy", "Actors who are easily recognized from TV", "Older actors your mom is weird about");
//^
mNotFF.children.a = buddy;
//^
let youngFolks = new Question("Got it.\nDo you enjoy Ed Helms?", "TV-friendly faces", "Yes! He's great", "Not so much");
//^
buddy.children.a = youngFolks;
//^
let edHelms = new Question("How raunchy do you like it?", "Ed Helms", "As raunchy as possible", "I prefer my raunch on the side, thank you");
//^
youngFolks.children.a = edHelms;
//^
let crash = new Question("I've only got two movies left. I guess...do you want to watch something you've already seen, or something you slept on?", "No Ed Helms", "Give me what I came here expecting", "I'm open to trying something new", "Give me something amazing");
//^
youngFolks.children.b = crash;
//^
crash.children.a = crashers;
crashers.name = "I came here so someone would tell me it was okay to watch Wedding Crashers again.";
crash.children.b = loveYouMan;
loveYouMan.name = "Paul Rudd is People's Sexiest Man Alive 2021";
crash.children.c = sideways;
sideways.name = "There is full-frontal male nudity pressed up against a window. Get ready for that";
//^^

edHelms.children.a = hangover;
hangover.name = "Drenched in raunch";
edHelms.children.b = tag;
tag.name = "Raunch on the side";
//^^
buddy.children.b = inLaws;
inLaws.name = "Older buddies can still be funny";
//^
let sandler = new Question("Do you like Adam Sandler?", "Not a buddy comedy", "LOVE Adam Sandler!", "Who?");
//^
mNotFF.children.b = sandler;
//^
let nineties = new Question("Good for you. What is your favorite Adam Sandler manifestation?", "I Stan-dler Adam Sandler", "1990s Adam Sandler", "2010s Adam Sandler");
//^
sandler.children.a = nineties;
//^
nineties.children.a = weddingSinger;
weddingSinger.name = "I like good Adam Sandler movies";
//^
let matureSandler = new Question("Amazingly you have two options here. Which flavor of 2010s Sandler wets your whistle?", "I really enjoy Adam Sandler's more recent comedies since he got married and had children and started producing Paul Blart movies", "Mature Adam Sandler", "Immature Adam Sandler");
//^
nineties.children.b = matureSandler;
//^
matureSandler.children.a = weekOf;
weekOf.name = "Adam Sandler was born in 1966. He probably watched the Moon Landing on TV.";
matureSandler.children.b = myBoy;
myBoy.name = "Adam Sandler was born in 1966. He was in college when the Challenger exploded.";
//^^
let timeline = new Question("That's fine. How do you feel about timeline wackiness?", "I don't give A-damn S-damn-dler", "Love timeline stuff, so fun", "No thanks");
//^
sandler.children.b = timeline;
//^
let time = new Question("Awesome. A time loop like Groundhog Day, or alternate timelines like Sliding Doors?", "Timeline wackiness", "Groundhog Day time loop", "Sliding Doors alts");
//^
timeline.children.a = time;
time.children.a = naked;
naked.name = "Groundhog Day time loop";
time.children.b = repeat;
repeat.name = "Sliding Doors timelines";
//^
let stiller = new Question("Ok, no Sandler, no timeline stuff. Who do you prefer as a leading man?", "Normal time stuff", "Ben Stiller", "Ryan Reynolds", "Patrick Dempsey");
//^
timeline.children.b = stiller;
//^
stiller.children.a = parents;
parents.name = "Ben Stiller";
stiller.children.b = proposal;
proposal.name = "Ryan Reynolds";
stiller.children.c = madeHonor;
madeHonor.name = "Patrick Dempsey";
//^^
let nostalgicOrModern = new Question("I've got some ideas. Do you want...", "Live-action", "A nostalgic classic", "Something more modern");
//^
let hiddenGem = new Question("I think I've got it. Do you want...", "Ensemble cast", "An instantly recognizable classic", "A hidden gem I've never heard of", "Something I'm not expecting");
//^
let stopMotion = new Question("Next question! Do you want...", "One couple", "a whismical stop-motion piece that's fun for the whole family", "Literally anything else");
//^
ensemble.children.a = stopMotion;
//^
stopMotion.children.a = corpseBride;
corpseBride.name = "Hand-animated whimsy";
//^
stopMotion.children.b = nostalgicOrModern;
//^
ensemble.children.b = hiddenGem;
//^
hiddenGem.children.a = fourWeddingsFuneral;
fourWeddingsFuneral.name = "An instantly recognizable classic";
//^
hiddenGem.children.b = monsoon;
monsoon.name = "A hidden gem that I will LOVE";
//^
ensemble.children.c = bestMan;
bestMan.name = "Something you aren't expecting"

nostalgicOrModern.children.a = princess;
princess.name = "A nostalgic classic";
//^
let cynical = new Question("Are you feeling...", "Something new", "a somewhat cynical, but ultimately sweet, and certainly more realistic, look at relationships", "a 100% bonkers fairy tale");
//^
let fairyTale = new Question("Who's the princess in your fairy tale?\nIs it J.Lo?", "A 100% bonkers fairy tale", "Of COURSE", "No, someone less objectively talented");
//^
nostalgicOrModern.children.b = cynical;
//^
cynical.children.b = fairyTale;
//^
let jLO = new Question("Last question.\nDo you want...", "J.Lo", "A non-stop and very ridiculous thrill ride", "An improbable romance that will endear itself to you more than you expect");
fairyTale.children.a = jLO;
let someoneElse = new Question("All right, it's your movie night.\nWhich leading lady appeals to you most?", "Not J.Lo, for some reason", "Julia Roberts", "Anne Hathaway", "Ginnifer Goodwin");
fairyTale.children.b = someoneElse;
jLO.children.a = shotgun;
jLO.children.b = marryMe;
someoneElse.children.a = runaway;
runaway.name = "Julia Roberts";
someoneElse.children.b = brideWars;
brideWars.name = "Actually, she prefers Annie";
someoneElse.children.c = somethingBorrowed;
somethingBorrowed.name = "Ginnifer Goodwin";

//^^

let cringe = new Question("I think I've got something, but I have to know, do you like topically-relevant cringe comedy?", "More cynical, sweet, and realistic", "no thank you", "BRING ON THE CRINGE");
//^
cynical.children.a = cringe;
//^
cringe.children.b = youPeople;
youPeople.name = "I want to curl into a ball from cringing so hard";
//^
let howRealistic = new Question("Low cringe, ok.\n But like, HOW realistic?", "No cringe please", "I only enjoy things that could technically happen in real life", "I wouldn't mind indulging in some wackiness");
//^
cringe.children.a = howRealistic;
//^
let baggage = new Question("What kind of couple appeals to you?", "Mostly realistic", "Exes with baggage,", "Strangers with baggage", "Siblings with baggage", "Friends with 100% no baggage, really!");
//^
howRealistic.children.a = baggage;
//^
baggage.children.a = ticket2Paradise;
ticket2Paradise.name = "Exes with baggage";
baggage.children.b = destination;
destination.name = "Strangers with baggage";
baggage.children.c = peopleWeHate;
peopleWeHate.name = "Siblings with baggage";
baggage.children.d = plusOne;
plusOne.name = "Friends with no baggage at all";
//^^^
howRealistic.children.b = palmSprings;
palmSprings.name = "I'm still able to draw life lessons from movies that use fun devices";
//^