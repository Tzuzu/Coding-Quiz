var startButton = document.getElementById('start');
var resultsButton = document.getElementbyId('results');
var timerElement = document.getElementById('timer');
var timeLeftEl = document.getElementById('time-left'); 
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

var timeLeft = 99;

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

startButton.addEventListener("click", function() {
    var timerInterval = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            timeLeftEl.textContent = timeLeft
        }

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            timeLeftEl.textContent = 'Time is up!';
        }
    }, 1000);
});