function searchMatrix(matrix: number[][], target: number): boolean {
  let i = -1; // st
  for (let row of matrix) {
    if (target < row[0]) {
      break;
    }
    i++;
  }

  if (i === -1) return false;

  for (let value of matrix[i]) {
    if (target === value) return true;
  }

  return false;
};
