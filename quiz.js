const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Quiz Data
const questions = [
  {
    question: "What is the capital of India?",
    options: ["London", "New Delhi", "Paris", "Madrid"],
    correctAnswer: "New Delhi",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mars", "Earth", "Mercury"],
    correctAnswer: "Mercury",
  },
];

// Quiz Variables
let currentQuestionIndex = 0;
let score = 0;

// Functions
function displayQuestion() {
  const questionData = questions[currentQuestionIndex];
  console.log(questionData.question);

  questionData.options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });
}

function checkAnswer(selectedOption) {
  const questionData = questions[currentQuestionIndex];

  if (selectedOption === questionData.correctAnswer) {
    score++;
    console.log("Correct!\n");
  } else {
    console.log("Incorrect!\n");
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
    promptUser();
  } else {
    showResult();
    rl.close();
  }
}

function showResult() {
  console.log("Quiz Completed!");
  console.log(`Final Score: ${score}`);
}

function promptUser() {
  rl.question("Enter the number of your answer: ", (selectedOption) => {
    const index = parseInt(selectedOption) - 1;

    if (isNaN(index) || index < 0 || index >= questions[currentQuestionIndex].options.length) {
      console.log("Invalid input. Please enter a valid option number.");
      promptUser();
    } else {
      checkAnswer(questions[currentQuestionIndex].options[index]);
    }
  });
}

// Initialization
console.log("Quiz Program");
displayQuestion();
promptUser();
