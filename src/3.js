
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateRandomCode(length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += String.fromCharCode(getRandomInt(26) + 97);
  }
  return result;
}