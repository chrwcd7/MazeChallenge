# MazeChallenge
A simple maze solving algorithm in Node.js.

Given a two - dimensional matrix representing a maze with a single arbitrary
starting and ending point, as well as an arbitrary number of wall blocks, the application outputs an actor’s route in the
form of two - dimensional points from start to finish. The actor cannot possess
any knowledge of the route beforehand; it discovers the route
progressively, being only able to inspect and move to any squares that are
North, South, East and West from its current position.

The input is read from a text file like this one:

XX__G__XX_X <br />
__XXXX____X <br />
__X__X__X_X <br />
XX_____XX_X <br />
_S__X___XXX <br />
XX___X__X_X <br />
__XXX__XX_X <br />

where S corresponds to the starting point, G to the goal, X to a wall block and _ to an accessible square.



<br />
<br />
In order to run the application, open Node.js command prompt (tested and working on version 7.10.0),
cd to the src folder and type ‘node main.js ../testcases/maze$.txt’ 
where $ can be 1,2,3,4 (4 testcases are included in the folder /testcases), or provide your own testcase.

A spec file is provided in Jasmine and is located inside the /tests/spec folder.
To execute it you need to first run ‘npm install –g jasmine’
and then cd to the spec folder and run ‘jasmine MazeSpec.js’.
