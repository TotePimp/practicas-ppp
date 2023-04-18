
window.onload = function() {

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

button1.addEventListener("click", function() {
  button1.classList.toggle("selected");
  button2.classList.remove("selected");
});

button2.addEventListener("click", function() {
  button2.classList.toggle("selected");
  button1.classList.remove("selected");
});

}