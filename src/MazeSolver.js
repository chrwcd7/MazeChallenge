class MazeSolver {

  constructor(maze, path = []) {
    this.maze = maze;
    this.path = path;
  }

  traverse(row, col) {
    if (this.maze[row][col] == 'G') {
      this.path.push([row, col]);
      this.printSolution(row, col, this.path);
    } else if ((this.maze[row][col] == '_') || (this.maze[row][col] == 'S')) {  // If it is a valid square
        this.path.push([row, col]); // Add the square to the path
        this.maze[row][col] = 42; // Make the square no longer accessible 

        if (this.maze[row-1]) {
          this.traverse(row-1, col);  // Up
        }
      
        if (this.maze[row][col+1]) {
          this.traverse(row, col+1);  // Right
        }
      
        if (this.maze[row][col-1]) {
          this.traverse(row, col-1);  // Left
        }
      
        if (this.maze[row+1]) {
          this.traverse(row+1, col);  // Down
        }
        
        this.path.pop([row, col]);  // If we reach this point it means the square does not belong to the path so we remove it
    } else {
      return;
    }
  };
  
  printSolution(row, col, path) {
    console.log(`\n We reached the goal at (${row},${col})`);
    console.log(`\n The path the actor followed is:\n\n`, path);
    process.exit(1); // exit the process
  };

}

module.exports = MazeSolver;