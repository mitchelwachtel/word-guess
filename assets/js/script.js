var words = ["orange", "green", "blue", "purple", "zebra", "balloon"];
var buttonEl = document.getElementById("start");
var timerEl = document.getElementById("timer");
var winsEl = document.getElementById("wins");
var losesEl = document.getElementById("loses");

var wins = 0;
var loses = 0;
var secLeft = 10;

buttonEl.addEventListener("click", startGame);

function startGame() {
  var gameSpace = document.querySelector(".game-space");
  secLeft = 10;
  var specialWord = words[Math.floor(Math.random() * words.length)];
  var wordArray = specialWord.split("");

  wordBlanks(wordArray);
  var displayArray = wordBlanks(wordArray);
  

  var timer = setInterval(function () {
    timerEl.textContent = secLeft;
    secLeft--;
    if (secLeft < 0) {
      clearInterval(timer);
      if (displayArray.includes("_")) {
        loses += 1;
        losesEl.textContent = "Loses: " + loses;
      } else {
          wins += 1;
          winsEl.textContent = "Wins: " + wins;
      }
    }
  }, 1000);

  document.addEventListener('keydown', press);
  
  function wordBlanks(x) {
    var y = '';
    var displayArray = []; 
  
    for (i = 0; i < x.length; i++) {
      y += "_";
      displayArray.push('_');
    }
    gameSpace.textContent = y;
    return displayArray;
  }

  function press(event) {
    if (wordArray.includes(event.key)) {
        console.log(event.key);
        for (i = 0; i < wordArray.length; i++) {
          var a = wordArray.indexOf(event.key, i);
          displayArray[a] = event.key;
          gameSpace.textContent = displayArray.join('');
      }
    } else {
        return;
    }
  }
}



