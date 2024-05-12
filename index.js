//all 6 states of a dice
var diceStates = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];



//changes scr to rnd value of diceStates
var buttonClick = document.getElementById("btn");
buttonClick.addEventListener("click", function diceRoll () {
    var winner1 = document.getElementById("hidden1");
    var winner2 = document.getElementById("hidden2");
    winner1.classList.add("hidden");
    winner2.classList.add("hidden");
    var dice1StatePosition = Math.floor(Math.random()*6);
    var dice2StatePosition = Math.floor(Math.random()*6);
    document.getElementById("1").setAttribute('src', diceStates[dice1StatePosition]);
    document.getElementById("2").setAttribute('src', diceStates[dice2StatePosition]);
    
   if (dice1StatePosition>dice2StatePosition) {
    document.querySelector("h1").innerText = "Kate wins!";
    var winner1 = document.getElementById("hidden1");
        winner1.classList.toggle("hidden");
   } else if (dice1StatePosition<dice2StatePosition){
    document.querySelector("h1").innerText = "Vladimir wins!";
    var winner2 = document.getElementById("hidden2");
        winner2.classList.toggle("hidden");
   } else{document.querySelector("h1").innerText = "Draw!"}

    function buttonAnimation () {
        buttonClick.classList.add ("pressed");
        setTimeout(function() {
            buttonClick.classList.remove ("pressed");
        }, 100)
    }
    buttonAnimation ();
})

