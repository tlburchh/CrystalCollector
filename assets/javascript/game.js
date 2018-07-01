$(document).ready(function(){

  var stopGame = false;
  var score = 0;
  var goalScore = [];
  var winCount = 0;
  var lossCount = 0;  
    //generates random number between 40 and 40
  goalScore = Math.floor(Math.random() * 21) +40;
    console.log(goalScore);
    $('.randomnumber').text(goalScore);
     //designates each crystal as an object
    // var crystalSelect = {
    //     crystalType: {

    //         firstCrystal: $('#chrys'),
    //         secondCrystal: $('#lab'),
    //         thirdCrystal: $('#mal'),
    //         forthCrystal: $('#opal')}
            
    //     }



        /******************************************************* */
        var randNum = Math.floor(Math.random() * 11) +5;

        var crystalChrys = randNum;
        var crystalLab = randNum;
        var crystalMal = randNum;
        var crystalOpal = randNum;

        $('#chrys').on('click', function() {
            score = score + (crystalChrys);
            $('#score').text(score);
        });
        $('#lab').on('click', function() {
            score = score + (crystalLab);
            $('#score').text(score);
        });
        $('#mal').on('click', function() {
            score = score + (crystalMal);
            $('#score').text(score);
        });
        $('#opal').on('click', function() {
            score = score + (crystalOpal);
            $('#score').text(score);
        });

        // var score = function crystalClick() {
        // $('.crystal').click(function() {
        //     ('#score').html(randNum);
        //     return crystalSelect;
        // });}
        // crystalClick()
        /******************************************************** */


        if ( score < goalScore){
            stopGame = false;
        } else if (score === goalScore) {
            stopGame = true;
            winCount++;
            alert('You Win!!')
        } else (score > goalScore); {
            stopGame = true;
            lossCount++;
            alert('Try Again');
        }
        /**************
         * Data reset
         */
        if (stopGame = true) {
            goalScore = Math.floor(Math.random() * 21) +40;
            console.log(goalScore);
            score = 0;
        } else{}

         /************
          * creates random number at every click
          */
        // $('#chrys').on('click', function(){
        //     var random = Math.floor(Math.random() * 11) +5;
        //     $('#chrys').append(random);
        //     console.log(random);
        // })

    //generates random number
    //     function randNum(){
    //     var random = Math.floor(Math.random() * 11) +5;
    //     // $('.crystal').push(random);
    //     console.log(random);
    // };
    // crystalType= randNum();

    // $('.crystal').on('click', function(){
    //     crystalType.append("#score")
    // })
});




// var targetNumber
// var score = 0
// var winCount = 0
// var lossCount = 0
// var crystalCount = 0
// var crystal = $(".crystal")
// // make target number range between 40 and 60
// targetNumber = Math.floor(Math.random() *21) +40;
// // create random numbers for crystals rangine between 5 and 15
// $(".randomnumber").text(targetNumber);
// console.log(targetNumber);
// // create connection between numbers, crystal count and crystal ID
// $(document).ready(function() {

//     // $(function () {
//     //     $(".crystal").on('click', function() {
//     //         this.crystal = (Math.random() *11) +5;
//     //     });


//     $("#crystal-chrys").on("click", function(){
//     var chrys = Math.floor(Math.random() *11) +5;
//     $("#score").append("<p>" + "Total Score: 
// " + chrys + "</p>");
//     });
//     $("#crystal-lab").on("click", function(){
//     var lab = Math.floor(Math.random() *11) +5;
//     $("#score").append("<p>" + "Total Score:" + lab + "</p>");
//     });
//     $("#crystal-mal").on("click", function(){
//     var mal = Math.floor(Math.random() *11) +5;
//     $("#score").append("<p>" + "Total Score:" + mal + "</p>");
//     });
//     $("#crystal-opal").on("click", function(){
//     var opal = Math.floor(Math.random() *11) +5;
//     $("#score").append("<p>" + "Total Score:" + opal + "</p>");
//     });

//     // countCrystal = function() {
//     //   var crystalCount = [chrys + lab + mal + opal];

//     // };
//     // countCrystal();

//     //  $("#score").append("<p>" + "Total Score:" + chrys + "</p>");
       


// });




/******************
 * Attempts
 */
    // var lab = Math.floor(Math.random() *11) +5;
    // var mal = Math.floor(Math.random() *11) +5;
    // var opal = Math.floor(Math.random() *11) +5;
    // var lab = $("#lab");
    // var mal = $("#mal");
    // var opal = $("#opal");

    // // for (var i = 0; i < 4; i++){
    //     chrys = ;
    // }
    // for (var j = 0; j < 4; j++){
    //     lab = Math.floor(Math.random() *11) +5;
    // }
    // for (var k = 0; k < 4; k++){
    //     mal = Math.floor(Math.random() *11) +5;
    // }
    // for (var m = 0; m < 4; m++){
    //     opal = Math.floor(Math.random() *11) +5;
    // }
    


    // if (chrys || lab || mal || opal )
    // lab.attr("#lab").val([j]);

    // mal.attr("#mal").val([k]);

    // opal.attr("#opal").val([m]);


    // make images buttons and connect to previous
    // crystalNumbers = crystalCount[i,j,k,m]
    // console.log(crystalNumbers);
    // have clicks adjust score

// });