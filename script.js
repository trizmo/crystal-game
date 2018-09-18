$(document).ready(function () {

  var game = {
    wins: 0,
    losses: 0,
    score: 0,
    randomNumber: 0,
    gameStatus: true,
    numberOpp: [],
    lastRoundWon: false,
    lastRoundLost: false,
    goodThings: ["nice!", "good job!", "Great work!", "you got it!", "keep going!", "excellent!", "another good thing to say about you!", "awesome!", "gnarly bruh", "dude! sweet!"],
    badThings: ["maybe try something else", "keep your day job", "back to your closet", "sheesh you suck", "try again!", "i'll pretend i didn't see that", "clean this up, or your FIRED!"],
    gtR: "nice!",
    btR: "yikes",
    chars: ["./chars/char1.png", "./chars/char2.png", "./chars/char3.png", "./chars/char4.png", "./chars/char5.png", "./chars/char6.png", "./chars/char7.png", "./chars/char8.png", "./chars/char9.png", "./chars/char10.png", "./chars/char11.png", "./chars/char12.png", "./chars/char13.png" ],


    randomizer: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },

    specRandomizer: function () {
      Math.floor(Math.random() * (13 - 1) + 1)
    },

    gtR: function () {
      gtR = Math.floor(Math.random() * (10) + 0)
    },

    btR: function () {
      btR = Math.floor(Math.random() * (6) + 0)
    },

    // ## CONTAINS GAME SETTINGS
    startGame: function () {
      this.dispRandNumb(19, 120);
      this.createNumberOpp(4);
      this.createCrystal();
      this.display();
    },

    display: function () {
      $("#wins").html("Total Wins: " + game.wins)
      $("#losses").html("Total Losses: " + game.losses)
    },

    newRound: function () {
      if (this.gameStatus === false) {
        this.gameStatus = true;
        game.numberOpp = [];
        $("#crystalDisp").html("");
        game.startGame();
        game.score = 0;
        $("#scoreDisp").html("0");
        $("#nextround").html("")

        if (this.lastRoundWon === true) {
          this.lastRoundWon = false;
          let reset = $("<p>");
          reset.addClass("winner");
          game.gtR();
          reset.text(game.goodThings[gtR]);
          console.log("Good: " + gtR);
          $("#nextround").append(reset);
        } else {
          this.lastRoundLost = false;
          let reset = $("<p>");
          reset.addClass("loser");
          game.btR();
          reset.text(game.badThings[btR]);
          console.log("Bad: " + btR);
          $("#nextround").append(reset);
        }
      }
    },

    dispRandNumb: function (min, max) {
      random = this.randomizer(min, max);
      this.randomNumber = random;
      randNumber = $("<span>");
      randNumber.addClass("randomNumber");
      randNumber.attr("id", "randNumb");
      randNumber.attr("data-randomNumber", random);
      randNumber.text(random);
      console.log("Running dispRandNumb: " + random);
      $("#numbDisp").html(randNumber);
    },

    createNumberOpp: function (NOC) {
      console.log("createNumberOpp running");
      while (this.numberOpp.length != NOC) {
        rand = Math.floor(Math.random() * (13 - 1) + 1)
        console.log("rand: " + rand)
        // this.numberOpp.push(rand);

        if (this.numberOpp.includes(rand)) {
          console.log("SKIPPED");
        }
        else {
          this.numberOpp.push(rand);
          console.log("pushed")
        }
        console.log(this.numberOpp)
      }

    },

    createCrystal: function () {
      var points;
      for (var i = 0; i < 4; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-img img-fluid");
        imageCrystal.attr("id", "crystals")
        var charPicker = Math.floor(Math.random() * (13) + 0);

        imageCrystal.attr("src", this.chars[charPicker]);
        console.log(this.chars[charPicker]);
        imageCrystal.attr("data-crystalvalue", this.numberOpp[i])
        $("#crystalDisp").append(imageCrystal);
        // $("#crystalNoDisp").append(this.numberOpp[i] + " " + "-" + " ");
        imageCrystal.click(function () {
          points = ($(this).data("crystalvalue"));
          game.score += points;
          console.log("score is: " + game.score);
          console.log("randomNumber is: " + game.randomNumber);
          $("#crysClicks").prepend('<p>' + "regular click worth: " + points + '</p>');
          $("#scoreDisp").html(game.score);

          if (game.score === game.randomNumber) {
            imageCrystal.off();
            game.wins++;
            game.gameStatus = false;
            game.lastRoundWon = true;
            console.log("Number of wins: " + game.wins);
            game.newRound();

          } else if (game.score > game.randomNumber) {
            imageCrystal.off();
            game.losses++;
            game.gameStatus = false;
            game.lastRoundLost = true;
            console.log("Number of wins: " + game.losses);
            game.newRound();
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
  game.startGame();

});

