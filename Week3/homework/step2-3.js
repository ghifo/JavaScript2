'use strict';

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  let result = '';

  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3)); // repeatStringNumTimesWithFor("abc", 3) ==>> "abcabcabc"

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  let result = '';

  while (num > 0) {
    result += str;
    num--;
  }
  console.log(result);
  return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  let result = '';

  do {
    result += str;
    num--;
  } while (num > 0);

  return result;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));


// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};
