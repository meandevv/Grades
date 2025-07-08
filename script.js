const name = "Benjamin";

// Creating the score variables for each task using "var".
// Although I'll point out that "var" is not as much in use these days. it's kind of deprecated. programmers use "const" and "let" to declare variables.
// "const" means constant - Telling us that this variable is static, you can't change a constant till the end of your code.
// "let" is used for variables that may change over time. for example, the "grade" variable changes depending on the score, so we use "let" to declare it.

var taskOne = 10;
var taskTwo = 8;
var taskThree = 6;

const totalScore = taskOne + taskTwo + taskThree;
const averageScore = (totalScore / 3).toFixed(2);
// 👆🏽 We rounded the "averageScore" variable to two decimal places using ".toFixed(2)".

// Declaring a variable for grades, and assigning it to nothing. For now.
let grade;

// Creating a function using "if() and if else() to assign values to the "grade" variable.
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

  // Using the switch() function to assign a text; "feedback" to each grade.
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

  // Displaying our output in HTML using concatenation "${...}" and template strings ``.
  message = `<strong>${name}</strong>:<br>Task One result: <strong>${taskOne}</strong>.<br>Task Two result: <strong>${taskTwo}</strong>.<br>Task Three result: <strong>${taskThree}</strong>.<br><br>Total score: <strong>${totalScore}</strong>.<br>Average Score: <strong>${averageScore}</strong>.<br><br>Grade: <strong>${grade}</strong>.<br><br>Your Grading is based on average performance resulting from the combination of performance across all three tasks.`;


  // Calling the tags from our HTML and assign these tags; "<p>" and "<h2>" tags, and assigning them to variables "message" and "feedback" that we used in displaying our output in HTML.
  document.getElementsByTagName("p")[0].innerHTML = message;
  
  document.getElementsByTagName("h2")[0].innerHTML = feedback;

  // This part is optional; "console.log()" is simply used in testing our codes in the console. You can either decide to put it in or not. it's totally up to you.
  console.log(`${name}, your average score is ${averageScore};\nTherefore, your grade is ${grade}`);
}

grades();
// 👆🏽👆🏽👆🏽This is the most important one; THE FUNCTION => "fuction grades()" in line 20.
// It is this function that carries all the "if() and if else()" functions, as well as the "switch()" functions, as well as the "message" and "feedback" variables.
// We have to call the function by it's name - "grades()" is the function name - and we have to call it for it to run, otherwise everything in our code will just sit there and not run.


// function grades() {
// ....
// } is just the function, while "grades()" is the function name. So we have to call the function name for it to run.

// Thank you.
