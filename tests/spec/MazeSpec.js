describe("MazeChallenge", () => {
  const fs = require("fs");
  const filePath = require("path");
  const MazeParser = require("../../src/MazeParser");
  const MazeSolver = require("../../src/MazeSolver");
  
  const filename = filePath.join(__dirname, '..', '..', 'testcases', 'maze1.txt');
//  const filename = filePath.join(__dirname, '..', '..', 'testcases', 'maze2.txt');
//  const filename = filePath.join(__dirname, '..', '..', 'testcases', 'maze3.txt');
  
  let file;
  let obj;
  let solver;
  
  beforeEach(() => {
    file = new MazeParser(fs, filename);
    obj = file.parseFile();
    
    solver = new MazeSolver(obj.grid);
  });
  
  it("should be able to parse the file input", () => {
    expect(obj).toBeDefined();
  });
  
  it("should contain a starting point and a goal", () => {
    const arr = [].concat(...obj.grid); // flatten the array of arrays
    expect(arr).toContain('S');
    expect(arr).toContain('G');
  });
  
  it("should have a valid starting point", () => {
    expect(obj.startX).toBeGreaterThanOrEqual(0);
    expect(obj.startY).toBeGreaterThanOrEqual(0);
  });
  
  it("should define the maze and path", () => {
    expect(solver.maze).toBeDefined();
    expect(solver.path).toBeDefined();
  });
  
  it("should print the solution ", () => {
    spyOn(solver, 'printSolution'); // use spy to intercept method call
    
    solver.traverse(obj.startX, obj.startY);
    
    expect(solver.printSolution).toHaveBeenCalled();
  });
  
});