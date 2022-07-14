// London AppBrewry 2021 Complete Web Developer
// JQuery Project
// User and Game values 
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

// Click event and action 
  $(".btn").click(function(event){
    
    var userChosenColour = event.target.id; //$(this).attr("id"); <- another way 
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    console.log(userChosenColour);
    animatePress(userChosenColour);
  });
  

// Game Sequence 
function nextSequence(){
  
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200) ;
  playSound(randomChosenColour);
} ;

// Sound Function 
function playSound(name){
var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
} ;

// Press Animation 
function animatePress(currentColour) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);

} ;
nextSequence();
alert("Game Launch ");








