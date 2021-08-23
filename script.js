'use strict';

let random = Math.floor(Math.random() * 1000) + 1;
let score = 10;
let highScore = 0;
let myScore = 0;
console.log(score, highScore, myScore);
document.querySelector('.click').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (guess === random) {
    if (score === 10) {
      myScore = score * 5 + 700;
      // highScore = myScore;
    } else if (score === 9) {
      myScore = score * 5 + 600;
      // highScore = myScore;
    } else if (score === 8) {
      myScore = score * 5 + 450;
      // highScore = myScore;
    } else if (score === 7) {
      myScore = score * 5 + 350;
      // highScore = myScore;
    } else if (score === 6) {
      myScore = score * 5 + 200;
      // highScore = myScore;
    } else if (score === 5) {
      myScore = score * 5 + 150;
      // highScore = myScore;
    } else if (score === 4) {
      myScore = score * 5 + 100;
      // highScore = myScore;
    } else if (score === 3) {
      myScore = score * 5 + 75;
      // highScore = myScore;
    } else if (score === 2) {
      myScore = score * 5 + 50;
      // highScore = myScore;
    } else if (score === 1) {
      myScore = score * 5 + 25;
      // highScore = myScore;
    }
    document.querySelector('.number').innerHTML = random;
    document.querySelector('.myscore').innerHTML = myScore;
    document.querySelector('.message').innerHTML = `CONGRATS YOU WON`;
    document.querySelector('.h1').innerHTML = `YOU GUESSED IT RIGHT👍`;
    // document.querySelector('.highscore').innerHTML = highScore;
    document.querySelector('.display').style.backgroundImage =
      "url('dance.gif')";
    // console.log(score, highScore, myScore);
  } else if (score === 1) {
    document.querySelector('.number').innerHTML = random;
    document.querySelector('.guess').style.visibility = 'hidden';
    document.querySelector('.between').innerHTML = `WAS THE GUESS`;
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
  random = Math.floor(Math.random() * 1000) + 1;
  // console.log(score, highScore, myScore);
  if (myScore > highScore) {
    document.querySelector('.highscore').innerHTML = myScore;
    highScore = myScore;
  } else if (myScore <= highScore) {
    document.querySelector('.highscore').innerHTML = highScore;
  }
  // } else if (myScore === highScore) {
  //   document.querySelector('.highscore').innerHTML = myScore;
  // }

  // console.log(score, highScore, myScore);

  myScore = 0;
  score = 10;
  document.querySelector('.guess').style.visibility = 'visible';
  document.querySelector('.between').innerHTML = `GUESS FROM 1 TO 100`;
  document.querySelector('.myscore').innerHTML = myScore;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').innerHTML = '?';
  document.querySelector('.score').innerHTML = score;
  document.querySelector('.message').innerHTML = 'ENTER YOUR NUMBER';
  document.querySelector('.h1').innerHTML = 'Guess The Number!';
  document.querySelector('.display').style.backgroundImage =
    "url('penguin.png')";
  // console.log(score, highScore, myScore);
});
// console.log(score, highScore, myScore);
