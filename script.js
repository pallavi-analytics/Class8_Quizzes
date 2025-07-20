


const questions = [
  {
    question: "Which liquid is a good conductor of electricity?",
    options: ["Distilled water", "Salt solution", "Oil", "Alcohol"],
    correct: 1
  },
  {
    question: "The effect of electric current that causes a chemical reaction is called?",
    options: ["Magnetic effect", "Heating effect", "Chemical effect", "Physical effect"],
    correct: 2
  },
  {
    question: "Which of the following is used to test the conductivity of liquids?",
    options: ["Battery", "Bulb", "LED", "Magnet"],
    correct: 2
  },
  {
    question: "What is electroplating?",
    options: [
      "Passing current through water",
      "Coating a metal with another metal using electricity",
      "Heating metal using electricity",
      "Removing rust using current"
    ],
    correct: 1
  },
  {
    question: "Which metal is often electroplated on iron to prevent rusting?",
    options: ["Gold", "Silver", "Zinc", "Copper"],
    correct: 2
  },
  {
    question: "Which of these liquids will not conduct electricity?",
    options: ["Lemon juice", "Tap water", "Distilled water", "Salt water"],
    correct: 2
  },
  {
    question: "LED glows only when:",
    options: [
      "Current flows through a conductor",
      "Current flows through an insulator",
      "It is connected to a magnet",
      "There is light"
    ],
    correct: 0
  },
  {
    question: "What is the name of the electrodes used in electroplating?",
    options: ["Cathode and Anode", "Positive and Negative wires", "Metal sticks", "Terminals"],
    correct: 0
  },
  {
    question: "Electroplating is mainly used for:",
    options: [
      "Decorating objects",
      "Preventing rusting",
      "Both A and B",
      "None of the above"
    ],
    correct: 2
  },
  {
    question: "Which of the following will conduct electricity?",
    options: ["Sugar solution", "Alcohol", "Oil", "Acid solution"],
    correct: 3
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const resultEl = document.getElementById("result");

  // Clear previous options
  optionsEl.innerHTML = "";
  resultEl.classList.add("hidden");

  const currentQ = questions[current];
  questionEl.textContent = currentQ.question;

  currentQ.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => {
      if (index === currentQ.correct) {
        score++;
      }
      document.getElementById("next-btn").style.display = "block";
    });
    optionsEl.appendChild(btn);
  });

  // Hide Next button until an option is selected
  document.getElementById("next-btn").style.display = "none";
}

// Final score display
function showFinalScore() {
  let message = "";
  switch (score) {
    case 10:
      message = "🌟 Outstanding! You scored 10/10 🎉 Very good!";
      break;
    case 9:
      message = "👏 Oops! Missed a bit from perfect score. You scored 9/10.";
      break;
    case 8:
      message = "😄 You scored 8/10 — Not bad! But hey... did your brain sneeze on one question?";
      break;
    default:
      message = `📚 You scored ${score}/10. I think you should revise the chapter again!`;
  }

  const quizBox = document.getElementById("quiz-box");
  quizBox.innerHTML = `
    <h2>${message}</h2>
    <button onclick="location.reload()">Try Again</button>
  `;
}

// Next button handler
document.getElementById("next-btn").addEventListener("click", () => {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
});

// Load the first question
loadQuestion();
