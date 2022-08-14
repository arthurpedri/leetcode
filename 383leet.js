/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
/*   my solution:
  dict = {}
  for (let c of magazine) {
    if (!(c in dict)) {
      dict[c] = 0;
    }
    dict[c]++;
  }  

  for (let c of ransomNote) {
    if (c in dict && dict[c] > 0) {
      dict[c]--;
    } else {
      return false;
    }
  }
  return true; */

  // after seeing better solutions:

  for (let c of ransomNote) {
    if (magazine.search(c) !== -1) {
      magazine = magazine.replace(c, '');
    } else {
      return false;
    }
  }

  return true;
};