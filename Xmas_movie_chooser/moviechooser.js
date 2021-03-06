//all the movies here
let XmasMovies = [
    {
        title: "A Bad Moms Christmas",
        myScore: 100,
        summary: "A trio of overwhelmed mom friends decide to take Christmas easy this year...until their needy moms come to town.",
        comments: "If you're looking to unwind and have a laugh on your own while you're wrapping presents or baking cookies, this movie is for you.",
        romance: true,
        musical: false,
        mistakenIdentity: false,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: true,
        familyFriendly: false
    },
    {   title: "A California Christmas",
        myScore: 43,
        summary: "In order to win his mother's approval, a lawyer poses as a farm hand in order to coerce a struggling farmess into selling her land.",
        comments: "This one was really bad. Why is the 'feisty,', I-don't-need-to-be-rescued female 'protagonist' (less screen time than the male protagonist and his bro driver) constantly making excuses for the violent asshole friend of her late fiance who keeps pressuring her to go out with him? Also, the male protagonist looked too much like Martin Shkreli", 
        romance: true,
        musical: false,
        mistakenIdentity: true,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: true,
        realMagic: false,
        famousActor: false,
        childActor: false,
        familyFriendly: false
    },
    {
        title: "A California Christmas 2: City Lights",
        myScore: 37,
        summary: "After getting engaged, a young couple's lives are upended when they have to leave their dairy farm and winery in the country to settle unfinished business of all kinds in San Francisco.",
        comments: "Buckle in, I got a lot of rant to get out. I started this movie and was so bored ten minutes in that I just stopped it and continued baking in total silence, as that was more enjoyable. I put it back on a couple days later, and got *literally* another five minutes in before I guessed what all the plot problems and points were going to be, closed my eyes, and slept through the rest. And guess what? I was 100% right on all counts. There's so, so many slow-motion montages that add nothing - someone doesn't grasp that 'visual storytelling' means you should be telling a story instead of just showing visuals - and some of the sound editing and character moments are actually the things you would see in a child's cartoon. Plus, the acting is terrible. You'd think 2020 would have, at least, reinvigorated some of these actors to make them happy to be alive, but maybe they're all just as exhausted as I am. *Mostly family-friendly except for one sad attempt at a romantic love scene that I actually fast-forwarded through.",
        romance: true,
        musical: false,
        mistakenIdentity: false,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: true,
        realMagic: false,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "A Christmas Carol",
        myScore: 73,
        summary: "A rich old man learns the meaning of Christmas from four ghosts.",
        comments: "Tied for fourth, pretty boring to watch as an adult. Fun fact: this was a made-for-TV movie, which is why it's not exactly the most dynamic thing ever.",
        romance: false,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "A Christmas Prince",
        myScore: 56,
        summary: "A journalist breaks into a foreign royal family's home and poses as a new employee so she can get the scoop on the heir's plans to take the throne...or not.",
        comments: "It's not good in the bad sort of way, or bad in the good sort of way. It's just bad in the bad sort of way.",
        romance: true,
        musical: false,
        mistakenIdentity: true, 
        charmingInn: false,
        royalFairyTale: true,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: true
    },
    {   title: "A Christmas Prince: Royal Wedding",
        myScore: 54,
        summary: "A queen-to-be feels overwhelmed as royal protocols take over her hopes of a small wedding.",
        comments: "You\'re going to a be a queen, of course your life isn\'t your own, didn\'t you learn anything from Diana, you dumb bitch?",
        romance: false,
        musical: false,
        mistakenIdentity: false,
        charmingInn: false,
        royalFairyTale: true,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "A Christmas Prince: The Royal Baby",
        myScore: 63,
        summary: "With her first child\'s arrival imminent, the queen has to solve the mystery of the missing artifact that maintains peace between neighboring countries.",
        comments: "I know that when Queen Elizabeth had an emergency, they used to send Prince Philip out alone on a horse in the snow. He probably would have preferred that, actually", 
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: true,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: true
        },
        {
        title: "A Christmas Story",
        myScore: 100,
        summary: "A man recounts the Christmas that he asked his parents for an air rifle, beat up the school bully, and discovered that prizes are pieces of junk.",
        comments: "The TBS marathon is overkill but it is *very* entertaining",
        romance: false,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: false
    },
    {
        title: "A Cinderella Story: Christmas Wish",
        myScore: 68,
        summary: "A department store elf works to launch her music career as her step-family gets in the way.",
        comments: "Not terrible",
        romance: true,
        musical: true,
        mistakenIdentity: true, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: false,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "A Garfield Christmas Special",
        myScore: 100,
        summary: "A gluttonous cat reluctantly accompanies his owner to his family's farm for Christmas, and makes an unexpected connection with his owner's prickly grandmother.",
        comments: "This was genuinely touching and had some surprising moments. Jon's grandmother is grieving the loss of her husband, and Garfield has real character development as he realizes he can do something nice for someone. The typical family stuff is really funny, and the voice cast is insane: in addition to Lorenzo Music as Garfield, Pat Carroll (Ursula from The Little Mermaid) is Grandma, Pat Harrington Jr. (the landlord from One Day At A Time) is Dad, and David L. Lander (Squiggy from Laverne & Shirley) is his brother. Great fun for the whole family, and a shot of nostalgia to boot.",
        romance: false,
        musical: true,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: true,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: true,
    },
    {
        title: "A Family Reunion Christmas",
        myScore: 82,
        summary: "A family faces multiple struggles as they get ready for Christmas.",
        comments: "Angels are real? But I was genuinely touched by it",
        romance: false,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: true,
        famousActor: true,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "A Very Harold and Kumar Christmas",
        myScore: 74,
        summary: "Two stoners have to replace a Christmas tree they destroyed, but shenanigans stand in their way.",
        comments: "The sexual coercion scene was genuinely upsetting, but the rest was pretty funny",
        romance: false,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: true,
        famousActor: true,
        childActor: true,
        familyFriendly: false
    },
    {
        title: "A Wish for Christmas",
        myScore: 75,
        summary: "A young woman fed up with being walked all over at work is given the chance to change her life when a magical Santa gives her 48 hours to be assertive.",
        comments: "I've watched this one every year. Don't @ me",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: true,
        realMagic: true,
        famousActor: false,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "Alien Xmas",
        myScore: 85,
        summary: "An alien learns the true meaning of Christmas when he comes to Earth and is mistaken for a child's toy.",
        comments: "It was cute but frankly I wasn't really paying attention",
        romance: false,
        musical: false,
        mistakenIdentity: true, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: true,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Angels in the Snow",
        myScore: 50,
        summary: "A bickering, privileged family stranded in a snowstorm provides a warm home to a less fortunate family stranded in the snowstorm.",
        comments: "They were dead the whole time. The movie title 'ruins' it, if there was anything to be ruined. Also, the Black family serves as a vehicle to teach them, instead of having their own character development.",
        romance: false,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: true,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Bridget Jones's Diary",
        myScore: 80,
        summary: "Finding herself single on another Christmas, a young woman who specializes in making a fool of herself finds that things start to go her way once she embraces it.",
        comments: "This is actually one of my favorite movies, but it's not *terribly* Christmassy. It did introduce me to some fantastic Brit vocab though.",
        romance: true,
        musical: false,
        mistakenIdentity: false,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: false
    },
    {
        title: "Check Inn to Christmas",
        myScore: 79,
        summary: "Two former high school sweethearts convince their dads - who are lifelong business rivals - to cooperate and run a soulless corporation out of town.",
        comments: "Christmas trivia doesn't sound like anything you need to study for. The chemistry between the two leads - and the plot device that they'd known each other for decades - made a huge difference.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: true,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: true,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Christmas by Starlight",
        myScore: 77,
        summary: "A young lawyer agrees to help a young real estate developer impress his boss-dad in exchange for him not tearing down her family's cute little diner.",
        comments: "Am I going soft? I think I liked this one. The male lead gives off STRONG bargain bin Ryan Reynolds vibes, and the female lead aims high to be confused with Lorelei Gilmore. Both things I can get behind. ALSO, his assistant is not only gay, but a happily married gay man. I was extremely disappointed that the main's last name is Park, but she's not Korean.",
        romance: true,
        musical: false,
        mistakenIdentity: true,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: false,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Christmas Every Day",
        myScore: 57,
        summary: "After his sister wishes for Christmas every day, a young teen's Christmas becomes increasingly frustrating.",
        comments: "I saw this when I was about 12. But only once. I didn't watch it nearly as many times as I watched that one with Mimi Rogers", 
        romance: false,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: true,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Christmas in Connecticut",
        myScore: 100,
        summary: "A popular lifestyle writer agrees to marry a stuffy Connecticut architect if he'll help her entertain her boss and a war hero for Christmas.",
        comments: "100% perfection, and Dennis Morgen and Barbara Stanwyck are both dreamboats",
        romance: true,
        musical: false,
        mistakenIdentity: true, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: true,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Christmas Made to Order",
        myScore: 71,
        summary: "A struggling event planner helps a too-busy corporate man entertain his visiting family over the holidays.",
        comments: "the PILF sneaks in a Chevy Chase impression, which is a highlight",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: false,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Christmas Vacation",
        myScore: 100,
        summary: "A dedicated family man plans to give his family the perfect Christmas, but gets more family than he bargained for.",
        comments: "One of the few movies that truly captures how stressful and wonderful Christmas is. Bingo",
        romance: false,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: true,
        familyFriendly: false
    },
    {
        title: "Christmas Wedding Planner",
        myScore: 34,
        summary: "A wedding plans finds her job interrupted when a private investigator looks into the groom's background.",
        comments: "omg I hate this one so much",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: false
    },
    {
        title: "Christmas with a View",
        myScore: 51,
        summary: "A failed restauranteer working as a hostess at a luxury inn finds herself flustered when a reality show chef is hired for the holiday season.",
        comments: "There's actually banging in this one, which is rare",
        romance: true,
        musical: false,
        mistakenIdentity: false,
        charmingInn: true,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: false
    },
    {
        title: "Christmas with the Kranks",
        myScore: 78,
        summary: "After their daughter decides to travel for Christmas, her mom and dad choose to skip the holiday and go on a tropical vacation.",
        comments: "I love how horny they are for each other.",
        romance: false,
        musical: false,
        mistakenIdentity: false,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: false
    },   
    {
        title: "Christmas Wonderland",
        myScore: 76,
        summary: "A put-upon gallery assistant redisocvers her love of painting when she returns home to babysit her niblings...and she rediscovers her high school boyfriend, too.",
        comments: "I didn't hate it. I have a soft spot for Emily Osment. Apparently she spent four months shadowing at an art gallery to 'prepare' for the role. Overkill? Or being a good actor?",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: true,
        realMagic: false,
        famousActor: false,
        childActor: true,
        familyFriendly: true
    }, 
    {
        title: "Cross Country Christmas",
        myScore: 80, 
        summary: "After running into each other on a cancelled flight, two former high school classmates stranded in the midwest team up to get back to their hometown for Christmas.",
        comments: "I really like that Lina recognizes that her life is full and happy, but that she'd be even happier if he were a part of it; and that her caring about helping people so much through her job causes her to neglect herself. This one was...good?",
        romance: true,
        musical: false,
        mistakenIdentity: false,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: false,
        famousActor: false,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "Dash and Lily",
        myScore: 83,
        summary: "In the week leading up to Christmas, two lonely teenagers set character-building dares by leaving a notebook for each other in iconic locations around New Year's East Village.",
        comments: "It's extremely cute. Hope you have a sweet tooth. Would have loved for them to take an extra episode for the conclusion, though.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: false,
        famousActor: false,
        childActor: false,
        familyFriendly: false
    },
    {
        title: "Die Hard",
        myScore: 95,
        summary: "A vacationing NYPD officer flies to L.A. to reconcile with his estranged wife, only to find her workplace Christmas party overrun by terrorists.",
        comments: "It's a perfect movie but it doesn't exactly get me into the Christmas spirit.",
        romance: false,
        musical: false,
        mistakenIdentity: true,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: true,
        famousActor: true,
        childActor: false,
        familyFriendly: false
    },
    {
        title: "Dolly Parton's Christmas on the Square",
        myScore: 69,
        summary: "The residents of a small town come together to change the heart of its least jolly and richest resident, with the help of an angel and her trainee.",
        comments: "Without Dolly, it'd be pure garbage. A lot of problems with the theology - for example, that angels are magical enough to fix problems as complicated as fertility with one little finger twitch, but they choose not to. Also, Regina's dad was a piece of shit. Not just because he was so overprotective that she wasn't socialized properly and ended up getting pregnant as a teen, not just because he ripped that baby off her chest the second after he was born, but also because he was the richest man in town and ARPAB.",
        romance: true,
        musical: true,
        mistakenIdentity: true,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: true,
        realMagic: true,
        famousActor: true,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "El Camino Christmas",
        myScore: 52,
        summary: "When a gas station robbery goes bad, the robbers, the cops, and the hostages have to decide what to do next.",
        comments: "SO depressing and mismarketed. It has a great cast and great acting, and the trailer makes it look like a romp, but there's very little comic relief.",
        romance: false,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: false
    },
    {
        title: "Elf",
        myScore: 87,
        summary: "A failing publisher discovers that he has a grown son he never knew about...a son who was raised by elves at the North Pole.",
        comments: "I saw this movie in theaters four times, and I have no regrets. You might think I would be cynical about such beloved movie, but the fact is, it's very good, and it began the era of production companies trusting Jon Favreau.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: true,
        famousActor: true,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Father Christmas Is Back",
        myScore: 53,
        summary: "Four bickering sisters are thrown for a loop when they learn the youngest and wildest among them has invited their long-estranged father over for Christmas.",
        comments: "Hooooooo boyyyyyyyy.",
        romance: false,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: false
    },
    {
        title: "Four Christmases",
        myScore: 78,
        summary: "A couple with divorced parents is forced to spend time with all four of their extended families after their self-serving vacation plans are exposed.",
        comments: "I was skeptical when it first came out, but seeing it a decade later, it's a classic. Incredible casting.",
        romance: false,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: true,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: false
    },
    {
        title: "Gingerbread Miracle",
        myScore: 77,
        summary: "A young woman cobbling together jobs has the chance to move out of her parents' house and get a full-time job, but she starts to rethink her choices after her high-school crush returns to town to help his uncle sell his bakery.",
        comments: "I really liked the normalizing and inclusion of Mexican-American culture, though would it have hurt to make Maya's family Mex-Am too? Loved them showing that there's other Mex-Am families in the town who participate in la posada, and that the bakery is important to everyone. It felt a bit like a sequel to another movie, since Maya had gotten a fresh start two years prior, and it was the man, rather than the woman, looking to change careers for a 'simpler' life. Also love that Maya realized she had exactly what she wanted all along. I think Hallmark movie-writing bots are getting smarter...",
        romance: true,
        musical: false,
        mistakenIdentity: false,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: true,
        realMagic: true,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Merry Happy Whatever",
        myScore: 75,
        summary: "A man hoping to propose to his girlfriend over the holidays undergoes scrunity from her widowed, overprotective, ex-cop father when he joins her for the Christmas holiday.",
        comments: "The sitcomization of it brings its quality down a bit, but it's a solid sitcom. The well-worn concept is given new life by excellent performances and actual comedy.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: true,
        realMagic: false,
        famousActor: true,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "Happiest Season",
        myScore: 85,
        summary: "A young woman is invited to her girlfriend's home for Christmas, hoping to propose - only to discover that her girlfriend's family thinks they're 'roommates.'",
        comments: "For being one of the first LGBTQ-centered Christmas movies, it features a lot of the usual Christmas movie shenanigans: a grown-up child star (Kristen Stewart), a quirky dysfunctional family, TWO hometown exes (Aubrey Plaza and that guy), deception and mistaken identity, and a bunch of slapstick. I am a *bit* annoyed that no one confronted Sloane about her clearly evil children, and would have loved to see more overt conflict there with Abby. Also Kristen Stewart is totally swoon-worthy and it was great to see her in a role so unlike what she's usually in. Also, she does have some really great jackets throughout. Re: family friendly...there's not a ton of bad language, but there is some mild innuendo (including a fully-dressed man in a ball gag). It says PG-13 but I don't remember that at all. ",
        romance: true,
        musical: false,
        mistakenIdentity: true,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: true,
        realMagic: false,
        famousActor: true,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "Holidate",
        myScore: 85,
        summary: "Acquaintances agree to be each other's holiday dates for a year to avoid questions from their family and from any potential dates who might take things too seriously.",
        comments: "Genuinely funny and enjoyable. An actual movie. But not family friendly by any stretch!",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: true,
        familyFriendly: false
    },
    {
        title: "Holiday Date",
        myScore: 52,
        summary: "After her boyfriend dumps her right before Christmas, an aspiring fashion designer impulsively agrees to let an actor pose as him for the week she's spending with her family.",
        comments: "It soured my mouth how obsessed the actor is with being an actor, and how he can't think in terms of anything else. Woof. The brother-in-law and dad have a nice little arc, but it's so little, and  stakes and emotions just don't exist enough for people to do more than bite their lip.",
        romance: true,
        musical: false,
        mistakenIdentity: true,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: true,
        realMagic: false,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Holiday Home Makeover",
        myScore: 73,
        summary: "An interior designer who calls himself 'Mr. Christmas' helps families redo their homes for a special holiday.",
        comments: "I enjoyed it, but that one mom from Long Island was despicable.",
        romance: false,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: false,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Holiday in Handcuffs",
        myScore: 55,
        summary: "Freshly dumped and knowing her family is expecting to meet a boyfriend over the holidays, a desperate woman kidnaps a man she's just met who happens to be engaged to someone else.",
        comments: "This one was painful. I know Melissa Joan Hart and Mario Lopez have been out saving the galaxy since my grandfather was in diapers, but yeesh.",
        romance: true,
        musical: false,
        mistakenIdentity: true, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "Holiday in the Wild",
        myScore: 46,
        summary: "A divorcee in her second act travels to Africa to volunteer at an elephant sanctuary.",
        comments: "White saviors and Kristen Davis? Barf. One of those white liberal embarrassments that Republicans point to at CPAC.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: true,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: false
    },
    {
        title: "Holiday Inn",
        myScore: 90,
        summary: "A burnt-out entertainer opens an inn in Connecticut that will only be open on holidays.",
        comments: "I love this movie but the minstrel routine has to get a hard 0 in Audience.",
        romance: true,
        musical: true,
        mistakenIdentity: false, 
        charmingInn: true,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: true,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Holiday Rush",
        myScore: 72,
        summary: "An unemployed radio DJ moves back into his childhood home after losing all his money.",
        comments: "Not bad!",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: true,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Home Alone",
        myScore: 79,
        summary: "A young boy is left home alone to the evil designs of a pair of crooks after his entire extended family misplaces him on their vacation to Paris.",
        comments: "I remember seeing this as a child at West Point and thinking that Kevin was a kid I wouldn't want to sit next to in class.",
        romance: false,
        musical: false,
        mistakenIdentity: true, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "Home for Christmas",
        myScore: 86,
        summary: "A nurse tells her family that she's bringing her boyfriend for Christmas - only she hasn't got a boyfriend, and she's only got four weeks to find one.",
        comments: "A rare Christmas series that gets two seasons, and they're both very good. The cinematography is warm and Christmassy. There's a lot more banging and boobs than I expected, though.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: false,
        famousActor: false,
        childActor: false,
        familyFriendly: false
    },
    {
        title: "How Sarah Got Her Wings",
        myScore: 43,
        summary: "A woman dies and as a final task before becoming a 'real' angel, has to help a man figure out how to love again.",
        comments: "This is one of those movies that I really just didn't understand. Did a person write this or is this one of those movies written by a Twitter bot?",
        romance: true,
        musical: false,
        mistakenIdentity: true, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: true,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "I'll Be Home For Christmas",
        myScore: 48,
        summary: "A single mother learns to trust her estranged father when he passes through town before Christmas.",
        comments: "Dull and forgettable.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "It's a Wonderful Life",
        myScore: 100,
        summary: "A bankrupt banker is convinced not to take his own life by a bumbling angel-to-be.",
        comments: "I have sobbed while describing the plot of this movie.",
        romance: true,
        musical: false,
        mistakenIdentity: true, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: true,
        famousActor: true,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Jingle All the Way",
        myScore: 61,
        summary: "An eager-to-please dad fights shoppers of all shapes and sizes to get the hottest action figure for his son for Christmas.",
        comments: "This man successfully won political office in California.",
        romance: false,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "Jingle Jangle: A Christmas Journey",
        myScore: 86,
        summary: "A once-great toymaker reconnects with his exucberant granddaughter and rediscovers his joy for life when he finds a magical toy in his workshop.",
        comments: "I have a lot of feelings about this one. There are parts I absolutely loved: Forest Whitaker, the actor who played Idi Amin, in a dance-off. Keegan-Michael Key doing anything. This movie bleeds Christmas. But, what's up with Buddy's powers? He doesn't seem to have any limitations or rules. The 'reveal' at the end is really weak, unless those children have never left their playroom before. Still, a fantastic romp.",
        romance: false,
        musical: true,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: true,
        famousActor: true,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Just Friends",
        myScore: 58,
        summary: "A successful music producer returns to his hometown for Christmas to try to win back the girl next door, but she's only ever seen him as a friend.",
        comments: "This was the first Ryan Reynolds movie I saw, and I found him so insufferable that I skipped his other purile comedies for years. In retrospect, it may be a suble send-up of movies like this where intolerable male protagonists try to woo women who've clearly stated their feelings against it, but it's a bit too cartoonish for me. The IMDB summary makes him out to be an incel, calling Amy Smart's character the 'woman whose rejection of him turned him into a ferocious womanizer.' Yeah, you can't control other people, but you can control your own actions, dude. Barf. *Extremely family-UNfriendly.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: true,
        realMagic: false,
        famousActor: false,
        childActor: true,
        familyFriendly: false
    },
    {
        title: "Let It Snow",
        myScore: 77,
        summary: "A group of teens in a snowed-in small town struggle to find themselves as Christmas descends.",
        comments: "I just want Liv Hewson to be able to play a non-binary character. There were some bits I really liked, and some bits that were really mediocre. Why do so many moms have vague cancer? The Mick Jagger dancing scene was unbearable.", 
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realSanta: false,
        famousActor: true,
        childActor: true,
        familyFriendly: false
    },
    {
        title: "Love Actually",
        myScore: 68,
        summary: "Family members' and strangers' lives intersect in the month leading up to Christmas.",
        comments: "I used to love this movie and now I HATE IT. It's just...kind of creepy and unsettling, especially the Lewinsky-inspired storyline with the Prime Minister.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realSanta: false,
        famousActor: true,
        childActor: true,
        familyFriendly: false
    },
    {
        title: "Love Hard",
        myScore: 84,
        summary: "Sure that she's found her other half on a dating app, a hopeless romantic travels across the country to his small town to surprise him for Christmas...only to discover he's been using someone else's photos.",
        comments: "It has strong WHILE YOU WERE SLEEPING vibes, without mentioning it at all. The trailer doesn't do it justice, as it focuses more on the catfishing event than on the character growth that follows. Just now realized that the title is a play on the protagonist's favorite Christmas movies, respectively. Given that I love one of those movies and hate the other, it's divisive.",
        romance: true,
        musical: false,
        mistakenIdentity: true, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: true,
        realMagic: false,
        famousActor: false,
        childActor: true,
        familyFriendly: false
    },
    {
        title: "Meet Me In St. Louis",
        myScore: 100,
        summary: "A young woman coming of age at the turn of the century falls in love with the boy next door.",
        comments: "I always cry at the Merry Little Christmas scene. Plus, knowing what Judy's life was like, you can't help but get verklempt.",
        romance: true,
        musical: true,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "Merry Kissmas",
        myScore: 32,
        summary: "A woman with a self-centered fiance shares a magical kiss with a handsome stranger, and spends the rest of the day looking for him.",
        comments: "Doris Roberts is a sexual predator in this and it's extremely cringe. Made me genuinely uncomfortable.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: true,
        famousActor: true,
        childActor: false,
        familyFriendly: false
    },
    {
        title: "Mickey's Christmas Carol",
        myScore: 77,
        summary: "A rich old duck learns the meaning of Christmas from other Disney characters.",
        comments: "The third-best adaptation, and a tight 26 minutes.",
        romance: true,
        musical: false,
        mistakenIdentity: false,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: true,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Miracle on 34th Street",
        myScore: 100,
        summary: "A little girl discovers that Santa Claus is real after he works as a Santa Claus at her mother's department store.",
        comments: "A Christmas classic that will make anyone wish Santa were real. When I was a kid I always secretly admired that there's no dad in the story. Maureen O'Hara is a badass on her own and totally allowed to find love again.",
        romance: true,
        musical: false,
        mistakenIdentity: false,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: true,
        famousActor: true,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "Miss Me This Christmas",
        myScore: 57,
        summary: "A couple signing their divorce papers on Christmas Eve starts to regret their split.",
        comments: "The 'nice' rich guy she goes on a date with is such a creep that I actually had to skip their date. BUT, the best friend is bi and into all kinds of things, so that's nice",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: true,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: false,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "My Christmas Inn",
        myScore: 80,
        summary: "A successful young woman travels to a small town in Alaska to flip the inn that belonged to her maiden great aunt.",
        comments: "Tia Mowry is relatable and likable AF.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: true,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: true,
        realMagic: false,
        famousActor: false,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "Operation Christmas Drop",
        myScore: 60,
        summary: "A Congressional aide is sent to Guam to pull the plug on any overly expensive military activities in order to win her boss reelection.",
        comments: "This is straight military propaganda and imperialism. And that CGI gekko was more than I could take.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: true,
        realMagic: false,
        famousActor: true,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "Pottersville",
        myScore: 66,
        summary: "A general store owner in a dying town revitalizes its tourism by posing as Bigfoot.",
        comments: "This has such a solid cast, but its energy is uneven, making it feels more 90s than it should.",
        romance: true,
        musical: false,
        mistakenIdentity: true, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: true,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: false
    },
    {
        title: "Santa Claus Conquers the Martians",
        myScore: 49,
        summary: "When a Martian father is disturbed by how much Earthling TV his children are watching, he kidnaps Santa Claus - and, inadvertently, two human children.",
        comments: "Santa in space! What could go wrong?",
        romance: false,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: true,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Santa Claus vs. The Devil",
        myScore: 51,
        summary: "When a devil named Pitch tries to turn the children of Mexico naughty, Santa himself must intercede to keep their hearts pure.",
        comments: "This movie is unwatchable -- unless you watch the version with Mike and the bots.",
        romance: false,
        musical: false,
        mistakenIdentity: false,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: true,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Scrooge",
        myScore: 77,
        summary: "A rich old man learns the meaning of Christmas from four ghosts and their songs.",
        comments: "Tied for fourth, with an edge for the songs, but boring unless someone is singing. It's way too long, and it's got those stifled British pauses. BUT you can't beat 'Thank You Very Much.'",
        romance: true,
        musical: true,
        mistakenIdentity: false,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Scrooged",
        myScore: 81,
        summary: "A rich old man who lives in New York City at a TV station in the 80s learns the meaning of Christmas from four ghosts.",
        comments: "The second-best one. It may seem preachy to have Bill Murray give an impassioned monologue about feeling things again at the end, but I think it's pitch-perfect and Charles Dickens would have approved. However, this one is not family-friendly. It's a bit scary, Carol Kane is wonderfully violent, and there are quite a few nipples.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: true,
        famousActor: true,
        childActor: false,
        familyFriendly: false
    },
    {
        title: "Sense, Sensibility, and Snowmen",
        myScore: 72,
        summary: "Two sisters go into business together, but the older isn't sure that the younger has what it takes to stick with a project. Plus, it's Christmas.",
        comments: "Somewhat disappointed that Eleanor, not Marianne, is more of the focus, but I guess she's the 'fun' one. On the other hand, she's pretty relatable. I don't totally understand why she and Edward are so crazy about each other though. Also, I'm really tired of actors expressing every emotion by opening their mouths.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: true,
        realMagic: false,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Serendipity",
        myScore: 71,
        summary: "Years after a chance meeting at a department store, two long-lost potential lovers try to find each other one last time in order to find closure before marrying other people. Also, it's Christmas.",
        comments: "Man, I loved this movie when it came out, but that was 20 years ago, and it shows. It's still enjoyable, though.",
        romance: true,
        musical: false,
        mistakenIdentity: false,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: false,
        famousActor: false,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "Sherlock Holmes: The Case of the Chrismtas Pudding",
        myScore: 81,
        summary: "Dr. Watson is concerned after a death row inmate who's threatened Sherlock Holmes escapes from prison without leaving any clues behind.",
        comments: "This was great fun - the chemistry between Holmes & Watson is perfect, and Watson is both capable and emotional. I won't spoil how the convict escapes, but it's very satisfying.",
        romance: false,
        musical: false,
        mistakenIdentity: true,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: false,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Single All the Way",
        myScore: 77,
        summary: "Two roommates plan to fake a relationship to please their family, but when one of them starts dating a new person, real feelings are revealed.",
        comments: "There's some real man-on-man kissing, no chaste pecks or single-moment kisses. Open-mouthed stuff. I don't really enjoy watching people kiss, but, at least the gay characters are getting the same treatment as straight characters. And, it's not a ronchy movie, making space in the family-friendly realm for an LGBTQ relationship. Huzzah! Also, Kathy Najimy and BARRY BOSTWICK are amazing. Barry Bostwick! KATHY NAJIMY. Come on.",
        romance: true,
        musical: false,
        mistakenIdentity: false,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: true,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Sister Swap: A Hometown Holiday",
        myScore: 82,
        summary: "A young woman helps renovate her late uncle's movie theater in preparation for its reluctant sale.",
        comments: "According to Hallmark's release schedule, this is the Sister Swap you should watch first -- and IMO, the superior swap. It has a stronger structure and character arc, and I have fonder memories of Annie Banks than Victoria the Cupcake Queen. I know that's not fair, but it is what it is. You don't *need* to watch both, but you should. Bonus points for having a character in a wheelchair who isn't fawned over and lives life 'normally.'",
        romance: true,
        musical: false,
        mistakenIdentity: false,
        charmingInn: true,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: true,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Sister Swap: Christmas in the City",
        myScore: 77,
        summary: "A young woman helps her sister's restaurant throw an extravagant party for charity while figuring out what's next for her life.",
        comments: "One of the most effortlessly diverse Hallmark movies I've seen - a black man dating a white woman is NOT something you see very often. Plus, a gay romance with a kiss, a parent in a wheelchair (played by an actor with prosthetic legs), and Kevin Nealon. Plus, there's real joy in real-life sisters Kimberly and Ashley in every scene they share together.",
        romance: true,
        musical: false,
        mistakenIdentity: false,
        charmingInn: true,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: true,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Snowbound for Christmas",
        myScore: 62,
        summary: "A graphic designer finds herself trapped at an empty luxury inn with her hot new boss over Christmas.",
        comments: "A total lack of chemistry between the two leads. WAY too many long conversation scenes. And then they still work together AND display PDA in their office of only TWELVE PEOPLE? It's an HR disaster waiting to happen.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: true,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: true,
        realMagic: false,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "Star Wars Holiday Special",
        myScore: 41,
        summary: "Chewie and Han run into trouble as they head back to Kashyyyk for Life Day.",
        comments: "An absolute mess of an idea. Not even nostalgia, Boba Fett, and Bea Arthur can save this one.",
        romance: false,
        musical: true,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: true,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {   title: "The Apartment",
        myScore: 100,
        summary: "A low-level insurance company employee finds his career prospects improving after he lends his bachelor pad to a powerful executive to use for his extramarital affair.",
        comments: "Does that summary sound like the least Christmassy thing ever? Then I'm happy for you. The fact is, Christmas isn't a happy time for everyone, and this film uses it as a centerpiece of loneliness -- so it's extremely Christmassy, but in a negative way. I *LOVE* this movie (it's perfect, obvs) and watched it approximately once a week my sophomore year of college. Billy Wilder, once again, knocks it out of the park. I'm so glad that, as far as I've read, Jack Lemmon was one of the nicest people in Hollywood. CW: attempted suicide.",
        romance: true,
        musical: false,
        mistakenIdentity: false,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: false,
        famousActor: false,
        childActor: false,
        familyFriendly: false
    },
    {
        title: "The Christmas Chronicles",
        myScore: 71,
        summary: "Two bickering siblings left alone on Christmas Eve discover that Santa is real and that they have to help him recover his reindeer and save Christmas. Also, Santa is hot.",
        comments: "This movie should have a higher rating - it's got a Real Santa played by a grown-up child actor who's also an aging well-known actor - but it was a bit too childish for me. And we get that Santa is sexy. It's Kurt Russell. The prison song was over-the-top, even for me. But if you have kids, they'll probably like it.",
        romance: false,
        musical: true,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: true,
        famousActor: true,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "The Christmas Contest",
        myScore: 70,
        summary: "A pair of exes whose relationship failed because of their competitiveness face off in a series of Christmas-based challenges.",
        comments: "There have been a serious uptick in female writers and directors at Hallmark the past two years! Excellent to see. As far as the story goes, I've noticed that the B plots often have more depth to them than the main romance (here, the grandmother's journey to embrace life again after her husband's death, the child being raised by his grandmother, the senior center being an important and underfunded part of the community), but making them the main plot would be too much conflict for one of these all-smiles-stories. Still - not bad.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: false,
        famousActor: false,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "The Christmas Chronicles: Part Two",
        myScore: 75,
        summary: "A young girl runs away from home to the North Pole, where a disgruntled former elf is trying to take down Santa Claus.",
        comments: "Kurt Russell makes a great Santa, but I could do without a 10-minute ooh-and-ahh tour of the North Pole. And the song and dance number. And the protagonist borderline flirting with her dead 13-year-old father. And the weirdly long and slow rendition of O Christmas Tree. Lots of telling AND showing, re: Mrs. Claus's potion abilities. I was pleased to see Julian Dennison get some more screen time, though.",
        romance: false,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: true,
        famousActor: true,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "The Family Stone",
        myScore: 67,
        summary: "A snooty Manhattanite travels to the boonies to meet her fiance's large, judgemental family on Christmas.",
        comments: "This movie was so disappointing. Such a great cast, but the trailer shows the only parts that aren't boring. The logic of the story doesn't make any sense, and using cancer to make us feel something at the end is a dirty trick that only makes us feel angry that the movie wasn't better.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: true,
        realMagic: false,
        famousActor: true,
        childActor: true,
        familyFriendly: false
    },
    {
        title: "The Holiday",
        myScore: 42,
        summary: "An L.A. businesswoman and an English cottage owner swap homes to rediscover themselves.",
        comments: "Jack Black is the best part and he's way underused. The only movie I've ever hit my head against the wall while watching.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: true,
        realMagic: false,
        famousActor: false,
        childActor: false,
        familyFriendly: false
    },
    {
        title: "The Holiday Calendar",
        myScore: 80,
        summary: "A young woman finds more than chocolates when a magical advent calendar predicts events in her life.",
        comments: "I liked the concept but I couldn't get over the lead actor's uneven face.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: true,
        famousActor: true,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "The Knight Before Christmas",
        myScore: 47,
        summary: "A knight is sent to the future by a magical hag, where he meets a young woman who doesn't have time for Christmas.",
        comments: "I don't know what I expected.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: true,
        famousActor: false,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "The Muppet Christmas Carol",
        myScore: 100,
        summary: "A rich old man learns the meaning of Christmas from the Muppets.",
        comments: "Funny, delightful, AND scary? Also, Michael Caine and Gonzo. This movie truly has it all.",
        romance: true,
        musical: true,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: true,
        famousActor: true,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "The Nightmare Before Christmas",
        myScore: 85,
        summary: "The king of Halloween discovers Christmas exists and kidnaps Santa to make his own town more jolly.",
        comments: "A classic for two holidays",
        romance: true,
        musical: true,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: true,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "The Princess Switch",
        myScore: 40,
        summary: "A duchess and a baker discover they are identical distant relatives, and switch places so the duchess can experience normal life before her arranged marriage.",
        comments: "I don't know what I expected",
        romance: true,
        musical: false,
        mistakenIdentity: true,
        charmingInn: true,
        royalFairyTale: true,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: true,
        famousActor: false,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "The Princess Switch 2: Switched Again",
        myScore: 43,
        summary: "Long-long twin cousins switch places to fix their relationships, but a third twin cousin throws a wrench into the plans when she kidnaps one of them and takes their place.",
        comments: "I DON'T UNDERSTAND HOW AMBER AND HER CHRISTMAS PRINCE EXIST IN THIS WORLD WHEN THE DUCHESS CLEARLY WATCHED THE CHRISTMAS PRINCE WITH THE BAKER IN THE FIRST MOVIE.",
        romance: true,
        musical: false,
        mistakenIdentity: true, 
        charmingInn: false,
        royalFairyTale: true,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: false,
        famousActor: false,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "The Princess Switch 3: Romancing the Star",
        myScore: 49,
        summary: "When a priceless artifact is stolen from the royal archives, identical royal cousins enlist their ne'er-do-well and also identical royal cousin to steal it back, to-catch-a-thief style.",
        comments: "Vanessa Hudgeons was super busy last year. Good on her for producing as well. But...it's awful. Don't expect a heart-pounding heist. It's fine for people with underlying heart conditions to watch this film. The tango/laser tango part was the best-edited and best-directed, but even that was extremely campy. If you're watching this to complete the trilogy, though, that shouldn't be a surprise.",
        romance: true,
        musical: false,
        mistakenIdentity: true,
        charmingInn: false,
        royalFairyTale: true,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: true,
        famousActor: false,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "The Santa Box",
        myScore: 64,
        summary: "A teen hates Christmas because of the many tragedies that have befallen her family then -- until a seemingly magic box appears on her doorstep, promising her Christmas wishes will come true.",
        comments: "This came out in 2020, but it looks like it came out way longer ago than that. Also, the director insists on including 'Spanky' as part of his credited name. There's some eyebrow-raising allusions to Otto possibly being a pedophile, which probably had to be included so children around the world wouldn't suddenly befriend the Nazi pedo next door in the hopes of their Christmas wishes coming true. I have to admit, I was really hoping he would be the real Santa Claus. Also, bullies in movies stress me out. Bigtime. Dislike.",
        romance: true,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: false,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "The Santa Clause",
        myScore: 71,
        summary: "After accidentally killing Santa, a divorced dad is forced to take up the mantle.",
        comments: "I remember being super annoyed by the clearly Jewish 'punk' elf - more because he's punk and trying to cash in on the Rufio look. The fact that he's Jewish is hilarious",
        romance: false,
        musical: false,
        mistakenIdentity: false, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: true,
        famousActor: true, 
        childActor: true,
        familyFriendly: true
    },
    {
        title: "The Santa Stakeout",
        myScore: 69,
        summary: "A pair of quibbling detectives go undercover as newlyweds to stake out a Santa-for-hire's home when they suspect him of being an art thief.",
        comments: "It's realllly hard for me to watch serious or bumbling police procedurals because they're all reflective of real life. If they hadn't been a tepid romance then it would have been a lot less cringey. Joey Pants carries the whole film. His acting is insane.",
        romance: true,
        musical: false,
        mistakenIdentity: true,
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: true,
        familyFriendly: true
    },
    {
        title: "Trading Places",
        myScore: 79,
        summary: "Two manipulative brothers switch the lives of a stock broker and a con mon in the hopes of winning a bet about nature vs. nuture.",
        comments: "There is certainly some unnecessary toplessness, but it was the 80s.",
        romance: true,
        musical: false,
        mistakenIdentity: true, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: false
    },
    {
        title: "While You Were Sleeping",
        myScore: 81,
        summary: "A lonely young woman finds herself in the middle of a raucous, loving family when she accidentally tricks them into believing that she's engaged to their comatose son.",
        comments: "A rare entry as Christmas Day happens at the inciting incident, instead of the climax. And I certainly don't always cry at the end. You cry at the end",
        romance: true,
        musical: false,
        mistakenIdentity: true, 
        charmingInn: false,
        royalFairyTale: false,
        familyIsNumber1: true,
        countryVsCity: false,
        realMagic: false,
        famousActor: true,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "White Christmas",
        myScore: 87,
        summary: "Two successful song-and-dance men help their former commanding officer bring business to his struggling Connecticut inn.",
        comments: "Another minstrel routine...oops. At least they didn't do black face for this one. I'm sure you don't tear up at the end when the general sees all his men because WHO WOULD DO THAT",
        romance: true,
        musical: true,
        mistakenIdentity: false,
        charmingInn: true,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: false,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    },
    {
        title: "You Can't Fight Christmas",
        myScore: 71,
        summary: "A hotel owner clases with his Christmas-loving decoroator.",
        comments: "I almost had a heart attack when I realized that this movie and Miss Me This Christmas exist in the same universe and happen simulataneously. What a choice",
        romance: true,
        musical: false,
        mistakenIdentity: false,
        charmingInn: true,
        royalFairyTale: false,
        familyIsNumber1: false,
        countryVsCity: false,
        realMagic: false,
        famousActor: false,
        childActor: false,
        familyFriendly: true
    }
]

    /*  title:
        myScore:
        summary:
        comments: 
        romance: 
        musical: 
        mistakenIdentity: 
        charmingInn: 
        royalFairyTale: 
        familyIsNumber1: 
        countryVsCity: 
        realMagic: 
        famousActor: 
        childActor: 
        familyFriendly:
        */

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

function chooseWorstMovie(){
  let worstMovies = [];
  for (i = 0; i < XmasMovies.length; i++){
    if (XmasMovies[i].myScore <= 50) {
      worstMovies.push(XmasMovies[i].title);
    }
  }
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
    
}

function oneMore() {
  let worstMovies = [];
  for (i = 0; i < XmasMovies.length; i++){
    if (XmasMovies[i].myScore <= 50) {
      worstMovies.push(XmasMovies[i].title);
    }
  }
    console.log(worstMovies);
    
    let numOfMovies = worstMovies.length;
    
    let number = Math.floor(Math.random() * numOfMovies);

    let worstMovie = worstMovies[number];
  let movieOutput = document.querySelector("#movieRecommendations");
  movieOutput.innerHTML += '<h1>..."' + worstMovie + '"?'

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
 //--------- END of the movie chooser function: final curly brace below ------------ END OF FUNCTION END OF FUNCTION
 //___________maybe i should define the final movie chooser function outside this function and call it inside?____________//

   
//publish some details too?
//have those pop up when you hover over the title?
}
