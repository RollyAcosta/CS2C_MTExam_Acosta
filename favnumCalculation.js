let favNumber = parseInt(prompt("Enter your favorite number: "));
let guess = 0;

while (guess !== favNumber) {
  guess = parseInt(prompt("Guess my favorite number: "));
  if (guess < favNumber) {
    alert("Too low!");
  } else if (guess > favNumber) {
    alert("Too high!");
  } else {
    alert("Correct!");
  }
}
