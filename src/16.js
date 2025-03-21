function addNumbers(a, b) {
  return a + b;
}

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  if (bmi < 18.5) return "Underweight";
  else if (bmi >= 18.5 && bmi <= 24.9) return "Normal";
  else if (bmi > 25 && bmi <= 30) return "Overweight";
  else return "Obese";
}

function printMessage(message, color) {
  console.log(`\`\`\`js\n${message}\n\$\``);
}
