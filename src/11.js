const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const getRandomString = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let randomString = "";
  for (let i = 0; i < 5; i++) {
    randomString += chars[Math.floor(Math.random() * chars.length)];
  }
  return randomString;
};

const getRandomColor = () => {
  const colors = ["red", "green", "blue", "yellow"];
  let randomColor = "";
  for (let i = 0; i < 3; i++) {
    randomColor += colors[Math.floor(Math.random() * colors.length)];
  }
  return randomColor;
};
