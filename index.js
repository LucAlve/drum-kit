
for (i=0; i<document.querySelectorAll(".drum").length; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click", function() {
    // Catch where in the page the mouse clicked and select the class
    var buttonInnerHTML = this.innerHTML

    makeSound(buttonInnerHTML);  

    buttonAnimation(buttonInnerHTML);

  });
};

document.addEventListener("keypress", function(event) {
  // event.key tells you witch key was pressed
  makeSound(event.key)
  
  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
  
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

      default: console.log(key)

  } 
};


function buttonAnimation(currentKey) {

  var activateButton = document.querySelector("." + currentKey);

  activateButton.classList.add("pressed");

  setTimeout(function(){
    activateButton.classList.remove("pressed");
  }, 100)

};