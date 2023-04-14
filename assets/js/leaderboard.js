var scores = [];
for (var [key, value] of Object.entries(localStorage)) {
    scores.push({ name: key, score: parseInt(value)});
}

scores.sort((a, b) => b.score - a.score)

var place = 1;
var highScoreDiv = document.getElementById('ranking');
for (var score of scores) {
    scoreDiv = document.createElement("div");
    scoreDiv.innerHTML = place + ": " + score.name + " - " + score.score;
    highScoreDiv.appendChild(scoreDiv);
    place++;
}

var clearButton = document.getElementById('clear');

clearButton.addEventListener("click", function() {
    localStorage.clear()
    highScoreDiv.innerHTML = "";
})