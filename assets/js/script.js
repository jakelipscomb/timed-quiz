// Creating an array of question objects

let quizQuestions = [
    {
        number: 1,
        prompt: "Commonly used data types do NOT include:",
        options: ["(1) Strings", "(2) Booleans", "(3) Alerts", "(4) Numbers"],
        correct: "3",
    },
    {
        number: 2,
        prompt: "The condition in an if / else statement is enclosed with _______.",
        options: ["(1) Quotes", "(2) Curly brackets", "(3) Parenthesis", "(4) Square brackets"],
        correct: "2",
    },
    {
        number: 3,
        prompt: "Arrays in JavaScript can be used to store ________.",
        options: ["(1) Numbers and Strings", "(2) Other Arrays", "(3) Booleans", "(4) All of the Above"],
        correct: "4",
    },
    {
        number: 4,
        prompt: "String values must be enclosed within ________ when being assigned to variables.",
        options: ["(1) Commas", "(2) Curly brackets", "(3) Quotes", "(4) Parenthesis"],
        correct: "3",
    },
    {
        number: 5,
        prompt: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["(1) JavaScript", "(2) Terminal/Bash", "(3) for Loops", "(4) console.log"],
        correct: "4",
    },
];

// timer goes here
var startTimer = document.getElementById("timer");
var timerSpan = document.getElementById("time-left");
var timeLeft = 75;

// questions and options go here
let currentQuestionIndex = 0;
let questionNumberElement = document.getElementById("question-number");
let questionPromptElement = document.getElementById("question-prompt");
let optionsListElement = document.getElementById("options-list");


//buttons go here
let startButton = document.getElementById("start-button");
let submitButton = document.getElementById("submit-button");
let nextButton = document.getElementById("next-button");

//containers and text goes here
let resultTextElement = document.getElementById("result-text");
let questionContainer = document.getElementById("question-container");
let resultContainer = document.getElementById("result-container");


startButton.addEventListener("click", function() {
  startButton.style.display = "none";
  questionContainer.style.display = "block";
  startGame();
});



function startGame() {
    var gameInterval = setInterval(function() {
        timerSpan.textContent = timeLeft--;

        if(timeLeft < 0) {
            clearInterval(gameInterval);
            window.location.href = "highscore.html";
            endQuiz();
        }
    }, 1000);
}

// wrong answer deducts time
function adjustTime() {
    timeLeft -= 10;
}

// quiz goes here

function displayQuestion(question) {
    questionNumberElement.textContent = "Question " + question.number;
    questionPromptElement.textContent = question.prompt;
    optionsListElement.innerHTML = "";

    for (let i = 0; i < question.options.length; i++) {
        let listItem = document.createElement("li");
        let label = document.createElement("label");
        let option = document.createElement("input");
        option.type = "radio";
        option.name = "option";
        option.value = i + 1;
        label.appendChild(option);
        label.appendChild(document.createTextNode(question.options[i]));
        listItem.appendChild(label);
        optionsListElement.appendChild(listItem);
    }
}

function processAnswer(answer) {
    let currentQuestion = quizQuestions[currentQuestionIndex];
    if (answer === currentQuestion.correct) {
        resultTextElement.textContent = "Correct answer!";
    } else {
        resultTextElement.textContent = "Wrong answer. The correct answer is: " + currentQuestion.correct;
        adjustTime()
    }
    resultContainer.style.display = "block";
}

submitButton.addEventListener("click", function() {
    let selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        let answer = selectedOption.value;
        processAnswer(answer);
    }
});

nextButton.addEventListener("click", function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion(quizQuestions[currentQuestionIndex]);
        questionContainer.style.display = "block";
        resultContainer.style.display = "none";
    } else {
        resultTextElement.textContent = "Quiz finished!";
        window.location.href = "highscore.html";
        endQuiz();

    }
});


//score prompt for end of quiz
function endQuiz() {
    alert("The Quiz has ended! Your Score is: " + timeLeft);
}

displayQuestion(quizQuestions[currentQuestionIndex]);


//highscore goes here
let highScoreElement = document.getElementById("high-score");

// Check if high score and time remaining exist in localStorage
if (localStorage.getItem("highScore") && localStorage.getItem("timeLeft")) {
  highScoreElement.textContent = localStorage.getItem("highScore") + " with " + localStorage.getItem("timeLeft") + " seconds remaining";
} else {
  highScoreElement.textContent = "No high score yet";
}

function updateHighScore(score, timeLeft) {
  if (!localStorage.getItem("highScore") || score > localStorage.getItem("highScore")) {
    localStorage.setItem("highScore", score);
    localStorage.setItem("timeLeft", timeLeft);
    highScoreElement.textContent = score + " with " + timeLeft + " seconds remaining";
  }
}

updateHighScore(100, 30);