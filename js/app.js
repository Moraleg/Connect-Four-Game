console.log('connect-four is now connected!');

$(function(){ //start window onload

  var $clickDivs = $('.clickable');//class that will be added to click divs
  // console.log($clickDivs);
  $clickDivs.on('click', clickedCircles); //event listener to click divs

  //===================================
  // Player Name Input
  //===================================
  $('#player1-input').on('keypress', function(e){
    var $inputText = $(this).val(); //saving input value to variable
    if (e.keyCode == 13){ // Enter keypress working instead of submit button

      $h2 = $('<h2>').text($(this).val()).appendTo('player1');
      console.log($inputText);
      $('#player1').append('<span>' + $(this).val() + '</span>');
      $('#player1-input').hide();
      return false;
    }
  });

  $('#player2-input').on('keypress', function(e){
    var $inputText2 = $(this).val(); //saving input value to variable
    if (e.keyCode == 13){ // Enter keypress working instead of submit button
      $('#player2').append('<span>' + $(this).val() + '</span>');
      $('#player2-input').hide();
      console.log($inputText2);
      return false;
    }

  });

}); //end window onload

//===================================
// Global Variables
//===================================
var toggle = true;
var orange = [];
var aqua = [];
var playerOne = 0;
var playerTwo = 0;

//===================================
// Gameboard divs
//===================================
//create divs for gameboard
for (i=1; i <= 42; i++){
  var $gameCircles = $('<div>').attr('id', i);
  $gameCircles.addClass('game-circles'); //adds class that creates circles
  $gameCircles.appendTo('#board'); //appends the divs to the board
  if (i > 35){
    $gameCircles.addClass('clickable'); //adds clickable class to the last row.
  }
}


//===================================
// Event Handler
//===================================
var clickedCircles = function(){

  var $discClicked = $(this).attr('id'); //div id # for divs
  // console.log($discClicked);
  var $aboveDisc = $("#" + ($discClicked - 7)); //grabs the div # in row above the clicked one
  // console.log($aboveDisc);

  if(toggle === true && $("#" + $discClicked).hasClass('clickable')){
    $("#" + $discClicked).addClass('playerone-color');
    toggle = false; //toggles players turn
    $(this).off('click', clickedCircles); // this is div id- turns click off
    // console.log($(this));
    orange.push($discClicked); //pushes id values into an array
    // console.log(orange + ' this is orange');
    $aboveDisc.addClass('clickable').on('click', clickedCircles);
    checkWin(orange);
  } else if(toggle === false && $("#" + $discClicked).hasClass('clickable')){
    $("#" + $discClicked).addClass('playertwo-color');
    toggle = true; //toggles players turn
    $(this).off('click', clickedCircles);
    aqua.push($discClicked); //pushes id values into an array
    // console.log(aqua + " this is aqua");
    $aboveDisc.addClass('clickable').on('click', clickedCircles); //adds class of clickable on click
    checkWin(aqua);
  }


};


//===================================
// Winning Possibilities
//===================================
var winningArr = [  // array of arrays of all the winning combinations
  // rows
  ['1', '2', '3', '4'],
  ['2', '3', '4', '5'],
  ['8', '9', '10', '11'],
  ['9', '10', '11', '12'],
  ['15', '16', '17', '18'],
  ['16', '17', '18', '19'],
  ['22', '23', '24', '25'],
  ['23', '24', '25', '26'],
  ['29', '30', '31', '32'],
  ['30', '31', '32', '33'],
  ['36', '37', '38', '39'],
  ['37', '38', '39', '40'],
  ['3', '4', '5', '6'],
  ['4', '5', '6', '7'],
  ['10', '11', '12', '13'],
  ['11', '12', '13', '14'],
  ['17', '18', '19', '20'],
  ['18', '19', '20', '21'],
  ['24', '25', '26', '27'],
  ['25', '26', '27', '28'],
  ['31', '32', '33', '34'],
  ['32', '33', '34', '35'],
  ['38', '39', '40', '41'],
  ['39', '40', '41', '42'],
  // columns
  ['1', '8', '15', '22'],
  ['2', '9', '16', '23'],
  ['3', '10', '17', '24'],
  ['4', '11', '18', '25'],
  ['5', '12', '19', '26'],
  ['6', '13', '20', '27'],
  ['7', '14', '21', '28'],
  ['8', '15', '22', '29'],
  ['9', '16', '23', '30'],
  ['10', '17', '24', '31'],
  ['11', '18', '25', '32'],
  ['12', '19', '26', '33'],
  ['13', '20', '27', '24'],
  ['14', '21', '28', '35'],
  ['15', '22', '29', '36'],
  ['16', '23', '30', '37'],
  ['17', '24', '31', '38'],
  ['18', '25', '32', '39'],
  ['19', '26', '33', '40'],
  ['20', '27', '34', '41'],
  ['21', '28', '35', '42'],

  //left-diagonal
  ['1', '9', '17', '25'],
  ['2', '10', '18', '26'],
  ['3', '11', '19', '27'],
  ['4', '12', '20', '28'],
  ['8', '16', '24', '32'],
  ['9', '17', '25', '33'],
  ['10', '18', '26', '34'],
  ['11', '19', '27', '35'],
  ['15', '23', '31', '39'],
  ['16', '24', '32', '40'],
  ['17', '25', '33', '41'],
  ['18', '26', '34', '42'],
  // right-diagonal
  ['7', '13', '19', '25'],
  ['6', '12', '18', '24'],
  ['5', '11', '17', '23'],
  ['4', '10', '16', '24'],
  ['14', '20', '26', '32'],
  ['13', '19', '25', '31'],
  ['12', '18', '24', '30'],
  ['11', '17', '23', '29'],
  ['21', '27', '33', '39'],
  ['20', '26', '32', '38'],
  ['19', '25', '31', '37'],
  ['18', '24', '30', '36'],

];

//===================================
// Win function
//===================================
var checkWin = function(array){
  for (var i = 0; i < winningArr.length; i++) { // winning arrays
    var connectFour = 0;//initialize
    for (var j = 0; j < winningArr[i].length; j++) { // individual values in each array
      for (var m = 0; m < array.length; m++) { //salmon and aqua player array values
        if(  winningArr[i][j] == array[m]){ //comparison between winning and salmon/aqua array
          connectFour++;
          console.log(winningArr[i]);
          console.log(array[m]);
        }
      }
        if(connectFour == 4 && toggle === false){
          playerOne++;
          $('#p1-score').append().text(playerOne);
          console.log(playerOne);
          // setTimeout(alert('Player 1 wins!'), 4000);
          alert('Player 1 wins!');
          reset();
          return;
        } else if(connectFour == 4 && toggle === true){
          playerTwo++;
          $('#p2-score').append().text(playerTwo);
          alert('Player 2 wins!');
          reset();
          return;
        }
    }
  }
};


//===================================
// Reset function
//===================================

var reset = function(){
  // console.log('reset is working');
  // $('.game-circles').removeClass('playerone-color');
  // $("#" + ($(this).attr('id') - 7)).removeClass('clickable');
  // orange = [];
  // $('.game-circles').removeClass('playertwo-color');
  // aqua = [];
  // $('.game-circles').on('click', clickedCircles);
  setTimeout(location.reload.bind(location),2000);
};


//THINGS TO DO:
// winning round and winning game message
//clearboard
