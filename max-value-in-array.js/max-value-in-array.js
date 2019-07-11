function maxValueUsingForLoop(myArray) {
  let maxValue = null;
  for (let i = 0; i < myArray.length; i++) {
    if (maxValue === null || maxValue < myArray[i]) {
      maxValue = myArray[i];
    }
  }
  return maxValue;
}

function maxValueUsingSort(myArray) {
  return myArray.sort((a, b) => a - b).pop();
}

module.exports = { maxValueUsingForLoop, maxValueUsingSort };
