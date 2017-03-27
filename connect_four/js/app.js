console.log('connect-four is now connected!');

$(function(){ //start window onload


  //event listener
  $('.game-circles').on('click', circlesClicked);

}); //end window onload

//===================================
// Global Variables
//===================================
var salmon = 'lightsalmon';
var blue = 'lightskyblue';
var toggle = true;


//create divs for gameboard
for (i=1; i <= 42; i++){
  var $gameCircles = $('<div>').attr('id', i);
  $gameCircles.addClass('game-circles');
  $gameCircles.appendTo('#board');
}



//===================================
// Event Handler
//===================================
var circlesClicked = function(){

  var $discClicked = $(this).attr('id');
  console.log($discClicked);
  var $discAboveId = $(this).attr('id') - 7;
  // var $discAbove = $(this).next('#' + $discAboveId);
  // if (number below has color){
  //   fill this in
  // } else
  // dont

  if($(this).attr('id') > 35 && toggle === true){
    $("#" + $discClicked).css('background-color', 'lightsalmon').text('p1');
    toggle = false;
    $(this).off('click', circlesClicked);
  } else if($(this).attr('id') > 35){
    $("#" + $discClicked).css('background-color', 'aquamarine').text('p2');
    toggle = true;
    $(this).off('click', circlesClicked);
  }

};
