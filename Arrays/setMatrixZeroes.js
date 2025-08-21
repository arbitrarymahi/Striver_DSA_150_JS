// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const firstcell = matrix[0][0];
    let firstRowZero = matrix[0].includes(0);    
    for (let i=1;i<m;i++){
        for (let j=0;j<n;j++){
            if(matrix[i][j]=== 0){
                 // rest of matrix
                    matrix[0][j] = 0;
                    matrix[i][0] = 0;
            } 
        }
        if(matrix[i][0] === 0) matrix[i] = new Array(n).fill(0);
    }
    for (let i=1;i<m;i++){
        if(matrix[i][0] === 0)continue;
        for (let j=0;j<n;j++){
            if(matrix[0][j] === 0) matrix[i][j] = 0;
        }
    }
    if (firstRowZero) matrix[0] = new Array(n).fill(0);
};

// setZeroes([[1,1,1],[1,1,1],[0,1,1]]);
setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]);
