function findRotatedIndex(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let leftVal = arr[left];

  while (left <= right) {
    let middleIdx = Math.floor((left + right) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal > target && leftVal < target) {
      // is the value is in the first chunk?
      left = left + 1;
      right = middleIdx - 1;
    } else if (middleVal > target && leftVal > target) {
      // is the value in the second chunk?
      left = middleIdx + 1;
    } else if (middleVal > target) {
      //   standard binary search
      right = middleIdx - 1;
    } else if (middleVal < target) {
      left = middleIdx + 1;
    } else return middleIdx;
  }
  return -1;
}

module.exports = findRotatedIndex;
