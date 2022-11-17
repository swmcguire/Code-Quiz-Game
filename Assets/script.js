var startBtn = document.getElementById('start');
var highscoreBtn = document.getElementById('highscore');

var questions = [
    {
    question: "Is JavaScript case sensitive",
    answers: ["Yes","No","Sometimes","If you want it to be"],
    correct: "Yes"
    },
    {
        question: "Which is NOT a correct datatype?",
        answers: ["String","Boolean","Angelic","Numeric"],
        correct: "Angelic"
    },
    {
        question: "How do you get the length of var text = \"Lets Go!",
        answers: ["length.text","len(text)","text.length","text(len)"],
        correct: "text.length"
    },
    {
        question: "How do you comment out in JavaScript?",
        answers: ["<!--With this-->","*+With this+*","//With this","----With this"],
        correct: "//With this"
    },
    {
        question: "Which is correct to set your variable?",
        answers: ["v length","length = var","var length","i++"],
        correct: "var length;"
    },
    {
        question: "Can you build a website with JavaScript Only?",
        answers: ["Yes","No","You can try","Every good website is."],
        correct: "No"
    },
    {
        question: "Is Java and JavaScript the same thing?",
        answers: ["Yes","No","If you try really hard","Unsure"],
        correct: "No"
    },
    {
        question: "Which HTML element do we put JavaScript in?",
        answers: ["<js>","<script>","<javaScript>","<h1>"],
        correct: "<script>"
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: ["function myFunction()","function = myFunctin()","function:myFunction()","function = function"],
        correct: "function myFunction()"
    },    
    {
        question: "Which event occurs when the user clicks on an HTML element",
        answers: ["onclick","onhover","onmouseover","onkeystroke"],
        correct: "onclick"
    }

]


startBtn.addEventListener('click',start);
startBtn.addEventListener('click',highscore);

function start(){
    console.log("Start!");
}

function highscore(){
    console.log("Nice...HighScore!");
}

function startGame() {
    //this function starts the game 
    console.log("Inside startGame");
    startTime();
    showQuestions();
}

function startTimer(){
    console.log("Start timer");
}

function showQuestion() {
    console.log ("Show first question");
}


function endGame(){
    console.log("End the game!");
}