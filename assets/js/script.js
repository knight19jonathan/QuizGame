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
var liScore = document.querySelector("#liScore");


var scoreDisplay = document.querySelector("#spanScore")

var hideStart = document.querySelector("#welStart");
var answerGoodBad = document.querySelector("#gameMatt");
var answerBoxArea = document.querySelector("#answerContainer");
var answerContaninerBox = document.querySelector(".answerBox");
var highscore = document.createElement("li");
var answer;
var currentQuestion = 0;
var timeLeft = 15;
var timer;
timeLeftSpan.textContent = timeLeft;

var score = 0;
scoreDisplay.textContent = score;

// var storedName = localStorage.getItem("winsR");
// winsSpan.textContent = storedWins;
// var storedLosses = localStorage.getItem("lossesR");
// lossesSpan.textContent = storedLosses;
var isPlaying = false;
var gamerOver = false;

// answers are either asnwers[0] = A, answers[1] = b, answers[2] = C, answers[3] = D

let questions = [ // all questions all answers all possible answers
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

const endQuestion = questions.length - 1;
// console.log(questions[0].correctanswer);

// Start the game when the Start button is clicked. 

//scoring answer
function loadQuestion() {
    questionBox.textContent = questions[currentQuestion].question;
    answerBoxA.textContent = questions[currentQuestion].choiceA;
    answerBoxB.textContent = questions[currentQuestion].choiceB;
    answerBoxC.textContent = questions[currentQuestion].choiceC;
    answerBoxD.textContent = questions[currentQuestion].choiceD;
}


function checkAnswer(answer) {
    console.log(answer);
    console.log(questions[currentQuestion-1].correctanswer);
    if (answer === questions[currentQuestion-1].correctanswer) {
        // console.log(currentQuestion)
        score++;
        scoreDisplay.textContent = score;
        console.log("Youddy");
        answerCorrect();
        loadQuestion;
        
    } else {
        timeLeft--;
        answerWrong();
        loadQuestion();
    }
    if (timeLeft < 1) {
        timeUp();
        clearQuestion();
    } else if(currentQuestion === [14]) {
        timeUp();
        clearQuestion();
    
    } else {
        loadQuestion();
    }
}

function clearQuestion() {
    questionBox.textContent = "";
    answerBoxA.textContent = "";
    answerBoxB.textContent = "";
    answerBoxC.textContent = "";
    answerBoxD.textContent = "";
}

function logScore() {
    console.log(score);
    window.alert("You got " + score + " out of " + questions.length + " correct! Please enter your name to submit your score.");
    nameLog.style.display = "block";
}

function timeUp() {
    clearInterval(timer);
    clearQuestion();
    answerBoxArea.textContent = "Time is up!";
    answerBoxArea.style.backgroundColor = "red";
    answerBoxArea.style.color = "white";
    isPlaying = false;
    logScore();
};

function answerCorrect() {
    answerGoodBad.setAttribute("background-color", "green");
};

function answerWrong() {
    answerGoodBad.setAttribute("background-color", "red");
};


function renderCounter() {
    if (timeLeft === 0) {
        clearInterval(timer);
        clearQuestion();
        timeUp();
        isPlaying = false;
        gamerOver = true;
        
        
    }
    timeLeft--;
    timeLeftSpan.textContent = timeLeft;
};

function init() {
    
};

init(); {
    nameLog.style.display = "none";
    liPlayer.textContent = localStorage.getItem("playerName");
    liscore.textContent = localStorage.getItem("score");

}



start.addEventListener("click", function () {
    //EDGE CASE: user resets the game by clicking start while game is running
    //Load first question
    start.style.display = "none"
    renderCounter();
    timeLeft = 25;
    timer = setInterval(renderCounter, 1000);
    if (isPlaying) {
        return;
    }
    // currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    //Pick a random question to start with
    loadQuestion();
    //Display question
    // answerGoodBad.setAttribute("background-color", "gray");
});

answerBoxArea.addEventListener("click", function (event) {
    console.log(event.target.textContent);
    currentQuestion++;
    checkAnswer(event.target.textContent);
    // answer = event.target;
    // checkAnswer(); 
    
});

submitScore.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(playerName.value);
    playerName.value = localStorage.setItem("playerName", playerName.value);
    console.log(score);
    score = localStorage.setItem("score", score);
    window.alert("Your score has been submitted!");
    nameLog.style.display = "none";
    // JSON.stringify(playerName.value);
    // JSON.stringify(score);
    // // highscore.textContent = playerName.value + ": " + score;
    // // console.log(highscore);
    
    // // console.log(highscore);
    // // document.body.ol.appendChild(highscore);
});