$(document).ready(function() {
    
    var randomNumber = 0;
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var crystalOne = 0;
    var crystalTwo = 0;
    var crystalThree = 0;
    var crystalFour = 0;
    var min = 0;
    var max = 0;

    wins = 0;
    losses = 0;
    totalScore = 0;
    crystalOne = 0;
    crystalTwo = 0;
    crystalThree = 0;
    crystalFour = 0;


    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function gameBegin() {
        $("#numWins").text(wins);
        $("#numLosses").text(losses);
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);


        // generate new randomNumber between 19-120
        randomNumber = getRndInteger(19,120);
        $("#randomNumber").text(randomNumber);

        // set totalScore to zero
        totalScore = 0;
        $("#finalTotal").text(totalScore);

        // assign random values to each crystal between 1-12
        crystalOne = getRndInteger(1,12);
        crystalTwo = getRndInteger(1,12);
        crystalThree = getRndInteger(1,12);
        crystalFour = getRndInteger(1,12);

        console.log("Random Number: " + randomNumber);
        console.log("Crystal One: " + crystalOne);
        console.log("Crystal Two: " + crystalTwo);
        console.log("Crystal Three: " + crystalThree);
        console.log("Crystal Four: " + crystalFour);

    }

    $("#crystalOne").on("click", function() {
        totalScore = totalScore + crystalOne;
        $("#finalTotal").text(totalScore);
        console.log("Total Score: " + totalScore);
        compareScores();
    });

    $("#crystalTwo").on("click", function() {
        totalScore = totalScore + crystalTwo;
        $("#finalTotal").text(totalScore);
        console.log("Total Score: " + totalScore);
        compareScores();
    });

    $("#crystalThree").on("click", function() {
        totalScore = totalScore + crystalThree;
        $("#finalTotal").text(totalScore);
        console.log("Total Score: " + totalScore);
        compareScores();
    });

    $("#crystalFour").on("click", function() {
        totalScore = totalScore + crystalFour;
        $("#finalTotal").text(totalScore);
        console.log("Total Score: " + totalScore);
        compareScores();
    });

    function compareScores() {
        if (totalScore === randomNumber) {
            wins = wins + 1;
            $("#numWins").text("Wins: " + wins);
            console.log("Wins: " + wins);
            gameBegin();
        } 
        else if (totalScore > randomNumber) {
            losses = losses + 1;
            $("#numLosses").text("Losses: " + losses);
            console.log("Losses: " + losses);
            gameBegin();
        }
       
    }

    gameBegin();

});