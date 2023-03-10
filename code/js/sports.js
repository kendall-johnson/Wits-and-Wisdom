const questions = [
    {
        category: "Sports",
        question: "What sport is played on the largest court?",
        choices: ["Tennis", "Volleyball", "Basketball", "Badminton"],
        answer: "Basketball"
    },
    {
        category: "Sports",
        question: "What is the diameter of a basketball hoop in inches?",
        choices: ["24 inches", "20 inches", "18 inches", "28 inches"],
        answer: "18 inches"
    },
    {
        category: "Sports",
        question: "What do you call it when a bowler makes three strikes in a row?",
        choices: ["Turkey", "Birdie", "Homerun", "Par"],
        answer: "Turkey"
    },
    {
        category: "Sports",
        question: "What is the national sport of Canada?",
        choices: ["Poker", "Lacrosse", "Polo", "Boxing"],
        answer: "Lacrosse"
    },
    {
        category: "Sports",
        question: "How many dimples does an average golf ball have?",
        choices: ["60", "174", "529", "336"],
        answer: "336"
    },
    {
        category: "Sports",
        question: "In the 1971 Olympics, Nadia Comaneci was the first gymnast to score a perfect score. What country was she representing?",
        choices: ["Romania", "Ukraine", "United States", "France"],
        answer: "Romania"
    },
    {
        category: "Sports",
        question: "In what year were women allowed to compete in the modern Olympic games?",
        choices: ["1964", "1940", "1998", "1900"],
        answer: "1900"
    },
    {
        category: "Sports",
        question: "In which winter sport are the terms “stale fish” and “mule kick” used?",
        choices: ["Snowboarding", "Bobsledding", "Tobogganing", "Hockey"],
        answer: "Snowboarding"
    },
    {
        category: "Sports",
        question: "During the first-ever modern Olympics, what were the first placers awarded with?",
        choices: ["Gold Rings", "Silver Medals", "A Platinum Pin", "A Round of Applause"],
        answer: "Silver Medals"
    },
    {
        category: "Sports",
        question: "How many Olympic games were held in countries that no longer exist?",
        choices: ["7", "1", "3", "0"],
        answer: "3"
    },
    {
        category: "Sports",
        question: "Raging Bull, the classic 1980 movie is about which real life boxer?",
        choices: ["Rocky Balboa", "Mike Tyson", "George Foreman", "Jake LaMotta"],
        answer: "Jake LaMotta"
    },
    {
        category: "Sports",
        question: "Which boxer inflicted Muhammad Alis first defeat in professional boxing?",
        choices: ["Joe Frazier", "Larry Holmes", "Leon Spinks", "Ken Norton"],
        answer: "Joe Frazier"
    },
    {
        category: "Sports",
        question: "Which baseball player holds the record for the most home runs in a single season?",
        choices: ["Barry Bonds", "Babe Ruth", "Aaron Judge", "Kirby Puckett"],
        answer: "Barry Bonds"
    },
    {
        category: "Sports",
        question: "What sport is Bela Karolyi known for coaching?",
        choices: ["Gymnastics", "Polo", "Badminton", "Billiards"],
        answer: "Gymnastics"
    },
    {
        category: "Sports",
        question: "What is the only sport to be played on the moon?",
        choices: ["Tennis", "Bowling", "Golf", "Football"],
        answer: "Golf"
    },
    {
        category: "Sports",
        question: "How many minutes was the longest recorded point in the history of tennis?",
        choices: ["47 minutes", "53 minutes", "29 minutes", "41 minutes"],
        answer: "29 minutes"
    },
    {
        category: "Sports",
        question: "What NFL team was originally called the New York Titans?",
        choices: ["Tennessee Titans", "Houstan Texans", "Minnesota Vikings", "New York Jets"],
        answer: "New York Jets"
    },
    {
        category: "Sports",
        question: "What NFL team lost the first Super Bowl in 1970?",
        choices: ["Minnesota Vikings", "San Diego Chargers", "Los Angeles Raiders", "Chicago Bears"],
        answer: "Minnesota Vikings"
    },
    {
        category: "Sports",
        question: "Who was the youngest player to score 10,000 points in the NBA?",
        choices: ["Kobe Bryant", "Derek Rose", "LeBron James", "Wilt Chamberlain"],
        answer: "LeBron James"
    },
    {
        category: "Sports",
        question: "Who was the first NBA player to test positive for COVID-19?",
        choices: ["Rudy Gobert", "Donovan Mitchell", "LeBron James", "Steven Adams"],
        answer: "Rudy Gobert"
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
    const randomIdx = Math.floor(Math.random()* 20);
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