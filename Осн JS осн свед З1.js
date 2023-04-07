"use strict";

function solveEquation(a, b, c) {
  let k = [];
  let d = b ** 2 - 4 * a * c;
  
  if (d === 0) {
    k[0] = -b / (2 * a);
  } else if (d > 0) {
    k[0] = (-b + Math.sqrt(d)) / (2 * a);
    k[1] = (-b - Math.sqrt(d)) / (2 * a);
  }; 
};