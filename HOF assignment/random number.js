let delayInSeconds = 3;
let remainingTime = delayInSeconds;

console.log(`Generating random number in ${remainingTime} seconds...`);

let countdownInterval = setInterval(() => {
  remainingTime--;
  console.log(`${remainingTime} seconds remaining...`);
}, 1000);

setTimeout(() => {
  clearInterval(countdownInterval);
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(`Random number generated: ${randomNumber}`);
}, delayInSeconds * 1000);
