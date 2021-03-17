var randomNumber1 = Math.floor(Math.random() * 6) +1;
// create a random number variable that will
var randomDiceImg = "dice" + randomNumber1 + ".png";
//dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImg;
//images/dice.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
//select all img tag

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
