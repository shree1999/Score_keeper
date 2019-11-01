var player1Button = document.getElementById("player1");
var player1Score = document.getElementById("score-1");
var score1 = parseInt(player1Score.innerHTML);
var pannel1 = document.getElementById("pannel1")


var player2Button = document.getElementById("player2");
var player2Score = document.getElementById("score-2");
var score2 = parseInt(player2Score.innerHTML);
var pannel2 = document.getElementById("pannel2")

var gameOver = false;

player1Button.addEventListener("click", function () {
    var maxGames = document.getElementById("input").value;
    maxGames = parseInt(maxGames);
    if (maxGames && gameOver === false) {
        pannel1.classList.add("active");
        pannel2.classList.remove("active");
        score1 = score1 + 1;
        player1Score.innerHTML = score1.toString();
        if (score1 === maxGames) {
            this.disabled = true;
            player1Score.classList.add("success");
            gameOver = true;
        }
    } else {
        alert("Enter number of games!!!");
    }

});

player2Button.addEventListener("click", function () {
    var maxGames = document.getElementById("input").value;
    maxGames = parseInt(maxGames);
    if (maxGames && gameOver === false) {
        pannel1.classList.remove("active");
        pannel2.classList.add("active");
        score2 = score2 + 1;
        player2Score.innerHTML = score2.toString();
        
        if (score2 === maxGames) {
            this.disabled = true;
            player2Score.classList.add("success");
            gameOver = true;
        }
    } else {
        alert("Enter number of games!!!");
    }
});


var reset = document.getElementById("btn-new");
reset.addEventListener("click", function () {
    pannel1.classList.remove("active");
    pannel2.classList.remove("active");
    player1Score.classList.remove("success");
    player2Score.classList.remove("success");
    gameOver = false;
    score1 = 0;
    score2 = 0;
    player2Score.innerHTML = score2.toString();
    player1Score.innerHTML = score1.toString();
    document.getElementById("input").value = "0";
    player1Button.disabled = false;
    player2Button.disabled = false;
});
