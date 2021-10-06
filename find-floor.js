function findFloor(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  if (arr[left] > target) return -1;

  while (left <= right) {
    let middleIdx = Math.floor((left + right) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal > target) {
      right = middleIdx - 1;
    } else if (middleVal < target) {
      if (arr[middleIdx + 1] > target || middleIdx + 1 > right) {
        return middleVal;
      } else left = middleIdx + 1;
    }
  }
  return -1;
}

module.exports = findFloor;
