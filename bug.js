function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Correct handling for 0,0
  } else if (a === 0) {
    return b; // Correct handling for 0,b
  } else if (b === 0) {
    return a; // Correct handling for a,0
  }
  return a / b; // Incorrect handling: potential division by zero
}

console.log(foo(10,2)); // Output: 5
console.log(foo(10,0)); // Output: Infinity
console.log(foo(0,2)); // Output: 0
console.log(foo(0,0)); // Output: 0