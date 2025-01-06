# Type Coercion Bug in JavaScript Addition Function

This repository demonstrates a subtle bug related to type coercion in JavaScript within an addition function. The function `foo` is designed to add two numbers but incorrectly returns `null` if either input is `0` due to loose comparison using `===`. This is because `0` is considered a falsy value in JavaScript. 

The `bug.js` file contains the buggy code, and the `bugSolution.js` file provides a corrected version that addresses the type coercion issue and handles `0` as a valid numerical input.