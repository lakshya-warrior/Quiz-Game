const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("startbtn");
const questionElement = document.getElementById("question");
const currentQuestionElement = document.getElementById("curq");
const totalQuestionsElement = document.getElementById("totalq");
const finalTotalQuestionsElement = document.getElementById("final-totalq");
const scoreElement = document.getElementById("score");
const answersContainer = document.getElementById("answers");
const progressBar = document.getElementById("progress");
const resultElement = document.getElementById("result");
const resultMessage = document.getElementById("resultmessage");
const resultButton = document.getElementById("resultbutton");

const quizQuestions = [
    {
        question: "What is the capital of Turkmenistan?",
        answers: [
            { text: "Astana", correct: false },
            { text: "Baku", correct: false },
            { text: "Ashgabat", correct: true },
            { text: "Bishkek", correct: false }
        ]
    },
    {
        question: "Which is the hottest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Venus", correct: true },
            { text: "Mercury", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "What is Scotland's National Animal?",
        answers: [
            { text: "Red Squirrel", correct: false },
            { text: "Scottish Red Deer", correct: false },
            { text: "Highland Cow", correct: false },
            { text: "Unicorn", correct: true }
        ]
    },
    {
        question: "How many hearts does an octopus have?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false }
        ]
    },
    {
        question: "How long does it take for natural honey to spoil?",
        answers: [
            { text: "One week", correct: false },
            { text: "One year", correct: false },
            { text: "Three years", correct: false },
            { text: "Never", correct: true }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

if (totalQuestionsElement) totalQuestionsElement.textContent = quizQuestions.length;
if (finalTotalQuestionsElement) finalTotalQuestionsElement.textContent = quizQuestions.length;

startBtn.addEventListener("click", startQuiz);
resultButton.addEventListener("click", restartQuiz);

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    scoreElement.textContent = score;

    startScreen.classList.remove("game");
    resultScreen.classList.remove("game");
    gameScreen.classList.add("game");

    showQuestion();
}

function showQuestion() {
    answersDisabled = false;
    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionElement.textContent = currentQuestionIndex + 1;
    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;

    progressBar.style.width = progressPercent + "%";
    questionElement.textContent = currentQuestion.question;

    answersContainer.innerHTML = "";
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answers-btn");
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answersContainer.appendChild(button);
    });
}

function selectAnswer(event) {
    if (answersDisabled) return;

    answersDisabled = true;
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    Array.from(answersContainer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else if (button === selectedButton) {
            button.classList.add("wrong");
        }
    });

    if (isCorrect) {
        score++;
        scoreElement.textContent = score;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

function showResults() {
    gameScreen.classList.remove("game");
    resultScreen.classList.add("game");

    resultElement.textContent = score;
    progressBar.style.width = "100%";

    const finalPercent = (score / quizQuestions.length) * 100;

    if (finalPercent === 100) {
        resultMessage.textContent = "A Perfect Score! 🏆";
    } else if (finalPercent >= 80) {
        resultMessage.textContent = "Nice Job! 👍";
    } else if (finalPercent >= 60) {
        resultMessage.textContent = "Good effort! 👏";
    } else if (finalPercent >= 40) {
        resultMessage.textContent = "Not bad, keep practicing! 📚";
    } else if (finalPercent >= 20) {
        resultMessage.textContent = "You can do better! 💪";
    } else {
        resultMessage.textContent = "Better luck next time! 💡";
    }
}

function restartQuiz() {
    resultScreen.classList.remove("game");
    startQuiz();
}