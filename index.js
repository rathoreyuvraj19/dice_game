let a = Math.floor(Math.random() * 6) + 1;
let b = Math.floor(Math.random() * 6) + 1;
if (a > b) {
  document.querySelector("span").innerHTML = "1";
  document.querySelector("#smile1").innerHTML = "&#128512;";
  document.querySelector("#smile2").innerHTML = "&#128557;";
} else if (a < b) {
  document.querySelector("span").innerHTML = "2";
  document.querySelector("#smile2").innerHTML = "&#128512;";
  document.querySelector("#smile1").innerHTML = "&#128557;";
} else {
  document.querySelector("#win").innerHTML = "&#127881; Draw &#127881;";
  document.querySelector("#smile1").innerHTML = "&#128522;";
  document.querySelector("#smile2").innerHTML = "&#128522;";
}

document
  .querySelector("#dice1")
  .setAttribute("src", "images/dice" + a + ".png");
