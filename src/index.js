module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix == undefined || matrix.length == 0) {
        return [];
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 != 0) {
            matrix[i].reverse();
        }
        for (let j = 0; j < matrix[i].length; j++) {
            result.push(matrix[i][j]);
        }
    } return result;
};
