# Trivia Quiz Game 🎯

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Vanilla JS](https://img.shields.io/badge/Vanilla-JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5 / CSS3](https://img.shields.io/badge/HTML5%20%2F%20CSS3-Responsive-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

An interactive, responsive trivia quiz application built with vanilla JavaScript, HTML5, and CSS3. Features dynamic question loading, instant visual feedback, animated progress tracking, and custom score evaluation.

---

## 🎮 Live Demo

> **Play the game live:** [https://lakshya-warrior.github.io/Quiz-Game/](https://lakshya-warrior.github.io/Quiz-Game/)  
> *(To activate, go to repository **Settings** $\rightarrow$ **Pages** $\rightarrow$ **Build and deployment** $\rightarrow$ set Branch to `main` and save).*

---

## ✨ Features

- **Interactive Gameplay:** Instant answer evaluation with color-coded feedback (green for correct, red for incorrect).
- **Dynamic Progress Bar:** Visual progress tracking that updates as you navigate through questions.
- **Smart Answer Locking:** Automatically prevents multiple clicks after an answer is selected.
- **Score Calculation & Custom Feedback:** Summary screen displaying final score out of total questions, percentage, and customized performance remarks.
- **Responsive Design:** Clean, mobile-friendly card layout that scales smoothly across mobile phones, tablets, and desktop displays.
- **Zero Dependencies:** Pure vanilla web technologies without any external frameworks, libraries, or build configurations.

---

## 📁 Project Structure

```text
Quiz-Game/
├── index.html       # Semantic HTML layout and screen structures
├── style.css        # Responsive styling, flexbox cards, and animations
├── script.js        # Game state engine, question bank, and DOM rendering
├── .gitignore       # System and editor ignore rules
├── LICENSE          # MIT License
└── README.md        # Project documentation
```

---

## 🚀 Quick Start

No installation, build tools, or packages needed:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/lakshya-warrior/Quiz-Game.git
   cd Quiz-Game
   ```
2. **Run locally:**
   Simply double-click `index.html` to open it in any web browser, or launch a quick local server:
   ```bash
   # Python 3
   python3 -m http.server 8000
   ```
   Then navigate to [http://localhost:8000](http://localhost:8000).

---

## 🛠️ Customizing Questions

You can easily expand or add your own trivia questions by editing the `quizQuestions` array in [`script.js`](script.js):

```javascript
{
    question: "What is the capital of France?",
    answers: [
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Rome", correct: false }
    ]
}
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
