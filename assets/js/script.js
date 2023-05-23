// Creating an array of question objects
var quizQuestions = [
    {
        prompt: "Commonly used data types do NOT include:",
        options: ["(1) Strings", "(2) Booleans", "(3) Alerts", "(4) Numbers"],
        correct: "3"
    },
    {
        prompt: "The condition in an if / else statement is enclosed with _______.",
        options: ["(1) Quotes", "(2) Curly brackets", "(3) Parenthesis", "(4) Square brackets"],
        correct: "2"
    },
    {
        prompt: "Arrays in JavaScript can be used to store ________.",
        options: ["(1) Numbers and Strings", "(2) Other Arrays", "(3) Booleans", "(4) All of the Above"],
        correct: "4"
    },
    {
        prompt: "String values must be enclosed within ________ when being assigned to variables.",
        options: ["(1) Commas", "(2) Curly brackets", "(3) Quotes", "(4) Parenthesis"],
        correct: "3"
    },
    {
        prompt: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["(1) JavaScript", "(2) Terminal/Bash", "(3) for Loops", "(4) console.log"],
        correct: "4"
    },
];

var quiz = document.getElementById("quiz");
var answers = document.getElementsByClassName(".answer");
var startButton = document.getElementById("start-button");
var timerSpan = document.getElementById("time-left");

var questionElements = document.getElementById("question");
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("question4");
var question5 = document.getElementById("question5");

let beginQuiz = 0;
var quizScore = 0;
var timeLeft = 75;



function startGame() {
    var currentQuizQuestion = quizQuestions[beginQuiz]
    questionElements.textContent = currentQuizQuestion.quizQuestions[i]
    question1.textContent = currentQuizQuestion.first
    question2.textContent = currentQuizQuestion.second
    question3.textContent = currentQuizQuestion.third
    question4.textContent = currentQuizQuestion.fourth
    question5.textContent = currentQuizQuestion.fifth


    var gameInterval = setInterval(() => {
        timerSpan.textContent = timeLeft--;
        
        if(!timeLeft) {
            clearInterval(gameInterval)
            window.location.href = "highscore.html";

        }

    }, 1000);
}

// //Write a program that will go through the array and ask each question


function clickAnswer() {
    let answerElements
    answerElements.forEach(answerElements => {
        if(answerElements.) {
            answer = answerElements.id
        }
    })
    return answer
}





startButton.onclick = startGame();




// for (var i=0; i < quizQuestions.length; i++) {
//     var answer = window.prompt(quizQuestions[i].prompt);
//     if (answer == quizQuestions[i].answer) {
//         quizScore++;
//         alert("Correct!");
//     } else {
//         alert("Wrong Answer!");
//     }
// }
// alert("you got " + quizScore + "/" + quizQuestions.length);