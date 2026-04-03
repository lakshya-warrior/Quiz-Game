const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const resultScreen = document.getElementById("result-screen");
const startbtn = document.getElementById("startbtn");
const question = document.getElementById("question");
const currquesion = document.getElementById("curq");
const totlaquesion = document.getElementById("totalq");
const scoreofhtml = document.getElementById("score");
const answersofhtml = document.getElementById("answers");
const progersbar = document.getElementById("progress");
const result = document.getElementById("result");
const resultmessage = document.getElementById("resultmessage");
const resultbutton = document.getElementById("resultbutton");


const quizquestions = [
    {
        question: "Capital of Turkmenistan",
        answers: [
            {text: "Astana", correct: false},
            {text: "Baku", correct: false},
            {text: "Ashgabat", correct: true},
            {text: "Bishkek", correct: false},
        ]
    },
    {
        question: "Hottest planet in our solar system",
        answers: [
            {text: "Mars", correct: false},
            {text: "Venus", correct: true},
            {text: "Mercury", correct: false},
            {text: "KELT-9b", correct: false},
        ]
    },
    {
        question: "Scotland's National Animal is",
        answers: [
            {text: "Red squirrel", correct: false},
            {text: "Scottish Red deer", correct: false},
            {text: "Octopus", correct: false},
            {text: "Unicorn", correct: true},
        ]
    },
    {
        question: "How many hearts does an octopus have?",
        answers: [
            {text: "1", correct: false},
            {text: "2", correct: false},
            {text: "3", correct: true},
            {text: "4", correct: false},
        ]
    },
    // {
    //     question: "What is Parv?",
    //     answers: [
    //         {text: "Bad boy", correct: true},
    //         {text: "Very bad boy", correct: false},
    //         {text: "not good boy", correct: false},
    //         {text: "tevakuf boy", correct: false},
    //     ]
    // },
    {
        question: "How much time does it take for Honey to get spoiled?",
        answers: [
            {text: "one week", correct: false},
            {text: "one year", correct: false},
            {text: "three years", correct: false},
            {text: "never", correct: true},
        ]
    }
]


let currentquesionidx = 0;
let score = 0;
let answersdisabled = false;

totlaquesion.textContent = quizquestions.length;

startbtn.addEventListener("click", startQuiz);
resultbutton.addEventListener("click", restartQuiz);

function startQuiz(){
    console.log("Quiz Started!");
    score = 0;
    currentquesionidx=0;
    scoreofhtml.textContent = score;

    startScreen.classList.remove("game"); 
    gameScreen.classList.add("game");

    showquestion()

}

function showquestion() {
    answersdisabled = false;
    const currentquesion = quizquestions[currentquesionidx];

    currquesion.textContent = currentquesionidx + 1;
    const progresspercent = (currentquesionidx/quizquestions.length)*100;

    progersbar.style.width = progresspercent + "%";
    question.textContent = currentquesion.question;

    // To clear the answer buttons
    answersofhtml.innerHTML = "";
    currentquesion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answers-btn");

        button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);
        
        answersofhtml.appendChild(button);
    })
}

function selectAnswer(event) {
    if (answersdisabled) return;

    answersdisabled = true;
    const seleectbutton = event.target;
    const iscorrect = seleectbutton.dataset.correct === "true";

    Array.from(answersofhtml.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        else if (button === seleectbutton) {
            button.classList.add("wrong");
        }
    });

    if (iscorrect) {
        score++;
        scoreofhtml.textContent = score;
    }


    setTimeout(() => {
        currentquesionidx++;

        if(currentquesionidx < quizquestions.length) {
            showquestion()
        }
        else {
            showresults()
        }
    },1000);
}


function showresults() {
    gameScreen.classList.remove("game");
    resultScreen.classList.add("game");

    result.textContent = score;
    
    const finalpercent = (score/quizquestions.length)*100;

    if (finalpercent === 100) {
        resultmessage.textContent = "A Perfect Score!";
    }
    else if (finalpercent >= 80) {
        resultmessage.textContent = "Nice Job!👍";
    }
    else if (finalpercent >= 60) {
        resultmessage.textContent = "3/5";
    }
    else if (finalpercent >= 40) {
        resultmessage.textContent = "2/5";
    }
    else if (finalpercent >= 20) {
        resultmessage.textContent = "You can do better";
    }
    else {
        resultmessage.textContent = "None Correct😭";
    }
}

function restartQuiz(){
    console.log("Quiz reStarted!");
    resultScreen.classList.remove("game");
    startQuiz();
}