# Unexpected Null Handling in JavaScript Arithmetic

This repository demonstrates a common error in JavaScript involving unexpected null handling within arithmetic operations.  The `foo` function in `bug.js` incorrectly handles null values. The solution in `bugSolution.js` addresses the issue. 

## Problem
The original `foo` function does not correctly handle null values.  If `a` or `b` are null, the function returns null instead of potentially providing a default or handling the null explicitly. This behavior is often unintended, leading to unexpected results or program crashes.

## Solution
The `bugSolution.js` file provides a solution to this problem. We use a ternary operator to provide default values (0) for null inputs to prevent errors and return a meaningful result.

This illustrates the importance of robust null checks and handling in JavaScript to prevent unexpected errors and ensure reliable program execution.