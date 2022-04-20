/*
Task:
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move 
to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
The test cases are generated so that the answer will be less than or equal to 2 * 109.

Link:
https://leetcode.com/problems/unique-paths/
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m === 0 && n === 0){
        return 0;
    }
    
    let matrix = Array.from({length: m}, el => new Uint32Array(n));
    matrix[0][0] = 1;
	
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(!i && !j) {
               continue;
            } else {
				let iCoordinate = i ? matrix[i-1][j] : 0;
				let jCoordinate = j ? matrix[i][j-1] : 0;
                matrix[i][j] = iCoordinate + jCoordinate;
            }
        }
    }
    
    return matrix[m-1][n-1];
};
