function foo(a, b) {
  if (a === null && b === null) {
    return null;
  }
  //Explicit type checking to handle 0, null and undefined properly
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0; //Or throw an error as per requirements
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(0, 2)); // Output: 2
console.log(foo(1, 0)); // Output: 1
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: null