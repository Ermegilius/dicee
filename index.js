var results = [];

function count (results, element) {
    return results.filter(
        (ele) => ele == element).length;
}


$("#btn").on("click", function () {
    //all 6 states of a dice
    var diceStates = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
    //changes scr to rnd value of diceStates
    $("#hidden1, #hidden2").addClass("hidden");   
    $("#1").attr("src", dice1 = diceStates[Math.floor(Math.random()*6)]);
    console.log(diceStates.indexOf(dice1));
    $("#2").attr("src", dice2 = diceStates[Math.floor(Math.random()*6)]);
    console.log(diceStates.indexOf(dice2));

    if (diceStates.indexOf(dice1)>diceStates.indexOf(dice2)) {
        $("h1").text("Kate wins!");
        $("#hidden1").removeClass("hidden");
        results.push(1);
    } else if (diceStates.indexOf(dice1)<diceStates.indexOf(dice2)){
        $("h1").text ("Vladimir wins!");
        $("#hidden2").removeClass("hidden");
        results.push(2);
    } else {$("h1").text("Draw!");
        results.push(0);
    }

    function buttonAnimation () {
        $("#btn").addClass("pressed");
        setTimeout(function() {
            $("#btn").removeClass("pressed");
        }, 100)
    }
    buttonAnimation ();


    $("#gamesPlayed").text(results.length);
    $("#kateWon").text(((((count(results,1))/results.length)*100).toFixed(1))+"%");
    $("#vladimirWon").text(((((count(results,2))/results.length)*100).toFixed(1))+"%");
    $("#draws").text(((((count(results,0))/results.length)*100).toFixed(1))+"%");
    })

