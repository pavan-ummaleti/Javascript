// 'use strict';

// // const arr = ['array', 'ela', 'unnav'];
// // for (let x of arr) {
// //   console.log(arr[x]);
// // }

// // const names = { firstName: "pavan", lastName: "kumar", age: 23, job: "SRE" };
// // for (let a in names) {
// //   console.log(names[a]);
// // }

// // // function expression
// // console.log(age2);
// // function calcAge2(birthYear) {
// //   return 2022 - birthYear;
// // }

// // const age2 = calcAge2(1997);

// //function declaration

// // function calcAge1(birthYear) {
// //   return 2022 - birthYear;
// // }

// // const age1 = calcAge1(1998);
// // console.log(age1);

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp != 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// calcTempAmplitude([3, 5, 7, 9, 1, 7]);
// // what if we need to add 2 arrays and find min and max in that case we can use concat
// // arrray1.concat array 2
'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // // When guess is too high
  // } else if (guess > secretNumber) {
  // if (score > 1) {
  // document.querySelector('.message').textContent = '📈 Too high!';
  // score--;
  // document.querySelector('.score').textContent = score;
  // } else {
  // document.querySelector('.message').textContent = '💥 You lost the game!';
  // document.querySelector('.score').textContent = 0;
  // }

  // // When guess is too low
  // } else if (guess < secretNumber) {
  // if (score > 1) {
  // document.querySelector('.message').textContent = '📉 Too low!';
  // score--;
  // document.querySelector('.score').textContent = score;
  // } else {
  // document.querySelector('.message').textContent = '💥 You lost the game!';
  // document.querySelector('.score').textContent = 0;
  // }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
