/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let sum = 0;

  const dict = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000, IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900};
  
  for (let i = 0; i < s.length; i++) {
    let slice = s.slice(i, i+2);
    if (slice in dict){
      sum += dict[slice];
      i++;
    }
    else {
      sum += dict[s[i]];
    }
  }

  return sum;
};
