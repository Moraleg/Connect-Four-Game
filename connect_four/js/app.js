console.log('connect-four is now connected!');

$(function(){ //start window onload

  //event listeners go here


}); //end window onload

for (i=1; i <= 42; i++){
  var $gameCircles = $('<div>').attr('id', 'circle' + i);
  $gameCircles.addClass('game-circles');
  $gameCircles.appendTo('#board');
}
var playerTurn = "salmon";

var discColor = function(obj){
        {
            if (playerTurn == "salmon")
            {
                obj.style.background = "lightsalmon";
                obj.style.border = "1px solid #d3d3d3";
            }
            else
            {
                obj.style.backgroundColor = "lightskyblue";
                obj.style.border = "1px solid #d3d3d3";
            }
        }
      };

  discColor();
