/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return String(number).search('-') === -1;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  for (let i = 0; i < 8; i += 1) {
    if (
      (queen.x - 1 + i) % 8 === queen.y - 1 &&
      (king.x - 1 + i) % 8 === king.y - 1
    ) {
      return true;
    }
    if (
      8 - ((queen.y - 1 + i) % 8) === queen.x - 1 &&
      8 - ((king.y - 1 + i) % 8) === king.x - 1
    ) {
      return true;
    }
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  const bol =
    a + b > c && a + c > b && b + c > a && (a === b || b === c || c === a);

  return bol;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const mas = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  if (num <= 10) return mas[num - 1];
  let x = '';
  let i = 0;
  while (i < Math.trunc(num / 10)) {
    x += 'X';
    i += 1;
  }
  return x + mas[(num % 10) - 1];
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const mas = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let str = '';
  for (let i = 0; i < numberStr.length - 1; i += 1) {
    switch (numberStr[i]) {
      case '-':
        str += 'minus ';
        break;
      case '.':
        str += 'point ';
        break;
      case ',':
        str += 'point ';
        break;
      default:
        str += `${mas[numberStr[i]]} `;
    }
  }
  switch (numberStr[numberStr.length - 1]) {
    case '-':
      str += 'minus';
      break;
    case '.':
      str += 'point';
      break;
    case ',':
      str += 'point';
      break;
    default:
      str += `${mas[numberStr[numberStr.length - 1]]}`;
  }
  return str;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    newStr += str[i];
  }
  return newStr === str;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length - 1; i += 1) {
    if (letter === str[i]) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  for (let i = 0; i < String(num).length; i += 1) {
    if (digit === Number(String(num)[i])) return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  const mas = [arr[0]];
  for (let i = 0; i < arr.length - 3; i += 1) {
    mas[i + 1] = mas[i] + arr[i + 1];
  }
  let sum = 0;
  let final = -1;
  for (let i = 0; i < arr.length - 3; i += 1) {
    sum += arr[arr.length - 1 - i];
    if (sum === mas[mas.length - 1 - i]) final = mas.length - i;
  }
  return final;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const mas = [];
  for (let i = 0; i < size; i += 1) {
    mas[i] = new Array(size);
  }
  let value = 0;
  let startX = 0;
  let startY = 0;
  let endX = size;
  let endY = size;
  while (startX < endX && startY < endY) {
    for (let i = startY; i < endY; i += 1) {
      value += 1;
      mas[startX][i] = value;
    }
    startX += 1;

    for (let i = startX; i < endX; i += 1) {
      value += 1;
      mas[i][endY - 1] = value;
    }
    endY -= 1;

    for (let i = endY - 1; i >= startY; i -= 1) {
      value += 1;
      mas[endX - 1][i] = value;
    }
    endX -= 1;

    for (let i = endX - 1; i >= startX; i -= 1) {
      value += 1;
      mas[i][startY] = value;
    }
    startY += 1;
  }
  return mas;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const matrixNew = matrix;
  const len = matrix.length;
  for (let i = 0; i < len / 2; i += 1) {
    for (let j = i; j < len - i - 1; j += 1) {
      const temp = matrixNew[i][j];
      matrixNew[i][j] = matrixNew[len - 1 - j][i];
      matrixNew[len - 1 - j][i] = matrixNew[len - i - 1][len - j - 1];
      matrixNew[len - i - 1][len - j - 1] = matrixNew[j][len - i - 1];
      matrixNew[j][len - i - 1] = temp;
    }
  }
  return matrixNew;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(currentArr) {
  const arr = currentArr;

  function quickSort(start, end) {
    if (start < end) {
      const current = arr[end];
      let pos = start;
      for (let j = start; j <= end - 1; j += 1) {
        if (arr[j] <= current) {
          [arr[pos], arr[j]] = [arr[j], arr[pos]];
          pos += 1;
        }
      }
      [arr[pos], arr[end]] = [arr[end], arr[pos]];

      quickSort(start, pos - 1);
      quickSort(pos + 1, end);
    }
  }
  quickSort(0, arr.length - 1);
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let copyStr = str;
  for (let i = 0; i < iterations; i += 1) {
    let strLeft = '';
    let strRight = '';
    for (let j = 0; j < str.length / 2; j += 1) {
      strLeft += copyStr[(j - 1) * 2 + 2];
      strRight += copyStr[(j - 1) * 2 + 3];
    }
    copyStr = strLeft + strRight;
    if (copyStr === str) return shuffleChar(copyStr, iterations % (i + 1));
  }
  return copyStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let num = number;
  let mas = [];
  while (num >= 10) {
    mas.push(num % 10);
    num = Math.trunc(num / 10);
  }
  mas.push(num);
  mas = mas.reverse();
  let i = mas.length - 1;
  while (mas[i - 1] >= mas[i]) {
    i -= 1;
  }

  const rightMas = mas.splice(i);
  const zamenaFrome = mas.pop();
  const leftMas = mas;

  const zamenaTo = Math.min(...rightMas.filter((el) => el > zamenaFrome));
  leftMas.push(zamenaTo);
  for (let j = 0; j < rightMas.length; j += 1) {
    if (rightMas[j] === zamenaTo) {
      rightMas[j] = zamenaFrome;
      break;
    }
  }
  return Number([...leftMas, ...rightMas.sort()].join(''));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
