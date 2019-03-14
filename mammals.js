/* Elements
======================================== */
var quizFormElement         = document.getElementById("js-quiz-form");

var ordningInputElement     = document.getElementById("js-ordning");
var familjInputElement      = document.getElementById("js-familj");
var underfamiljInputElement = document.getElementById("js-underfamilj");
var artInputElement         = document.getElementById("js-art");

var correctStatElement      = document.getElementById("js-stat-correct");
var incorrectStatElement    = document.getElementById("js-stat-incorrect");
var percentStatElement      = document.getElementById("js-stat-percent");


/* Event listeners
======================================== */
if (quizFormElement.addEventListener) // For all major browsers, except IE 8 and earlier
{
    quizFormElement.addEventListener("submit", trySubmitForm);
} 
else if (x.attachEvent) // For IE 8 and earlier versions
{
    quizFormElement.attachEvent("submit", trySubmitForm);
}


/* Other variables
======================================== */
// add some "activeMammal" object

/* Stats */
// correctStatamount, incorrect stat amount, percent stat amount


/* Functions
======================================== */
function initializeQuiz()
{
    // set activeMammal to a random mammal
}

function getRandomMammal()
{
    // return a random mammal object
}

function trySubmitForm()
{
    if (!validateForm()) { return; }

    submitForm();
}

/**
 * Validates the quiz form.
 * @returns {boolean} Whether the answers matches the current mammal or not
 */
function validateForm()
{
    ordningInputElement.classList.add("invalid-answer");
    familjInputElement.classList.add("invalid-answer");
    underfamiljInputElement.classList.add("invalid-answer");
    artInputElement.classList.add("invalid-answer");
    return false;
}

function incrementCorrectStat()
{
    // add a point to correct score, recalculate percent stat and display
}

function incrementIncorrectStat()
{
    // add a point to incorrect score, recalculate percent stat and display
}

function recalculatePercentStat()
{
    // just recalculate the percent stat
}

function updateStatisticsText()
{
    // update correct answer text, incorrect answer text and
    // the percent text
}

/* Old code
var MAMMALS = {};
MAMMALS.AvailableMammals = [
    new Mammal("Rovdjur", "Björnar", "Ingen", "brunbjörn"),
    new Mammal("Rovdjur", "Hunddjur", "Ingen", "varg"),
    new Mammal("Äkta insektsätare", "Hamsterartade gnagare", "Sorkar", "fjällämmel")
]

// Mammal constructor
function Mammal(ordning, familj, underfamilj, art)
{
    this.ordning = ordning;
    this.familj = familj;
    this.underfamilj = underfamilj;
    this.art = art;
}

// Called when the DOM is ready
$(function()
{
    MAMMALS.PreviousAnimalNumber = -1;
    SetNewAnimal();

    $("#ordning").change(RemoveHighlight);
    $("#familj").change(RemoveHighlight);
    $("#underfamilj").change(RemoveHighlight);
    $("#art").change(RemoveTextboxHighlight);
    $("#submitButton").click(Submit);
});

function SetNewAnimal()
{
    // Clears the text input
    $("#art").val("");

    let newAnimalNumber = -1;
    // Assure that the animal is not the same as the last time
    do 
    {
        newAnimalNumber = Math.round(Math.random() * (MAMMALS.AvailableMammals.length -1));
    }
    while(newAnimalNumber === MAMMALS.PreviousAnimalNumber);

    MAMMALS.CorrectAnimal = MAMMALS.AvailableMammals[newAnimalNumber];

    // TODO: Change "title" to "src" when all the images are in
    $("#quizImg").attr("title", `../Images/${MAMMALS.CorrectAnimal.art.toLowerCase()}.jpg`);

    MAMMALS.PreviousAnimalNumber = newAnimalNumber;
}

function Submit()
{
    let ordning = $("#ordning").val();
    let familj = $("#familj").val();
    let underfamilj = $("#underfamilj").val();
    let art = $("#art").val().toLowerCase();
    let correct = MAMMALS.CorrectAnimal;

    if(ordning === correct.ordning
    && familj === correct.familj
    && underfamilj === correct.underfamilj
    && art === correct.art)
    {
        CorrectAnswer();
        SetNewAnimal();
    }
    else
    {
        IncorrectAnswer();
        HighlightMistakes();
        // TODO: Make a box pop up somewhere close
        // to the answer boxes that lets you correct all the mistakes
        // (gives you 1 incorrect answer per field)
    }
}

function CorrectAnswer()
{
    let correct = $("#correct");
    correct.text(parseInt(correct.text()) + 1);
    CalculateProportion();
}

function IncorrectAnswer()
{
    let input = confirm("Vill du rätta dina svar? (Detta kommer att ändras till en knapp snart)");
    SetAnswersCorrect(input);

    let incorrect = $("#incorrect");
    incorrect.text(parseInt(incorrect.text()) + 1);
    CalculateProportion();
}

function CalculateProportion()
{
    let proportion = $("#proportion");
    let amountCorrect = parseInt($("#correct").text());
    let amountIncorrect = parseInt($("#incorrect").text());
    let tries = amountCorrect + amountIncorrect;

    proportion.text(`${Math.round((amountCorrect / tries) * 100)}%`);
}

function SetAnswersCorrect(input)
{
    if (input === true)
    {
        let ordning = $("#ordning");
        let familj = $("#familj");
        let underfamilj = $("#underfamilj");
        let art = $("#art");
        let correct = MAMMALS.CorrectAnimal;
    
        ordning.val(correct.ordning);
        familj.val(correct.familj);
        underfamilj.val(correct.underfamilj);
        art.val(correct.art);

        ordning.removeClass("incorrectHighlight");
        familj.removeClass("incorrectHighlight");
        underfamilj.removeClass("incorrectHighlight");
        art.removeClass("incorrectHighlight");
    }
}


function HighlightMistakes()
{
    let ordning = $("#ordning");
    let familj = $("#familj");
    let underfamilj = $("#underfamilj");
    let art = $("#art");
    let correct = MAMMALS.CorrectAnimal;

    if (ordning.val() !== correct.ordning)
    {
        ordning.addClass("incorrectHighlight");
    }
    
    if (familj.val() !== correct.familj)
    {
        familj.addClass("incorrectHighlight");
    }

    if (underfamilj.val() !== correct.underfamilj)
    {
        underfamilj.addClass("incorrectHighlight");
    }

    if (art.val().toLowerCase() !== correct.art)
    {
        art.addClass("incorrectHighlight");
    }

    // Add a css class to the parent of the select id that is wrong
    // Also need to remove those classes once the player changes the value of the select or input tags.
}

// Only works for "select" html tags. Not text box input!
function RemoveHighlight()
{
    $(`#${this.name}`).removeClass("incorrectHighlight");
}

function RemoveTextboxHighlight()
{
    $("#art").removeClass("incorrectHighlight");
}
*/