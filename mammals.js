/* Elements
======================================== */
var quizFormElement         = document.getElementById("js-quiz-form");
var mammalImageElement      = document.getElementById("js-mammal-image");

var ordningInputElement     = document.getElementById("js-ordning");
var familjInputElement      = document.getElementById("js-familj");
var underfamiljInputElement = document.getElementById("js-underfamilj");
var artInputElement         = document.getElementById("js-art");

var correctStatElement      = document.getElementById("js-stat-correct");
var incorrectStatElement    = document.getElementById("js-stat-incorrect");
var percentStatElement      = document.getElementById("js-stat-percent");


/* Event listeners
======================================== */
/* Window onload */
if (window.addEventListener)
{
    window.addEventListener("load", initializeQuiz, false);
}
else if (window.attachEvent)
{
    window.attachEvent("onload", initializeQuiz);
}

/* Quiz submit */
if (quizFormElement.addEventListener)
{
    quizFormElement.addEventListener("submit", trySubmitForm, false);
} 
else if (quizFormElement.attachEvent)
{
    quizFormElement.attachEvent("submit", trySubmitForm);
}


/* Other variables
======================================== */
const MAMMALS_IMG_FOLDER = "img/mammals/"

/* Statistics */
var correctStatAmount = 0;
var incorrectStatAmount = 0;
var percentStatAmount = 0;

var activeMammal = {};
var allMammals = 
[
    new Mammal("brunbjörn",       "rovdjur",           "björnar",               "ingen",  "brunbjörn.jpg"),
    new Mammal("varg",            "rovdjur",           "hunddjur",              "ingen",  "varg2.jpg"),
    new Mammal("rödräv",          "rovdjur",           "hunddjur",              "ingen",  "rödräv.jpg"),
//  new Mammal("fjällräv",        "rovdjur",           "hunddjur",              "ingen",  "fjällräv.jpg"), //missing img
    new Mammal("järv",            "rovdjur",           "mårddjur",              "ingen",  "järv.jpg"),
    new Mammal("grävling",        "rovdjur",           "mårddjur",              "ingen",  "grävling.jpg"),
    new Mammal("mård",            "rovdjur",           "mårddjur",              "ingen",  "mård.jpg"),
    new Mammal("mink",            "rovdjur",           "mårddjur",              "ingen",  "mink.jpg"),
    new Mammal("hermelin",        "rovdjur",           "mårddjur",              "ingen",  "hermelin.jpg"),
    new Mammal("lodjur",          "rovdjur",           "kattdjur",              "ingen",  "lodjur.jpg"),
    new Mammal("älg",             "partåiga hovdjur",  "hjortdjur",             "ingen",  "älg.jpg"),
    new Mammal("kronhjort",       "partåiga hovdjur",  "hjortdjur",             "ingen",  "kronhjort.jpg"),
    new Mammal("ren",             "partåiga hovdjur",  "hjortdjur",             "ingen",  "ren.jpg"),
    new Mammal("dovhjort",        "partåiga hovdjur",  "hjortdjur",             "ingen",  "dovhjort.jpg"),
    new Mammal("rådjur",          "partåiga hovdjur",  "hjortdjur",             "ingen",  "rådjur.jpg"),
    new Mammal("myskoxe",         "partåiga hovdjur",  "slidhorndjur",          "ingen",  "myskoxe.jpg"),
    new Mammal("vildsvin",        "partåiga hovdjur",  "svindjur",              "ingen",  "vildsvin.jpg"),
    new Mammal("fälthare",        "hardjur",           "harar",                 "ingen",  "fälthare2.jpg"),
    new Mammal("bäver",           "gnagare",           "bävrar",                "ingen",  "bäver2.jpg"),
    new Mammal("ekorre",          "gnagare",           "ekorrar",               "ingen",  "ekorre2.jpg"),
    new Mammal("fjällämmel",      "gnagare",           "hamsterartade gnagare", "sorkar", "fjällämmel2.jpg"),
    new Mammal("åkersork",        "gnagare",           "hamsterartade gnagare", "sorkar", "åkersork.jpg"),
    new Mammal("mindre skogsmus", "gnagare",           "råttdjur",              "möss",   "mindre skogsmus2.jpg"),
    new Mammal("igelkott",        "äkta insektsätare", "igelkottdjur",          "ingen",  "igelkott.jpg"),
    new Mammal("mullvad",         "äkta insektsätare", "mullvadsdjur",          "ingen",  "mullvad.jpg"),
    new Mammal("näbbmus",         "äkta insektsätare", "näbbmöss",              "ingen",  "näbbmus.jpg"),
    new Mammal("fladdermus",      "fladdermöss",       "näbbmöss",              "ingen",  "fladdermus.jpg")
]


/* Functions
======================================== */
function initializeQuiz()
{
    activeMammal = getRandomMammal();
    displayActiveAnimal();
}

function Mammal(art, ordning, familj, underfamilj, imgFileName)
{
    this.art = art;
    this.ordning = ordning;
    this.familj = familj;
    this.underfamilj = underfamilj;
    this.imgFileName = imgFileName;
}

function getRandomMammal()
{
    return allMammals[Math.floor(Math.random() * allMammals.length)];
}

function displayActiveAnimal()
{
    mammalImageElement.src = MAMMALS_IMG_FOLDER.concat(activeMammal.imgFileName);
}

function trySubmitForm()
{
    if (!validateForm()) 
    { 
        incrementIncorrectStat();
        return; 
    }

    incrementCorrectStat();
    rerollActiveMammal();
}

/**
 * Validates the quiz form. Adds styling to invalid answers.
 * @returns {boolean} Whether the answers matches the current mammal or not
 */
function validateForm()
{
    var ordningIsCorrect     = ordningInputElement.value.toLowerCase()     === activeMammal.ordning;
    var familjIsCorrect      = familjInputElement.value.toLowerCase()      === activeMammal.familj;
    var underfamiljIsCorrect = underfamiljInputElement.value.toLowerCase() === activeMammal.underfamilj;
    var artIsCorrect         = artInputElement.value.toLowerCase()         === activeMammal.art;

    ordningInputElement.classList.remove("invalid-answer");
    familjInputElement.classList.remove("invalid-answer");
    underfamiljInputElement.classList.remove("invalid-answer");
    artInputElement.classList.remove("invalid-answer");

    if (!ordningIsCorrect)     { ordningInputElement.classList.add("invalid-answer"); }
    if (!familjIsCorrect)      { familjInputElement.classList.add("invalid-answer"); }
    if (!underfamiljIsCorrect) { underfamiljInputElement.classList.add("invalid-answer"); }
    if (!artIsCorrect)         { artInputElement.classList.add("invalid-answer"); }

    return ordningIsCorrect && familjIsCorrect && underfamiljIsCorrect && artIsCorrect;
}

function rerollActiveMammal()
{
    var newMammal = getRandomMammal();

    while (newMammal === activeMammal)
    {
        newMammal = getRandomMammal();
    }

    activeMammal = newMammal;
    displayActiveAnimal();
}

function incrementCorrectStat()
{
    correctStatAmount++;
    recalculatePercentStat();
    updateStatisticsText();
}

function incrementIncorrectStat()
{
    incorrectStatAmount++;
    recalculatePercentStat();
    updateStatisticsText();
}

function recalculatePercentStat()
{
    percentStatAmount = Math.round( (correctStatAmount / (correctStatAmount + incorrectStatAmount)) * 100 ) 
}

function updateStatisticsText()
{
    correctStatElement.innerText   = correctStatAmount;
    incorrectStatElement.innerText = incorrectStatAmount;
    percentStatElement.innerText   = percentStatAmount.toString().concat("%");
}
