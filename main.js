$(document).ready(function() {
  $('.reload').hide();
  // creation classe du jeux plus  ou moins

  var Game = function(max) {
    // Definition de la propirité answer meme si Max absent
    this.answer = max ? Math.floor(Math.random() * max) : Math.floor(Math.random() * 10000);
    this.tantative = 0;
    // Definition de la methode test qui dit si le joueur a bien deviner
    this.test = function(guess) {
      if (guess == this.answer) {
        return false;
      } else if (guess > this.answer) {

        return "C'est moins que " + guess;

      } else {

        return "C'est plus que " + guess;

      }

    }
  }



// Fonctionalité de la page

  var play = new Game(2000);


  $('input[name="go"]').on("click", function(e) {
    e.preventDefault();
    var bet = play.test($('input[type="number"]').val());

    if (bet) {
      $(".jeuxTest").replaceWith('<p class="jeuxTest">' + bet + '</p>');
      $('input[type="range"]').val($('input[type="number"]').val());
      $('input[type="number"]').val('');

    } else {
      $(".jeuxTest").replaceWith('<p class="jeuxTest">Bravo !</p>');
      $('input[type="number"]').val('');
      $('.guess').hide();
      $('.reload').show();
    }

  });


  $('input[name="reload"]').on("click", function(e) {
    e.preventDefault();
    play = new Game(2000);
    $('.guess').show();
    $('.reload').hide();
  });

  $('input[name="playAlone"]').on("click", function(e) {
    e.preventDefault();
    play = new Game(2000);
    $('.guess').show();
    $('.reload').hide();
  });


});
