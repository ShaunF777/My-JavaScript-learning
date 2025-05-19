/**Calculate the average score for the class. Complete the getAverage 
 * function which takes in an array of test scores and returns the average score. 
 * Calculate the average score for the class.
 * @param {number[]} scores - An array of test scores.
 * @returns {number} The average score.
 */
function getAverage(scores) {
    let total = 0;
    for (const score of scores){
      total += score;
    }
    let scorecount = scores.length;
    return total / scorecount;
  }
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

   /**
   * Convert the student score to a letter grade.
   * @param {number} score - The student's numeric score.
   * @returns {string} The letter grade.
   */
  function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else return "F";
  }
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));

  /**Takes a student score as a parameter. This function should return true if 
   * the student has a passing grade and false if they do not. 
   * @param {number} score - The student's numeric score.
   * @returns {boolean} True if the student passed, false otherwise.
   */
  function hasPassingGrade(score) {
    return getGrade(score) !== "F"
  }
  
  console.log(hasPassingGrade(100));
  console.log(hasPassingGrade(53));
  console.log(hasPassingGrade(87));
  /**
   * Returns a message to the student about their performance.
   * @param {number[]} totalScores - Array of all student scores in the class.
   * @param {number} studentScore - The student's own score.
   * @returns {string} A message about the student's grade and class average.
   */
  function studentMsg(totalScores, studentScore) {
    if (getGrade(studentScore) !== "F") {
      return "Class average: " + getAverage   (totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.";
    } else
      return "Class average: " + getAverage   (totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course.";
  
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));