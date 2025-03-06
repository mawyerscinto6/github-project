function getRandomJsCode() {
  const codes = [
    'let name = "John";',
    'const age = 30;',
    'console.log("Hello, my name is", name);',
    'if (age > 21) {',
    '  console.log("You are old enough to vote");',
    '} else {',
    '  console.log("You are not old enough to vote");',
    '}'
  ];
  return codes[Math.floor(Math.random() * codes.length)];
}
