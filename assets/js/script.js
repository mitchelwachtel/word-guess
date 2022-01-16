var words = ["orange", "green", "blue", "purple", "zebra", "balloon"];
var buttonEl = document.getElementById("start");
var timerEl = document.getElementById("timer");
var winsEl = document.getElementById("wins");
var losesEl = document.getElementById("loses");
var gameSpace = document.querySelector(".game-space");
var wins = 0;
var loses = 0;
var secLeft = 10;

buttonEl.addEventListener("click", startGame);

function startGame() {
  secLeft = 10;
  var specialWord = words[Math.floor(Math.random() * words.length)];
  var wordArray = specialWord.split("");

  wordBlanks(wordArray);
  var gameDisplay = wordBlanks(wordArray);

  var timer = setInterval(function () {
    timerEl.textContent = secLeft;
    secLeft--;
    if (secLeft < 0) {
      clearInterval(timer);
      if (gameDisplay.includes("_")) {
        loses += 1;
        losesEl.textContent = "Loses: " + loses;
      }
    }
  }, 100);
}

function wordBlanks(x) {
  var y = "";

  for (i = 0; i < x.length; i++) {
    y += "_ ";
  }
  gameSpace.textContent = y;
  return y;
}
