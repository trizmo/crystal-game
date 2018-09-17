$(document).ready(function () {


  var game = {
    wins: 0,
    losses: 0,
    score: 0,

    addScore: function (score) {
      console.log("previous score: " + score)

      console.log("new score: " + score);
    },

    winCounter: function (wins) {
      wins++ ,
        console.log(wins);
    },
    lossCounter: function (loss) {
      loss++ ,
        console.log(loss);
    },
    randomizer: function (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },

    dispRandNumb: function (min, max) {
      var randNumber = $("<span>");
      randNumber.addClass("randomNumber");
      randNumber.attr("id", "randNumb");
      randNumber.attr("data-randomNumber", this.randomizer(min, max))
      randNumber.text(this.randomizer(min, max))
      console.log("Running dispRandNumb OK")
      $("#numbDisp").append(randNumber)

    },

    numberOpp: [3, 5, 8, 10],
    createCrystal: function () {

      for (var i = 0; i < this.numberOpp[i]; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-img img-fluid");
        imageCrystal.attr("id", "crystals")
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
        imageCrystal.attr("data-crystalvalue", this.numberOpp[i])
        $("#crystalDisp").append(imageCrystal);
        $("#crystalNoDisp").append(this.numberOpp[i] + " " + "-" + " ");





      }



    },

    scoreDisplay: function () {
      var scoreDisp = $("<span>");
      scoreDisp.addClass("score");
      scoreDisp.attr("data-score", this.score);
      scoreDisp.text("Current Score: " + this.score);
      $("#scoreDisp").append(scoreDisp);

    },



  } // end of game object


  var score = $("#crystalDisp").on("click", function () {
    console.log("crystal clicked! number is: " + game.numberOpp);
  });

  function boundFn() { 
    score.bind(game)
  }
  boundFn();



  // calling game.functions
  game.dispRandNumb(2, 1000);
  game.createCrystal();
  game.scoreDisplay();
  // game.onCrystClick();


});

