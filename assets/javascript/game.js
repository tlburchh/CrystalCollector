var targetNumber
var score = 0
var winCount = 0
var lossCount = 0
var crystalCount

// make target number range between 40 and 60
targetNumber = Math.floor(Math.random() *21) +40;
// create random numbers for crystals rangine between 5 and 15
$(".randomnumber").text(targetNumber);
console.log(targetNumber);
// create connection between numbers, crystal count and crystal ID
$(document).ready(function() {

    $("#crystal").on("click", function(){
    
    var chrys = $("#chrys");
    var lab = $("#lab");
    var mal = $("#mal");
    var opal = $("#opal");

    for (var i = 0; i < 4; i++){
        $("#chrys") = Math.floor(Math.random() *11) +5;
    }
    for (var j = 0; j < 4; j++){
        $("#lab") = Math.floor(Math.random() *11) +5;
    }
    for (var k = 0; k < 4; k++){
        $("#mal") = Math.floor(Math.random() *11) +5;
    }
    for (var m = 0; m < 4; m++){
        $("#opal") = Math.floor(Math.random() *11) +5;
    }
    imageCrystal.attr("#chrys", numberOptions[i]);
    imageCrystal.attr("#lab", numberOptions[j]);

    imageCrystal.attr("#mal", numberOptions[k]);

    imageCrystal.attr("#opal", numberOptions[m]);


    // make images buttons and connect to previous
    crystalNumbers = crystalCount[i,j,k,m]
    console.log(crystalNumbers);
    // have clicks adjust score

})
})
