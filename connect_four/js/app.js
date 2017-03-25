console.log('connect-four is now connected!');

$(function(){ //start window onload

  //event listeners go here


}); //end window onload

for (i=1; i <= 42; i++){
  $gameSquares = $('<div>').addClass('game-squares');
  $gameSquares.appendTo('#board');
}
