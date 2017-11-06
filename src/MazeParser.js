class MazeParser {
  
  constructor(fs, filename) {
    this.fs = fs;
    this.filename = filename;
  }
  
  parseFile() {
    const grid = [];
    let startX;
    let startY;
    
    const arr = this.fs.readFileSync(this.filename).toString().split("\n");
    for (let i in arr) {
      grid.push(arr[i].trim().split(""));
      if (grid[i].includes('S')) { // Find the starting point
        startX = parseInt(i);
        startY = grid[i].indexOf('S');
      }
    }
    return {
      grid,
      startX,
      startY
    };
  }
  
}

module.exports = MazeParser;