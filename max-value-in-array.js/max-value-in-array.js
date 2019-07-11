function maxValueInArray(myArray) {
  var maxValue = null;
  for (var i = 0; i < myArray.length; i++) {
    if (maxValue === null || maxValue < myArray[i]) {
      maxValue = myArray[i];
    }
  }
}
