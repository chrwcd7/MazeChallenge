const fs = require('fs');
const filename = process.argv[2];

const MazeParser = require('./MazeParser');
const MazeSolver = require('./MazeSolver');


const { grid, startX, startY } = new MazeParser(fs, filename).parseFile();  // Parse the maze input file

const solver = new MazeSolver(grid);
solver.traverse(startX, startY);  // Traverse the maze and find the solution