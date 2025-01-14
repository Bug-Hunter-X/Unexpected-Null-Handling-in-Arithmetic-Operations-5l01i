function foo(a, b) {
  if (a === null || b === null) {
    return null; // This is where the bug often lies
  }
  return a + b; 
}