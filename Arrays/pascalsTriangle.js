// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const pt = [[1]]
    for(let i=1; i< numRows; i++){
        pt.push([1]);
        const prevRow = pt[i-1]
        for(let j=1;j<i;j++){
            pt[i].push(prevRow[j-1]+prevRow[j])
        }
        pt[i].push(1);
    }
    return pt;
};

generate(5)