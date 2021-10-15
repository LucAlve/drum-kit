
for (i=0; i<document.querySelectorAll(".drum").length; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click", function() {
    alert("got clicked " + i);
  });
}

//
// document.getElementsByClassName("a")[0].addEventListener("click", function() {
//   alert("got clicked");
// });
//
// document.getElementsByClassName("s")[0].addEventListener("click", function() {
//   alert("got clicked");
// });
//
// document.getElementsByClassName("d")[0].addEventListener("click", function() {
//   alert("got clicked");
// });
//
// document.getElementsByClassName("j")[0].addEventListener("click", function() {
//   alert("got clicked");
// });
//
// document.getElementsByClassName("k")[0].addEventListener("click", function() {
//   alert("got clicked");
// });
//
// document.getElementsByClassName("l")[0].addEventListener("click", function() {
//   alert("got yelled");
// });
