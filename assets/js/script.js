var words = [
  "orange",
  "green",
  "blue",
  "purple",
  "zebra",
  "balloon",
  "party",
  "joke",
  "quick",
  "jump",
];
var buttonEl = document.getElementById("start");
var timerEl = document.getElementById("timer");
var winsEl = document.getElementById("wins");
var losesEl = document.getElementById("loses");
var wordArray = [];

var wins = 0;
var loses = 0;
var secLeft = 10;

buttonEl.addEventListener("click", startGame);

function startGame() {
// TODO: this does a great job of preventing a second game, but the first the startGame function must end!  
// buttonEl.addEventListener("click", stop);

//   function stop() {
//     alert("You can only play 1 game at once");
//     location.reload();
//     return;
//   }

  console.log(wordArray);
  var gameSpace = document.querySelector(".game-space");
  secLeft = 10;
  var specialWord = words[Math.floor(Math.random() * words.length)];
  wordArray = specialWord.split("");
  var displayArray = [];

  wordBlanks(wordArray);
  displayArray = wordBlanks(wordArray);

  var timer = setInterval(function () {
    timerEl.textContent = secLeft;
    secLeft--;
    if (secLeft < 0) {
      clearInterval(timer);
      if (displayArray.includes("_")) {
        loses += 1;
        losesEl.textContent = "Loses: " + loses;
        displayArray = wordArray;
        gameSpace.textContent = specialWord;
        return;
      } else {
        wins += 1;
        winsEl.textContent = "Wins: " + wins;
        return;
      }
    }
    if (displayArray.includes("_") === false) {
      clearInterval(timer);
      wins += 1;
      winsEl.textContent = "Wins: " + wins;
      return;
    }
  }, 1000);

  document.addEventListener("keydown", press);

  function wordBlanks(x) {
    var y = "";
    var displayArray = [];

    for (i = 0; i < x.length; i++) {
      y += "_";
      displayArray.push("_");
    }
    gameSpace.textContent = y;
    return displayArray;
  }

  function press(event) {
    if (wordArray.includes(event.key)) {
      console.log(wordArray);
      for (i = 0; i < wordArray.length; i++) {
        var a = wordArray.indexOf(event.key, i);
        displayArray[a] = event.key;
        gameSpace.textContent = displayArray.join("");
      }
      return;
    } else {
      return;
    }
  }

//   This is my attempt at getting the function to STOP
  if (displayArray.includes("_") === false) {
    return;
  }
}
