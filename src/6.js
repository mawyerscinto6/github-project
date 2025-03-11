function getRandomJSCode() {
  // Generate a random number between 1 and 10
  const num = Math.floor(Math.random() * 10) + 1;

  // Return a message based on the random number
  if (num % 2 === 0) {
    return "The number is even";
  } else {
    return "The number is odd";
  }
}
