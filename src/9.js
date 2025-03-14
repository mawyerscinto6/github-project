function getRandomCode() {
  const codes = ["ABCDE", "FGHIJ", "KLMNO", "PQRST"];
  return codes[Math.floor(Math.random() * codes.length)];
}
