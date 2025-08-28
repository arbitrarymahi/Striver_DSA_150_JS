// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
//  and return an array of the non-overlapping intervals that cover all the intervals in the input.
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let [start, end] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (end >= intervals[i][0]) {
      end = Math.max(intervals[i][1], end);
    } else {
      result.push([start, end]);
      [start, end] = intervals[i];
    }
  }
  result.push([start, end]);
  console.log(result);
  return result;
};

merge([
  [1, 4],
  [0, 4],
]);
// merge([
//   [1, 4],
//   [4, 5],
// ]);
// merge([
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ]);
