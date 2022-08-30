function searchMatrix(matrix, target) {
    var i = -1; // st
    for (var _i = 0, matrix_1 = matrix; _i < matrix_1.length; _i++) {
        var row = matrix_1[_i];
        if (target < row[0]) {
            break;
        }
        i++;
    }
    if (i === -1)
        return false;
    for (var _a = 0, _b = matrix[i]; _a < _b.length; _a++) {
        var value = _b[_a];
        if (target === value)
            return true;
    }
    return false;
}
;
