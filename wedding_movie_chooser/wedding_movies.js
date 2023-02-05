class WeddingMovie {
    constructor(value, deets={}) {
        this.value = value;
        this.deets = deets;
    }
};

class Question {
    constructor(value, name) {
        this.value = value;
        this.name = name;
        this.a;
        this.b;
        this.c;
    }
//might not need this
    get input() {
        return this.value;
    }

    /**
     * @param {any} value
     */
    set a(value) {
        this.a = value;
    }

    /**
     * @param {any} value
     */
    set b(value) {
        this.b = value;
    }

    /**
     * @param {any} value
     */
    set c(value) {
        this.c = value;
    }
};

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

let princess = new WeddingMovie("The Princess Bride", {"summary": "A kooky grandfather reads his favorite book to his cynical grandson while he's sick in bed."});

let monsoon = new WeddingMovie("Monsoon Wedding", {"summary": "A large Indian family struggles personally and financially as their eldest daughter prepares to enter an arranged marriage.", "rated": "R"});

let weddingSeason = new WeddingMovie("Wedding Season", {"summary": "A young woman under pressure from her family to get married makes a deal with an eligible bachelor to be each others' dates for the upcoming wedding season.", "rated": "PG"});

let youPeople = new WeddingMovie("You People", {"summary": "A white Jewish man and a Black Muslim woman fall in love, but planning a wedding - with THEIR families??? - feels impossible.", "rated": "R"});