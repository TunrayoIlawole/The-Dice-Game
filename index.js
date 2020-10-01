let heading = document.querySelector('h1');
let firstDice = document.querySelector('.img1');
let secondDice = document.querySelector('.img2');


let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);

let randomImage1 = `images/dice${randomNumber1}.png`;
let randomImage2 = `images/dice${randomNumber2}.png`;

firstDice.setAttribute('src', randomImage1);
secondDice.setAttribute('src', randomImage2);

if (randomNumber1 === randomNumber2) {
    heading.innerHTML = "Draw!";
}
else if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "Player 1 wins!";
}
else {
    heading.innerHTML = "Player 2 wins!";
}