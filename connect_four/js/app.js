console.log('connect-four is now connected!');

$(function(){ //start window onload

  //event listeners go here

  //event listener
  $('.game-circles').on('click', circlecsClicked);

}); //end window onload

var salmon = 'lightsalmon';
var blue = 'lightskyblue';

for (i=1; i <= 42; i++){
  var $gameCircles = $('<div>').attr('id', i);
  $gameCircles.addClass('game-circles');
  $gameCircles.appendTo('#board');
}




var circlecsClicked = function(){

  var $discClicked = $(this).attr('id');
  console.log($discClicked);
  // var $discNumber = $discClicked - 1;
  // var $discAboveId = $(this).attr('id') - 7;
  // var $discAbove = $(this).next('#' + $discAboveId);


  if($(this).attr('id') > 35 ){
    $("#" + $discClicked).css('background-color', 'lightsalmon');
  }



};


// + $discClicked + "'")
