function changeColor() {
  let text1 = document.getElementById("txt");
  text1.style.color = "blue";
}

let element = document.getElementById("button");
element.addEventListener("click", changeContent);

function changeContent() {
  element.innerHTML = "clicked";
  document.getElementById("text").innerHTML = "well done";
}

let change = document.getElementById("show");
let change2 = document.getElementByTagName("body");

function displayText() {
  change.innerHTML = "You just clicked the button";
  change.style.color = "white";
  change.style.backgroundColor = 'blue'
}
