/**
 * An Algorithm to determine the minimum distance required for truck to deliver the order
 * @param {Array} lot - The grid of the travel area
 * @returns {number}: The value of the shortest distance travled
 */
function findDistance(lot) {
    const possibleMove = [
        [-1, 0], // up
        [0, -1], // left
        [0, 1], // right
        [1, 0] // down
    ];

    let xMax = lot.length;
    let yMax = lot[0].length;
    let visited = Array(xMax).fill(null).map(() => Array(yMax).fill(0));
    visited[0][0] = 1;

    let queue = [];
    // contains the point and distance, e.g. [1,1,2],
    // or [0,0,0] (because for origin [0,0] the distance is 0)
    queue.push([0, 0, 0]);
    while (queue.length > 0) {
        let currentPoint = queue[0];
        if (lot[currentPoint[0]][currentPoint[1]] === 9) {
            return currentPoint[2];
        }
        queue.shift();
        for (let i = 0; i < 4; i++) {
            let nextX = currentPoint[0] + possibleMove[i][0];
            let nextY = currentPoint[1] + possibleMove[i][1];
            if (nextX >= 0 && nextY >= 0 && nextX < xMax && nextY < yMax) {
                if ((lot[nextX][nextY] === 1 || lot[nextX][nextY] === 9) && !visited[nextX][nextY]) {
                    visited[nextX][nextY] = 1;
                    // putting each adjacent node into queue, meaning this is BFS
                    queue.push([nextX, nextY, currentPoint[2] + 1]);
                }
            }
        }
    }
    return -1;
}

// Test 1
let lot = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 9, 1]
];

console.log(findDistance(lot));

// Test 2
lot = [
    [1, 1, 1, 1],
    [0, 1, 1, 1],
    [0, 1, 0, 1],
    [1, 1, 9, 1],
    [0, 0, 1, 1]
];

console.log(findDistance(lot) === 5);