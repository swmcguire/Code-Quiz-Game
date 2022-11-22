var startBtn = document.getElementById('start');
var highScoreBtn = document.getElementById('highscore');
var questionText = document.getElementById('question-text');
var questionAns = document.getElementById('question-answer');
var aBtn = document.getElementById('aBtn');
var bBtn = document.getElementById('bBtn');
var cBtn = document.getElementById('cBtn');
var dBtn = document.getElementById('dBtn');
var para = document.getElementById('para');
var show = document.getElementById('show');


//---------------------------------ARRAY OF QUESTIONS AND ANSWERS------------------------------//

var currentQuestion = 0;
var questionArr = [
    {
        question: "Is JavaScript case sensitive?",
        answers: ["A. Yes", "B. No", "C. Sometimes", "D. If you want it to be"],
        correct: ["A. Yes"]
    },
    {
        question: "Which is NOT a correct datatype?",
        answers: ["A. String","B. Boolean","C. Angelic","D. Numeric"],
        correct: ["C. Angelic"]
    },
    {
        question: "How do you get the length of var text = \"Lets Go!\"?",
        answers: ["A. length.text","B. len(text)","C. text.length","D. tex(len)"],
        correct: ["C. text.length"]
    },
    {
        question: "How do you comment out in JavaScript?",
        answers: ["A. <!--With this-->","B. *+With this+*","C. //With this","D. --With this"],
        correct: ["C. //With this"]
    },
    {
        question: "Which is correct to set your variable?",
        answers: ["A. v length","B. length = var","C. var length;","D. i++"],
        correct: ["C. var length;"]
    },
    {
        question: "Can you build a website with JavaScript Only?",
        answers: ["A. Yes","B. No","C. You can try","D. Obvi"],
        correct: ["B. No"]
    },
    {
        question: "Is Java and JavaScript the same thing?",
        answers: ["A. Yes","B. No","C. If you try hard","D. Unsure"],
        correct: ["B. No"]
    },
    {
        question: "Which type of HTML element do we link JavaScript in?",
        answers: ["A. js","B. script","C. javaScript","D. h1"],
        correct: ["B. script"]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: ["A. function myFunction()","B. function = myFunctin()","C. function:myFunction()","D. function = function"],
        correct: ["A. function myFunction()"]
    },    
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: ["A. onclick","B. onhover","C. onmouseover","D. onkeystroke"],
        correct: ["A. onclick"]
    }

]


//---------------------------------EVENT LISTENERS------------------------------//

startBtn.addEventListener('click',start);
//highScoreBtn.addEventListener('click',highscore);



//---------------------------------THIS FUNCTION STARTS THE GAME------------------------------//

function start() {
    startTimer();
    hideText();
    showQuestion();

}

//---------------------------------HIDE START AND TEXT------------------------------//


function hideText () {
    startBtn.style.display="none";
    para.style.display="none";
    show.style.display="inline";
}


var timerEl = document.querySelector('.timer');
var gameOverEl = document.getElementById('game-over');

var secondsLeft = 5;

function startTimer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Timer:  " + secondsLeft + " seconds";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

//---------------------------------DISPLAY GAME OVER IF TIMER HITS 0------------------------------//



//Write GameOver on Page
function gameOver() {
    window.alert("GAME OVER!!!! " + " Score:  " + secondsLeft);
  }


//---------------------------------THIS FUNCTION STARTS THE GAME------------------------------//

function showQuestion(){
    console.log(currentQuestion);
    questionText.innerHTML = questionArr[currentQuestion].question;
    aBtn.innerHTML = questionArr[currentQuestion].answers[0];
    bBtn.innerHTML = questionArr[currentQuestion].answers[1];
    cBtn.innerHTML = questionArr[currentQuestion].answers[2];
    dBtn.innerHTML = questionArr[currentQuestion].answers[3];
}


var quizChoice = '';

function getAnswer (choice) { 
    //var result = document.getElementById("result");

    if (quizChoice === questionArr[currentQuestion].correct[0]
        && currentQuestion < 9) {
        window.alert("Correct!");
        secondsLeft+=10;
        currentQuestion ++;
        showQuestion();
    } else if (quizChoice !== questionArr[currentQuestion].correct[0]
        && currentQuestion < 9) { 
        secondsLeft-=10;
        window.alert("WRONG!!");
        currentQuestion ++;
        showQuestion();

    } else if (currentQuestion === 9) {
        gameOver();
    }
    else{
        clearInterval(timerInterval);
    }

} 

aBtn.addEventListener("click", () =>{
    quizChoice = (questionArr[currentQuestion].answers[0]);
    getAnswer(quizChoice);
});


bBtn.addEventListener("click", () =>{
    quizChoice =(questionArr[currentQuestion].answers[1]);
    getAnswer(quizChoice);
});

cBtn.addEventListener("click", () =>{
    quizChoice =(questionArr[currentQuestion].answers[2]);
    getAnswer(quizChoice);
});

dBtn.addEventListener("click", () =>{
    quizChoice =(questionArr[currentQuestion].answers[3]);
    getAnswer(quizChoice);
});

/*
//---------------------------------HIGH SCORE FUNCTION------------------------------//

function highscore(){
    console.log("Nice...HighScore!");
}

*/