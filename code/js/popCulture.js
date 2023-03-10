const questions = [
    {
        category: "Pop-Culture",
        question: "What singer holds the record for most Grammy nominations?",
        choices: ["Beyoncé", "Taylor Swift", "Drake", "Alicia Keys"],
        answer: "Beyoncé"
    },
    {
        category: "Pop-Culture",
        question: "What morning TV show recently had a scandal because two of its anchors were having an extramarital relationship with each other?",
        choices: ["Today", "The Morning Show", "Good Morning America", "The View"],
        answer: "Good Morning America"
    },
    {
        category: "Pop-Culture",
        question: "Who holds the record for winning the most Oscars?",
        choices: ["Leonardo DiCaprio", "Walt Disney", "Viola Davis", "Samuel L. Jackson"],
        answer: "Walt Disney"
    },
    {
        category: "Pop-Culture",
        question: "How many people watched the Game of Thrones series finale?",
        choices: ["750,000", "5,600,000", "7,300,000", "19,300,000"],
        answer: "19,300,000"
    },
    {
        category: "Pop-Culture",
        question: "What animal did Britney Spears famously carry on her shoulders during a performance?",
        choices: ["A Hawk", "A Snake", "A Frog", "A Cat"],
        answer: "A Snake"
    },
    {
        category: "Pop-Culture",
        question: "Who is the most followed person on Instagram?",
        choices: ["Cristiano Ronaldo", "Kylie Jenner", "Selena Gomez", "Ariana Grande"],
        answer: "Cristiano Ronaldo"
    },
    {
        category: "Pop-Culture",
        question: "What is the most watched YouTube video of all time?",
        choices: ["Baby by Justin Bieber", "Baby Shark Dance", "Gangnam Style by Psy", "Nyan Cat"],
        answer: "Baby Shark Dance"
    },
    {
        category: "Pop-Culture",
        question: "How many actors have played Batman onscreen?",
        choices: ["6", "11", "19", "13"],
        answer: "11"
    },
    {
        category: "Pop-Culture",
        question: "What actor has played a superhero in the most movies?",
        choices: ["Robert Downey Jr.", "Chris Evans", "Tobey Maguire", "Christian Bale"],
        answer: "Robert Downey Jr."
    },
    {
        category: "Pop-Culture",
        question: "How many grandchildren does Kris Jenner have?",
        choices: ["4", "12", "6", "9"],
        answer: "12"
    },
]

let score = 0;
let randomQuestion;
let answerEl;
let wrong = 0;
let gameEnded = false;


const questionEl = document.getElementById("question");
const choicesEls = document.querySelectorAll('.choices-container button');
const currentScore = document.getElementById("score");
const skipQuestion = document.getElementById("skip-question");
const choicesContainer = document.querySelector(".choices-container")


const buttons = document.querySelectorAll('.choices-container button');
buttons.forEach(button => {
  button.addEventListener('click', handleChoice);
})
skipQuestion.addEventListener('click', nextQuestion);
  

startGame();

function startGame() {
  score = 0;
  wrong = 0;
  gameEnded = false;
  resetAnswerChoices();
  renderScore(score);
}

function nextQuestion() {
  if (!gameEnded) {
    const randomIdx = Math.floor(Math.random()* 10);
    randomQuestion = questions[randomIdx];
    const currentQuestion = randomQuestion.question;
    const choices = randomQuestion.choices;
    questionEl.innerHTML = currentQuestion;
    for (let i = 0; i < choices.length; i++) { 
      const choiceEl = choicesEls[i];
      choiceEl.innerHTML = choices[i];
    }
  }  
}

function handleChoice(evt) {
  const selectedAnswer = evt.target.textContent; 
  checkAnswer(selectedAnswer);
  render()
}

function checkAnswer(selectedAnswer) { 
  if (!gameEnded) {
    answerEl = randomQuestion.answer;
    if (selectedAnswer === answerEl) {
      score++;
    } else {
      if (selectedAnswer !== answerEl) {
        wrong++
      }
    render();
    }
    renderScore(score);
  }
  
}

function renderScore(score) {
  currentScore.innerHTML = `SCORE: ${score}`;
}

function endGame() {
  gameEnded = true;
  questionEl.innerHTML = "CONGRATULATIONS! You have won Wits & Wisdom!";
  choicesContainer.style.filter = "blur(3px)"
  skipQuestion.style.filter = "blur(3px)"
  renderScore(score);
  addPlayAgain();
}

function endGameLoss() {
  gameEnded = true;
  questionEl.innerHTML = "GAME OVER! You have no Wits or Wisdom!";
  choicesContainer.style.filter = "blur(3px)"
  skipQuestion.style.filter = "blur(3px)" 
  renderScore(score);
  addPlayAgain();
}

function resetAnswerChoices() {
  choicesEls.forEach(choiceEl => {
    choiceEl.innerHTML = "";
  })
}

function addPlayAgain() {
  if (!document.querySelector('.restart-button')) {
    const restartBtn = document.createElement("button");
    restartBtn.innerHTML = "Play Again!";
    restartBtn.classList.add("restart-button")
    document.body.append(restartBtn);
    restartBtn.addEventListener('click', function() {
      restartBtn.remove();
      choicesContainer.style.filter = "none" 
      skipQuestion.style.filter = "none" 
      window.location.href = "index.html"
    });
  }
}

function render() {
  if (wrong > 2) { 
    endGameLoss();
  }
  else if (score < 5) { 
    nextQuestion();
    renderScore(score);
  } else if (score > 4) { 
    endGame();
  }
}

render();