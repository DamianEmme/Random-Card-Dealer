/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

window.onload = function() {
  let figure = ["♠", "♣", "♥", "♦"];
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let figureIndex = Math.floor(Math.random() * figure.length);
  let numberIndex = Math.floor(Math.random() * number.length);

  {
    document.querySelector("#palo").innerHTML += `<h1>
            ${figure[figureIndex]}</h1>`;
    document.querySelector("#numero").innerHTML += `<h1>
            ${number[numberIndex]}</h1>`;
    console.log(figure[figureIndex]);
    document.querySelector("#paloB").innerHTML += `<h1>
            ${figure[figureIndex]}</h1>`;
  }
  if (figure[figureIndex] == "♦" || figure[figureIndex] == "♥") {
    document.getElementById("palo").style.color = "red";
    document.getElementById("numero").style.color = "red";
    document.getElementById("paloB").style.color = "red";
  }
};

/*window.onload = () => {
  document.querySelector(".container").addEventListener("click", () => {
    document.querySelector("#newCard").innerHTML = generateCard();
  });
};*/
