$(document).ready(function () {
  score = 0;


  var game = {
    wins: 0,
    losses: 0,
    score: 0,
    random: 0,

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
      return Math.floor(Math.random() * (max - min + 1) + min)
    },

    dispRandNumb: function (min, max) {
      random = this.randomizer(min, max)
      randNumber = $("<span>");
      randNumber.addClass("randomNumber");
      randNumber.attr("id", "randNumb");
      randNumber.attr("data-randomNumber", random)
      randNumber.text(random)
      console.log("Running dispRandNumb OK: " + this.random)
      $("#numbDisp").append(randNumber)

    },

    numberOpp: [2, 5, 7, 10],
    createCrystal: function () {
      var points;
      for (var i = 0; i < this.numberOpp[i]; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-img img-fluid");
        imageCrystal.attr("id", "crystals")
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
        imageCrystal.attr("data-crystalvalue", this.numberOpp[i])
        $("#crystalDisp").append(imageCrystal);
        $("#crystalNoDisp").append(this.numberOpp[i] + " " + "-" + " ");
        imageCrystal.click(function () {
          points = ($(this).data("crystalvalue"));
          game.score += points;
          console.log("score is: " + game.score);
          console.log("randomNumber is: " + game.random);
          $("#crysClicks").prepend('<p>' + "crystal click worth: " + points + '</p>');
          $("#scoreDisp").html(game.score);
         
          
          if (game.score === game.random) {
            alert("winner");
            console.log("random number is: " + game.random)
          }


        });

      }

    },

    scoreDisplay: function () {
      var scoreDisp = $("<span>");
      scoreDisp.addClass("score");
      scoreDisp.attr("data-score", this.score);
      scoreDisp.text("Current Score: " + this.score);
      $("#scoreDisp").html(this.score);


    },



  } // end of game object








  // calling game.functions
  game.dispRandNumb(21, 31);
  game.createCrystal();
  // game.scoreDisplay();



  if (score === this.randNumber) {
    alert("winner");
    console.log("random number is: " + game.randNumber)
  }



});

