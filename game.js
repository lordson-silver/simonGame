// London AppBrewry 2021 Complete Web Developer
// JQuery Project
// User and Game values 
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

// if (window.matchMedia("(max-width: 600px)").matches) {


$("#start").click(function () {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }});
    // Check if user is on mobile
if($(window).width() <= 600){
  $("#level-title").text("Press Start to Begin");
}
// Check if user is on PC
if($(window).width() >= 600){
$(document).keypress(function() {
  if (!started) {
    
    nextSequence();
    $("#level-title").text("Level " + level);
    started = true;}
}); 
} 

// start game function


// Click event and action 
  $(".btn").click(function() {
    
    var userChosenColour = $(this).attr("id"); //this is the id of the button that was clicked
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    console.log(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
  });
  
  // Check if user is correct
function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Restart");
    startOver();
  }
}

  // Start Over Function
function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}


// Game Sequence 
function nextSequence(){
  userClickedPattern = [];

  if (level <= 20) {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $("#level-title").text("Level " + level);
  }
}




// Sound Function 
function playSound(name){

let audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
};

// Press Animation 
function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}









