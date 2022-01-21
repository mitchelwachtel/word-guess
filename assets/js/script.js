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
var startButtonEl = document.getElementById("start");
var resetButtonEl = document.getElementById('reset');
var timerEl = document.getElementById("timer");
var winsEl = document.getElementById("wins");
var losesEl = document.getElementById("loses");
var wordArray = [];
var displayArray = [];
var gameSpace = document.querySelector(".game-space");

if (localStorage.getItem("wins") !== null) {
  var wins = parseFloat(localStorage.getItem("wins"));
} else {
  var wins = 0;
}

if (localStorage.getItem("loses") !== null) {
  var loses = parseFloat(localStorage.getItem("loses"));
} else {
  var loses = 0;
}

var secLeft = 10;

winsEl.textContent = wins;
losesEl.textContent = loses;

startButtonEl.addEventListener("click", startGame);
document.addEventListener("keydown", press);
resetButtonEl.addEventListener("click", resetLocalStorage);

function startGame() {
// TODO: Deal with the double clicking of the Start button. How do I get the first game to stop? The following code reloads the page on second start click but doesn't start the game.
  
  
  // startButtonEl.addEventListener("click", stop);

  // function stop() {
  //   location.reload();
  //   startGame();
  // }

  console.log(wordArray);
  
  secLeft = 10;
  var specialWord = words[Math.floor(Math.random() * words.length)];
  wordArray = specialWord.split("");
  

  displayArray = wordBlanks(wordArray);

 

  var timer = setInterval(function () {
    timerEl.textContent = secLeft;
    secLeft--;
    if (secLeft < 0) {
      clearInterval(timer);
      if (displayArray.includes("_")) {
        loses += 1;
        losesEl.textContent = loses;
        localStorage.setItem("loses", loses);
        displayArray = wordArray;
        gameSpace.textContent = specialWord;
        return;
      } else {
        wins += 1;
        winsEl.textContent = wins;
        localStorage.setItem("wins", wins);
        return;
      }
    }
    if (displayArray.includes("_") === false) {
      clearInterval(timer);
      wins += 1;
      winsEl.textContent = wins;
      localStorage.setItem("wins", wins);
      return;
    }
  }, 1000);

  

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


return;
}

function press(event) {
  if (wordArray.includes(event.key)) {
    console.log(wordArray);
    for (i = 0; i < wordArray.length; i++) {
      var a = wordArray.indexOf(event.key, i);
      displayArray[a] = event.key;
      gameSpace.textContent = displayArray.join("");
    }
  } 
}

function resetLocalStorage() {
      wins = 0;
      winsEl.textContent = wins;
      localStorage.setItem("wins", wins);
      loses = 0;
      losesEl.textContent = loses;
      localStorage.setItem("loses", loses);

}