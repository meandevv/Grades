const name = "Benjamin";

var taskOne = 10;
var taskTwo = 8;
var taskThree = 6;

const totalScore = taskOne + taskTwo + taskThree;
const averageScore = (((totalScore / 3) * 100) / 100)

let grade;

function grades() {
  if (averageScore >= 9) {
    grade = "A";
  } else if (averageScore >= 8) {
    grade = "B";
  } else if (averageScore >= 7) {
    grade = "C";
  } else if (averageScore >= 6) {
    grade = "D";
  } else if (averageScore < 6) {
    grade = "E";
  }
  
  switch (grade) {
    case 'A':
      feedback = "Excellent Performance";
      break;
    case 'B':
      feedback = "Great Job! Keep Aiming High.";
      break;
    case 'C':
      feedback = "Good effort. Try to Improve.";
      break;
    case 'D':
      feedback = "You're close. Keep working at it."
      break;
    case 'E':
      feedback = "Don't give up. Yoi can do better next time."
    default:
      feedback = "Invalid grade.";
  }
  
  message = `<strong>${name}</strong>:<br>Task One result: <strong>${taskOne}</strong>.<br>Task Two result: <strong>${taskTwo}</strong>.<br>Task Three result: <strong>${taskThree}</strong>.<br><br>Total score: <strong>${totalScore}</strong>.<br>Average Score: <strong>${averageScore}</strong>.<br><br>Grade: <strong>${grade}</strong>.<br><br>Your Grading is based on average performance resulting from the combination of performance across all three tasks.`;
  
  document.getElementsByTagName("p")[0].innerHTML = message;
  
  document.getElementsByTagName("h2")[0].innerHTML = feedback;
  
  console.log(`${name}, your average score is ${averageScore};\nTherefore, your grade is ${grade}`);
}

grades();