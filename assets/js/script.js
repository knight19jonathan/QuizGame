// list of global variabls; QUESTIONS ARRAY (contain all questions and answers)
//questions array
var start = document.querySelector("#realStart");
var winsSpan = document.querySelector("#spanWins");
var lossesSpan = document.querySelector("#spanLosses");
var timeLeftSpan = document.querySelector("#spanCounter");
var questionBox = document.querySelector("#questionBar");
var answerBoxA = document.querySelector("#boxA");
var answerBoxB = document.querySelector("#boxB");
var answerBoxC = document.querySelector("#boxC");
var answerBoxD = document.querySelector("#boxD");
var submitScore = document.querySelector("#submit");
var playerName = document.querySelector("#playerNamerF");
var liPlayer = document.querySelector("#liPlayer");
var liscore = document.querySelector("#liscore");
let user = { username: "", userScore: 0 };
var resetbtn = document.querySelector("#reset");
var scoreDisplay = document.querySelector("#spanScore")
var highscoreList = document.getElementById("rankedScores");
var hideStart = document.querySelector("#welStart");
var answerGoodBad = document.querySelector("#gameMatt");
var answerBoxArea = document.querySelector("#answerContainer");
var answerContaninerBox = document.querySelector(".answerBox");
var highscore = document.createElement("li");
var answer;
var currentQuestion = 0;
var timeLeft = 25;
var timer;
timeLeftSpan.textContent = timeLeft;
var score = 0;
scoreDisplay.textContent = score;
var isPlaying = false;
var gamerOver = false;


// QUESTION ARRAY 
let questions = [ 
    {
        question: "What is the most popular sport in film making?",
        choiceA: "Baseball",
        choiceB: "Karate",
        choiceC: "Boxing",
        choiceD: "Football",
        correctanswer: "Boxing",

    },
    {
        question: "If you threw football at a 1000 feet per second to the north or south in the Northern Hemisphere the Coriolis phenomenon would cause it sway in what direction?",
        choiceA: "Right",
        choiceB: "Down",
        choiceC: "Left",
        choiceD: "Up",
        correctanswer: "Right"

    },
    {
        question: "Redshifting occurs when?",
        choiceA: "Light shifting across a curced surface triggers lens flare",
        choiceB: "Objects moving away from the point of view cause light to stretch out longer wavelength on the electrmagnetic spectrum",
        choiceC: "Light becoming trapped in a black hole",
        choiceD: "When the nitrus capsule is added to the fuel mix in the fuel injectors of a combustion engine",
        correctanswer: "Objects moving away from the point of view cause light to stretch out longer wavelength on the electrmagnetic spectrum"

    },
    {
        question: "The gravitational force tugging between two bodies depends on?",
        choiceA: "The relation of time and speed between the two bodies",
        choiceB: "the innate Newtonian force being acted on each object.",
        choiceC: "how much speed is imparted onto each object.",
        choiceD: "how massive each one is and how far apart the two lie.",
        correctanswerIndex: "how massive each one is and how far apart the two lie."

    },
    {
        question: "Einstein's that established space and time were inextricably connected was called",
        choiceA: "The Theory of Relativity, published 1895",
        choiceB: "The General Theory of Relativity, published 1915",
        choiceC: "The Real Relatives of Atlanta, published 1945",
        choiceD: "The Theory of Special Relativity, published 1905",
        correctanswer: "The Theory of Special Relativity, published 1905"

    },
    {
        question: "Gravitational lensing occurs when?",
        choiceA: "Gravitation forces change as objects move away from eachother",
        choiceB: "Light escaping a black hole causing changes in gravity at its focus point",
        choiceC: "Massive release of energy changing the fabric of space-time relative to an object",
        choiceD: "Objects appearing in multiple places at once the light observed from them passes massive objects",
        correctanswer: "Objects appearing in multiple places at once the light observed from them passes massive objects"

    },
    {
        question: "When a star collapses into a supernova at what speed is matter jettisoned into space?",
        choiceA: "9,000-25,000 miles per hour",
        choiceB: "9,000-25,000 miles per second",
        choiceC: "9,000-25,000 miles per millisecond",
        choiceD: "9000^53 miles per minute",
        correctanswer: "9,000-25,000 miles per second"

    },
    {
        question: "Scientist theorize a typical supernova has a blast radius of?",
        choiceA: "300 parsecs",
        choiceB: "300 lightyears",
        choiceC: "600-700 parsecs",
        choiceD: "900 lightyears",
        correctanswer: "300 parsecs"

    },
    {
        question: "The closest oberved supernova was how far away?",
        choiceA: "200 parsecs",
        choiceB: "800 parsecs",
        choiceC: "12 parsecs",
        choiceD: "300 parsecs",
        correctanswer: "200 parsecs"
    },
    {
        question: "All matter makes up what percentage of the universe?",
        choiceA: "51%",
        choiceB: "14%",
        choiceC: "100%",
        choiceD: "5%",
        correctanswer: "5%"

    },
    {
        question: "What caused event scientist to believe the universe was expanding?",
        choiceA: "The Da Vinci Code",
        choiceB: "Images captured by the Hubble Telescope in 1998",
        choiceC: "Images captured by Voyager 1 in 2012",
        choiceD: "Observatsion from the International Space Station (ISS) in 2009",
        correctanswer: "Images captured by the Hubble Telescope in 1998"

    },
    {
        question: "What was the first man made insterstellar object?",
        choiceA: "Voyager 1",
        choiceB: "Artemis 1",
        choiceC: "Lucy 2",
        choiceD: "Mariner 10",
        correctanswer: "Voyager 1"

    },
    {
        question: "At what distance would someone walking away from you appear to start sinking into the earth as they crosed over the horizon?",
        choiceA: "3.3 kilomteres",
        choiceB: "3.1 miltes",
        choiceC: "13.1 miles",
        choiceD: "6 miles",
        correctanswer: "3.1 miltes"

    },
    {
        question: "The Northern and South lights can seen when?",
        choiceA: "Methane released from cows combusts in the atmosphere",
        choiceB: "Cosmic raiation from outisde the soloar system hits the earth's atmosphere",
        choiceC: "When the Earth's magnetosphere deflects away solar wind",
        choiceD: "When some get's the number 7 at the taco truck.",
        correctanswer: "When the Earth's magnetosphere deflects away solar wind"

    },
    {
        question: "What is the most common type of supernova?",
        choiceA: "Supernova C",
        choiceB: "Supernova B",
        choiceC: "Supernova A",
        choiceD: "Supernova X",
        correctanswer: "Supernova C"
    }
];

//LOAD QUESTION AND ANSWER ARRAY TO THE GAME SCREEN 

function loadQuestion() {
    questionBox.textContent = questions[currentQuestion].question;
    answerBoxA.textContent = questions[currentQuestion].choiceA;
    answerBoxB.textContent = questions[currentQuestion].choiceB;
    answerBoxC.textContent = questions[currentQuestion].choiceC;
    answerBoxD.textContent = questions[currentQuestion].choiceD;
}
// CHECKS TO SEE IF THE ANSWER IS CORRECT AND ADVANCES TO THE NEXT QUESTION ALSO ENDS THE GAME IF THE TIMER ELAPSES // LOOKED AT IMPLEMENTING A KILL COMMAND FOR PLAYERS FINISHING FASTER THAN TIMR BUT RAN OUT OF TIME

function checkAnswer(answer) {
    // console.log(answer);
    // console.log(currentQuestion);
     
    if (answer === questions[currentQuestion-1].correctanswer) {
        // console.log(currentQuestion)
        score++;
        scoreDisplay.textContent = score;
        answerCorrect();
        loadQuestion;
        
    } else {
        timeLeft--;  // DELIBERATE PUNISHMENT FOR THE PLAYER NOT ANSWERING THE QUESTION CORRECTLY 
        answerWrong();
        loadQuestion();
    }

    if (timeLeft < 1) {
        timeUp();
        clearQuestion();

    } else if(currentQuestion === [15]) {
        timeUp();
        clearQuestion();
    
    } else {
        loadQuestion();
    }
    
}
// CLEARS THE ANSWERED QUESTON FROM THE GAME SCREEN

function clearQuestion() {
    questionBox.textContent = "";
    answerBoxA.textContent = "";
    answerBoxB.textContent = "";
    answerBoxC.textContent = "";
    answerBoxD.textContent = "";
}

//RECORDS SCORE TO CONSOLE LOG AND PROMPTS ALERT WILL STOP GAME TIMER WHILE ALERT IS ACTIVE ALSO WILL MAKE THE TEXT FORM APPEAR FOR THE PLAYER TO ENTER THEIR INITALS OR NAME INTO
function logScore() {
    console.log(score);
    window.alert("You got " + score + " out of " + questions.length + " correct! Please enter your name to submit your score.");
    nameLog.style.display = "block";
}

// WHEN THE INTER IS UP THE FUNCTION ENDS THE ACTIVITY ADN MOVES THE GAME TO THE SCORING STAGE
function timeUp() {
    clearInterval(timer);
    clearQuestion();
    
    answerBoxArea.textContent = "Time is up!";
    answerBoxArea.style.backgroundColor = "red";
    answerBoxArea.style.color = "white";
    isPlaying = false;
    logScore();
};

// ATTEMPTED TO ADD INTERACTIVE ANSWERS BUT THEY ARE NOT WORKING 
function answerCorrect() {
    answerGoodBad.setAttribute("background-color", "green");
};

function answerWrong() {
    answerGoodBad.setAttribute("background-color", "red");
};

// TIME COUNTER INITIATED WHEN FUNCTION IS CALLED
function renderCounter() {
    timeLeft--;
    timeLeftSpan.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timer);
        clearQuestion();
        timeUp();
        isPlaying = false;
        gamerOver = true;
               
    }
    
};

//HIDES THE FORM BOX TO ENTER YOUR NAME ON LOAD ALSO GETS THE PREVIOUS NAME AND SCORE STORED IN LOCAL STORAGE AND PUTS IT IN THE SCORE BOX LABELED HONORABLE CONTENDER OF THE PAST, WHEN YOU FINISH YOU CAN COMPARE YOUR SCORE TO THE LAST ENTRY

function init() {
    
};

init(); {
   nameLog.style.display = "none";
   user.username = JSON.parse(window.localStorage.getItem("playerName"));
   user.userScore = JSON.parse(window.localStorage.getItem("score"));
   var li = document.createElement("li");
   li.appendChild(document.createTextNode("Player: " + user.username + " Score: " + user.userScore));
   highscoreList.appendChild(li);
  
};


//EVENT LISTENER ON START BUTTON TO BEGIN GAME, CALL COUNTER FUNCTION, SET INITAL TIME INTERVAL SET INTERVAL OF TIMER HIDES THE START BUTTON SO THE PLAYER CANT RESTART THE GAME DURING THE GAME. 

start.addEventListener("click", function () {
    start.style.display = "none"
    renderCounter();
    timeLeft = 25;
    timer = setInterval(renderCounter, 1000);
    if (isPlaying) {
        return;
    }
    loadQuestion();
});

//IDENTIFIES THE ANSWER THE PLAYER CLICKED AND MOVES TO THE NEXT QUESTION 
answerBoxArea.addEventListener("click", function (event) {
    console.log(event.target.textContent);
    currentQuestion++;
    checkAnswer(event.target.textContent);
   
});

// WHEN THE PLAYER SUBMITS THEIR NAME AT THE END OF THE GAME THIS PREVENT PAGE RELOAD FROM A FORM SUBMIT, CONSOLE LOGS THE NAME AND SCORE STORES THAT NAME AND SCORE IN THE LOCAL STORAGE, HIDES THE NAME SUBMIT BOX SO THEY CANT SPAM THE BUTTON GETS THE INFORMATION STORED INTO LOCAL STORAGE AND CALLS IT TO THE SCORE BOARD TO COMPARE WITH THE PLAYERS LAST RUN

submitScore.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(playerName.value);
    playerName.value = localStorage.setItem("playerName", JSON.stringify(playerName.value));
    console.log(score);
    score = localStorage.setItem("score", JSON.stringify(score));
    window.alert("Your score has been submitted!");
    nameLog.style.display = "none";
    console.log(playerName.value);
    console.log(score);
    user.username = JSON.parse(window.localStorage.getItem("playerName"));
    user.userScore = JSON.parse(window.localStorage.getItem("score"));
    console.log(user.username);
    console.log(user.userScore);
    console.log(user);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Player: " + user.username + " Score: " + user.userScore));
    highscoreList.appendChild(li);
});
