/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const array = new Array(n).fill('');
  let three = 3, five = 5;
  for (let i = 1; i <= n; i++){
    switch (i) {
      case three:
        array[i-1] += "Fizz"; // i - 1 because array[0] is 1
        three += 3;
        if (i === five) {
          array[i-1] += "Buzz";
          five += 5; 
        }
        break;
      case five:
        array[i-1] += "Buzz"; 
        five += 5; 
        break;
      default:
        array[i-1] += i; 
        break;
    }
  }
  return array;
};
