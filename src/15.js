// Function to calculate Fibonacci sequence
function fibonacci(n) {
  if (n <= 1) return n;
  let fib1 = 0;
  let fib2 = 1;
  for (let i = 2; i <= n; i++) {
    let nextFib = fib1 + fib2;
    fib1 = fib2;
    fib2 = nextFib;
  }
  return nextFib;
}

// Function to check if a number is prime
function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

// Example usage:
console.log(fibonacci(10)); // Output: 55
console.log(isPrime(7)); // Output: true
