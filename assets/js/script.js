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
var scoreDisplay = document.querySelector("#spanScore")


var currentQuestion = 0;
var timeleft = 60;
var timer; 
var score = 0;
scoreDisplay.textContent = score;
var storedWins = localStorage.getItem("winsR");
winsSpan.textContent=storedWins;
var storedLosses = localStorage.getItem("lossesR");
lossesSpan.textContent=storedLosses;
var isPlaying = false;

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
    choiceC : "9,000-25,000 miles per millisecond",
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
    choiceB : "Images captured by the Hubble Telescope in 1998",
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
    question: "The Nortern and South lights can seen when?",
    choiceA: "Methane released from cows combusts in the atmosphere",
    choiceB: "Cosmic raiation from outisde the soloar system hits the earth's atmosphere",
    choiceC: "When the Earth's magnetosphere deflects away solar wind",
    choiceD: "When some get's the number 7 at the taco truck.",
    correctanswer: "When the Earth's magnetosphere deflects away solar wind"

}];

const endQuestion = questions.length - 1;

// Start the game when the Start button is clicked. 
start.addEventListener("click", function(){
    //EDGE CASE: user resets the game by clicking start while game is running
    //Load first question

    if(isPlaying){
        return;
    }
        currentQuestion = questions[Math.floor(Math.random()*questions.length)]
        //Pick a random question to start with

        //Display question
        
    }
);

function init() {

}

init();

// var highscores = [
//     {
//         initials: "HW",
//         score: 8 
//         // sort the array by the objects score value 
//         // javascript may get conflicted between multiple page accesses 
//     }
// ]

//currentQuestion = -1
//time left
//score
// var btn1 =quertSelector("#btn-1") same with question prompt 


//startGame 
    // trigger by event listen on start game button
    // start timer
    // set up first question
    // loadQuestion()

// timer function 
    //start interbal
    //renders to page

// load question function 
    // currentQuestion ++;
    // render the question and the potential answers to the page 

//check answer function 
    // check what the user clicked
    // compare the choice with correct answer
    // act on right or wrong
    // wrong deduct time
    // loadQuestion() again 

//high scores best reference is the TODO activies from WEB APIs 26?
// store in web storage, read and render the info web storage, and restore high scores in webstorage

//end game function
    //call at end of timer either  || or when current question is > # of questions 
    //cancel timer 
    // if doing multiple pages redirect to highscores page or make high scores visiblw
    // prompt (not neccessaily prpomt() ) for intials 
    // local storage with initials and score 
        // 1 read ls and store in js variable
        // 2 check if null 
        // 3 if you found something update with new score
        // 4 render to page 
        // 5 save new js variable updated 

    // make high score visible 
    // promt user to play again?
    
    //ordering highscores 