'use strict';

let random = Math.floor(Math.random() * 50) + 1;
let score = 10;
let highScore = 0;
let myScore = 0;
document.querySelector('.click').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (guess === random) {
    if (score > highScore && score === 10) {
      highScore = score * 5 + 700;
      myScore = highScore;
    } else if (score > highScore && score === 9) {
      highScore = score * 5 + 600;
      myScore = highScore;
    } else if (score > highScore && score === 8) {
      highScore = score * 5 + 450;
      myScore = highScore;
    } else if (score > highScore && score === 7) {
      highScore = score * 5 + 350;
      myScore = highScore;
    } else if (score > highScore && score === 6) {
      highScore = score * 5 + 200;
      myScore = highScore;
    } else if (score > highScore && score === 5) {
      highScore = score * 5 + 150;
      myScore = highScore;
    } else if (score > highScore && score === 4) {
      highScore = score * 5 + 100;
      myScore = highScore;
      myScore = highScore;
    } else if (score > highScore && score === 3) {
      highScore = score * 5 + 75;
      myScore = highScore;
    } else if (score > highScore && score === 2) {
      highScore = score * 5 + 50;
      myScore = highScore;
    } else if (score > highScore && score === 1) {
      highScore = score * 5 + 25;
      myScore = highScore;
    }
    document.querySelector('.number').innerHTML = random;
    document.querySelector('.myscore').innerHTML = myScore;
    document.querySelector('.message').innerHTML = `CONGRATS YOU WON`;
    document.querySelector('.h1').innerHTML = `YOU GUESSED IT RIGHT👍`;
    document.querySelector('.highscore').innerHTML = highScore;
    document.querySelector('.display').style.backgroundImage =
      "url('dance.gif')";
  } else if (score === 1) {
    document.querySelector('.score').innerHTML = 0;
    document.querySelector('.message').innerHTML = `GAME OVER YOU LOST`;
    document.querySelector('.h1').innerHTML = `BETTER LUCK NEXT TIME😢🤦‍♂️`;
    document.querySelector('.display').style.backgroundImage =
      "url('crying.gif')";
  } else if (guess !== random && guess > random) {
    score = score - 1;
    document.querySelector('.score').innerHTML = score;
    document.querySelector('.message').innerHTML = `YOUR GUESS IS HIGH`;
  } else if (guess !== random && guess < random) {
    score = score - 1;
    document.querySelector('.score').innerHTML = score;
    document.querySelector('.message').innerHTML = `YOUR GUESS IS LOW`;
  }
});
document.querySelector('.btn').addEventListener('click', function () {
  random = Math.floor(Math.random() * 50) + 1;
  score = 10;
  highScore = 0;
  myScore = 0;
  if (score > highScore && score === 10) {
    highScore = score * 5 + 700;
  } else if (score > highScore && score === 9) {
    highScore = score * 5 + 600;
  } else if (score > highScore && score === 8) {
    highScore = score * 5 + 450;
  } else if (score > highScore && score === 7) {
    highScore = score * 5 + 350;
  } else if (score > highScore && score === 6) {
    highScore = score * 5 + 200;
  } else if (score > highScore && score === 5) {
    highScore = score * 5 + 150;
  } else if (score > highScore && score === 4) {
    highScore = score * 5 + 100;
  } else if (score > highScore && score === 3) {
    highScore = score * 5 + 75;
  } else if (score > highScore && score === 2) {
    highScore = score * 5 + 50;
  } else if (score > highScore && score === 1) {
    highScore = score * 5 + 25;
  }
  document.querySelector('.myscore').innerHTML = myScore;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').innerHTML = '?';
  document.querySelector('.score').innerHTML = score;
  document.querySelector('.message').innerHTML = 'ENTER YOUR NUMBER';
  document.querySelector('.h1').innerHTML = 'Guess My Number!';
  document.querySelector('.display').style.backgroundImage =
    "url('penguin.png')";
});
