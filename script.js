
var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

var imgList = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
]

var randomImage = imgList[randomNumber1];





var img1 = document.querySelector(".img1");
img1.setAttribute("src", imgList[randomNumber1]);


var img2 = document.querySelector(".img2");
img2.setAttribute("src", imgList[randomNumber2]);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "It's a draw";
}

else {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}


