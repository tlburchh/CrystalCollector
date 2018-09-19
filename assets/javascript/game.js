//Crystal Variables
var crystal = {
    chrys:
    {
        name:"Chrys",
        value: 0
    },
    lab:
    {
        name:"Lab",
        value: 0
    },
    mal:
    {
        name:"Mal",
        value: 0
    },

    opal:
    {
        name:"Opal",
        value: 0
    }
};

// Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

// Win and Lose count

var winCount = 0;
var lossCount = 0;

//Functions
    // Generates random number
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
};

var startGame = function() {

    currentScore = 0;

    targetScore = getRandom(19, 120);

    crystal.chrys.value = getRandom(1, 12);
    crystal.lab.value = getRandom(1, 12);
    crystal.mal.value = getRandom(1, 12);
    crystal.opal.value = getRandom(1, 12);

    $("#score").text(currentScore);
    $("#randomnumber").text(targetScore);

      // Testing Console
  console.log("-----------------------------------");
  console.log("Target Score: " + targetScore);
  console.log("Chrys: " + crystal.chrys.value + 
  " | Lab: " + crystal.lab.value + 
  " | Mal: " + crystal.mal.value +
  " | Opal: " + crystal.opal.value);
  console.log("-----------------------------------");
};


var checkWin = function() {
    if (currentScore > targetScore) {
        alert("Sorry. Try again!")
        console.log("loss")

        lossCount++;

    
        $("#losscount").text(lossCount);

        startGame();
    } 
    else if (currentScore === targetScore) {
        alert("You win!");
        console.log("win");

        winCount++;

        $("#wincount").text(winCount);
        
        startGame();
    }
};

var addValues = function(clickedCrystal) {

  
    currentScore += clickedCrystal.value;
  
   
    $("#score").text(currentScore);
  
    
    checkWin();
  
  
    console.log("Your Score: " + currentScore);
  };
  


startGame();

        $('#chrys').on('click', function() {
            addValues(crystal.chrys)
        });
        $('#lab').on('click', function() {
            addValues(crystal.lab);
        });
        $('#mal').on('click', function() {
            addValues(crystal.mal);
        });
        $('#opal').on('click', function() {
            addValues(crystal.opal);
        });

       
      