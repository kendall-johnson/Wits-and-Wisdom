const questions = [
    {
        category: "History",
        question: "The United States bought Alaska from which country?",
        choices: ["Spain", "Mexico", "Russia", "Canada"],
        answer: "Russia"
    },
    {
        category: "History",
        question: "Who was the fourth president of the United States?",
        choices: ["William Taft", "James Madison", "Benjamin Franklin", "Abraham Lincoln"],
        answer: "James Madison"
    },
    {
        category: "History",
        question: "What was the name of the landmark Supreme Court case that ruled the racial segregation of schools unconstitutional?",
        choices: ["Brown vs Board of Education", "Roe vs Wade", "Dred Scott v. Sandford", "McCulloch v. Maryland"],
        answer: "Brown vs Board of Education"
    },
    {
        category: "History",
        question: "When did the construction of the Great Wall of China begin?",
        choices: ["4th Century BC", "1945", "7th Century BC", "1626"],
        answer: "7th Century BC"
    },
    {
        category: "History",
        question: "What year did the French Revolution start?",
        choices: ["1776", "1834", "1789", "1904"],
        answer: "1789"
    },
    {
        category: "History",
        question: "Where did Albert Einstein live before moving to the United States?",
        choices: ["Belgium", "Turkey", "England", "Germany"],
        answer: "Germany"
    },
    {
        category: "History",
        question: "Who was the first ruler of the Mongol Empire?",
        choices: ["Genghis Khan", "Töregene Khatun", "Oghul Qaimish", "Ariq Böke"],
        answer: "Genghis Khan"
    },
    {
        category: "History",
        question: "What was the capital city of the Inca Empire?",
        choices: ["Cusco", "Santiago", "Quito", "Iquique"],
        answer: "Cusco"
    },
    {
        category: "History",
        question: "In which country was the Battle of Culloden fought in 1746?",
        choices: ["Monaco", "Scotland", "England", "Montenegro"],
        answer: "Scotland"
    },
    {
        category: "History",
        question: "Who is the king of the Olympian gods in Greek mythology?",
        choices: ["Thor", "Hades", "Zeus", "Achilles"],
        answer: "Zeus"
    },
    {
        category: "History",
        question: "In what year did the United States declare independence from Great Britain?",
        choices: ["1776", "1789", "1792", "1801"],
        answer: "1776"
    },
    {
        category: "History",
        question: "Who was the first female prime minister of the United Kingdom?",
        choices: ["Margaret Thatcher", "Angela Merkel", "Theresa May", "Indira Gandhi"],
        answer: "Margaret Thatcher"
    },
    {
        category: "History",
        question: "What was the name of the first emperor of Rome?",
        choices: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
        answer: "Augustus"  
    },
    {
        category: "History",
        question: "Which famous battle was fought on June 18, 1815?",
        choices: ["Battle of Gettysburg", "Battle of Waterloo", "Battle of Trafalgar", "Battle of the Somme"],
        answer: "Battle of Waterloo"
    },
    {
        category: "History",
        question: "Who was the first African American to serve as President of the United States?",
        choices: ["Barack Obama", "Joe Biden", "George W. Bush", "Bill Clinton"],
        answer: "Barack Obama"
    },
    {
        category: "History",
        question: "Which infamous emperor of Rome was known for his extravagance and cruelty?",
        choices: ["Caligula", "Nero", "Tiberius", "Hadrian"],
        answer: "Caligula"
    },
    {
        category: "History",
        question: "What was the name of the ship that Charles Darwin sailed on during his famous voyage?",
        choices: ["Beagle", "Endeavour", "Discovery", "Bounty"],
        answer: "Beagle"
    },
    {
        category: "History",
        question: "What was the name of the first satellite to orbit the Earth?",
        choices: ["Sputnik 1", "Explorer 1", "Vanguard 1", "Luna 1"],
        answer: "Sputnik 1" 
    },
    {
        category: "History",
        question: "Who wrote the famous document 'Common Sense' that advocated for American independence?",
        choices: ["Thomas Jefferson", "John Adams", "George Washington", "Thomas Paine"],
        answer: "Thomas Paine"
    },
    {
        category: "History",
        question: "In what year did World War II end?",
        choices: ["1945", "1941", "1943", "1947"],
        answer: "1945"    
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