var info = document.getElementById('intro');
var quiz = document.getElementById('quiz');
var startButton = document.getElementById('start');
var resultsButton = document.getElementById('results');
var submitButton = document.getElementById('submit');
var retryButton = document.getElementById('retry');
var resultsPage = document.getElementById('resultsPage');
var timerElement = document.getElementById('timer');
var timeLeftEl = document.getElementById('time-left'); 
var finalScore = document.getElementById('finalScore');
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var question = document.getElementById("question");
var name = document.getElementById("name");

var timeLeft = 99;
var currentQuestion = 0;
var quizCompleted = false;

var questions = [ 
    {
        question: "Arrays in JavaScript can be used to store _____.",
            choiceA: "Numbers and Strings",
            choiceB: "Other Arrays",
            choiceC: "Booleans",
            choiceD: "All of the above",
        
            correct: "D"
    },
    {
        question: "Commonly used data types do NOT include:",
            choiceA: "Strings",
            choiceB: "Booleans",
            choiceC: "Alerts",
            choiceD: "Numbers",

            correct: "B"
    },
    {
        question: "The condition if an if / else statement is enclosed with _____.",
            choiceA: "Quotes",
            choiceB: "Curly Brackets",
            choiceC: "Parenthesis",
            choiceD: "Commas",

            correct: "C"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables",
            choiceA: "Commas",
            choiceB: "Curly Brackets",
            choiceC: "Quotes",
            choiceD: "Parenthesis",

            correct: "C"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            choiceA: "JavaScript",
            choiceB: "terminal/bash",
            choiceC: "for loops",
            choiceD: "console.log",

            correct: "D"
    }
];

var lastQuestion = questions.length -1;

startButton.addEventListener("click", function() {
    startQuiz();
    showQuestions();
});

function startQuiz() {
    info.style.display = 'none';
    quiz.style.display = 'block';
    resultsButton.style.display = 'none';
    timerElement.style.display = 'block';

    var timerInterval = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            timeLeftEl.textContent = timeLeft
        }

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            timeLeftEl.textContent = 'Time is up!';
            quiz.style.display = 'none';
            resultsButton.style.display = 'none';
            timerElement.style.display = 'none';
            info.style.display = 'block';
            timeLeft.reset();
            currentQuestion.reset();
            quizCompleted.reset();
        }

        if (quizCompleted) {
            clearInterval(timerInterval);
            return;
        }
    }, 1000);
}

function showQuestions() {
    console.log('test');
    question.innerHTML = questions[currentQuestion].question
    choiceA.innerHTML = questions[currentQuestion].choiceA
    choiceB.innerHTML = questions[currentQuestion].choiceB
    choiceC.innerHTML = questions[currentQuestion].choiceC
    choiceD.innerHTML = questions[currentQuestion].choiceD
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct) {
    }

    else {
        timeLeft -= 10;
    }
    currentQuestion++
    if (currentQuestion > lastQuestion) {
        quiz.style.display ='none';
        resultsPage.style.display = 'block'
        timerElement.style.display = 'none'
        quizCompleted = true;
        finalScore.textContent = "Your final score is " + timeLeft;
    } else {
        showQuestions();
    }
}

submitButton.addEventListener("click", function() {
    localStorage.setItem(name.value, timeLeft)
})