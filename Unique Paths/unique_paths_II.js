/*
Task:
You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). 
The robot tries to move to the bottom-right corner (i.e., grid[m-1][n-1]). The robot can only move either down or right at any point in time.
An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.
Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
The testcases are generated so that the answer will be less than or equal to 2 * 109.

Link:
https://leetcode.com/problems/unique-paths-ii/
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0]) {
        return 0;
    }
    
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    let matrix = Array.from({length: m}, el => new Uint32Array(n));
    matrix[0][0] = 1;
	
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] || (!i && !j)) {
                continue;
            }
            else {
				let iCoordinate = i ? matrix[i-1][j] : 0;
				let jCoordinate = j ? matrix[i][j-1] : 0;
                matrix[i][j] = iCoordinate + jCoordinate;
            }
        }
    }
    return matrix[m-1][n-1];
};
