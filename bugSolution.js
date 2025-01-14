function foo(a, b) {
  // Handle null values gracefully by providing default values
  a = a === null ? 0 : a; 
  b = b === null ? 0 : b;
  return a + b; 
}