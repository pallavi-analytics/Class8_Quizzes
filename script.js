let score = 0;
let current = 0;
let answered = false;

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




function loadQuestion() {
  answered = false;
  const q = questions[current];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => showFeedback(i, btn);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("result").innerText = "";
  document.getElementById("result").classList.add("hidden");
}

function showFeedback(selected, btn) {
  if (answered) return;
  answered = true;

  const correctIndex = questions[current].correct;
  const resultBox = document.getElementById("result");

  if (selected === correctIndex) {
    resultBox.innerText = "✅ Correct!";
    resultBox.style.color = "green";
    score++;
  } else {
    resultBox.innerText = `❌ Wrong! Correct answer: ${questions[correctIndex]}`;
    resultBox.style.color = "red";
  }

  resultBox.classList.remove("hidden");
}
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
      message = score < 8 
        ? `📚 You scored ${score}/10. I think you should revise the chapter again!`
        : `You scored ${score}/10.`;
  }

  // Display the message
  const quizBox = document.getElementById("quiz-box");
  quizBox.innerHTML = `
    <h2>${message}</h2>
    <button onclick="location.reload()">Try Again</button>
  `;
}


  document.getElementById("quiz-box").innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>${message}</p>
    <button onclick="restartQuiz()">🔁 Play Again</button>
  `;
}

document.getElementById("next-btn").addEventListener("click", () => {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
});

function restartQuiz() {
  current = 0;
  score = 0;

  document.getElementById("quiz-box").innerHTML = `
    <div id="question">Loading question...</div>
    <div id="options"></div>
    <div id="result" class="hidden"></div>
    <button id="next-btn">Next</button>
  `;

  // Reattach event listener to new button
  document.getElementById("next-btn").addEventListener("click", () => {
    current++;
    if (current < questions.length) {
      loadQuestion();
    } else {
      showFinalScore();
    }
  });

  loadQuestion();



