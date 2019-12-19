/*
1266. Minimum Time Visiting All Points

On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.

You can move according to the next rules:

In one second always you can either move vertically, horizontally by one unit or diagonally (it means to move one unit vertically and one unit horizontally in one second).
You have to visit the points in the same order as they appear in the array.


Example 1:
Input: points = [[1,1],[3,4],[-1,0]]
Output: 7

Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]
Time from [1,1] to [3,4] = 3 seconds
Time from [3,4] to [-1,0] = 4 seconds
Total time = 7 seconds

Example 2:
Input: points = [[3,2],[-2,2]]
Output: 5


Constraints:
points.length == n
1 <= n <= 100
points[i].length == 2
-1000 <= points[i][0], points[i][1] <= 1000
*/

var minTimeToVisitAllPoints = function(points) {
  //Create a varible to accumulate the minimum amount of steps.
  let result = 0;
  //Loop through all given coordinates in consecutive order.
  for (let i = 0; i < points.length - 1; i++){
      //Use helper function minSteps to find the minimum steps between two coordinates.
      //Add the return value of minSteps to the result value.
      result += minSteps(points[i], points[i + 1])
  }
  return result;
};

//Helper function created to calculate minimum steps needed between two coordinates.
//This function takes two coordinate arguments and a default parameter value named steps
function minSteps(coord1, coord2, steps = 0){
  //Create a variable to hold the difference between both coordinates at the x axis
  let xDifference = Math.abs(coord1[0] - coord2[0]);
  //Create a variable to hold the difference between both coordinates at the y axis
  let yDifference = Math.abs(coord1[1] - coord2[1]);
  //Using a ternary to set the parameter value to be the greater difference.
  xDifference > yDifference ? steps = xDifference : steps = yDifference;
  //Return the value of the parameter value.
  return steps;
}

// console.log(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]])) //Output: 7
// console.log(minTimeToVisitAllPoints([[3, 2], [-2, 2]])) //Output: 5
