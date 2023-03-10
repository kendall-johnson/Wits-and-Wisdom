const questions = [
    {
        category: "Technology",
        question: "What startup, acquired by Facebook for $1 billion in 2012, became the fourth most downloaded app in the 2010s?",
        choices: ["Tinder", "WhatsApp", "Twitter", "Instagram"],
        answer: "Instagram"
    },
    {
        category: "Technology",
        question: "What is the programming language developed by James Gosling at Sun Microsystems and named after the type of coffee from Indonesia?",
        choices: ["Mocha", "JavaScript", "Java", "Latte"],
        answer: "Java"
    },
    {
        category: "Technology",
        question: "Pierre Omidyar founded which popular online auction company in 1995 out of San Jose, California?",
        choices: ["Amazon", "eBay", "Craigslist", "Cars&Bids"],
        answer: "eBay"
    },
    {
        category: "Technology",
        question: "In 1999 Shigetaka Kurita invented what keyboard additions for cell phones that would eventually replace emoticons?",
        choices: ["Emojis", "Smiley Faces", "Face Symbols", "Emotes"],
        answer: "Emojis"
    },
    {
        category: "Technology",
        question: "Which American tech company started with its founders' idea to rent out an air mattress in their San Fransisco living room to travelers hoping to avoid the city's high cost of rent?",
        choices: ["Experian", "Travelocity", "Airbnb", "Yelp"],
        answer: "Airbnb"
    },
    {
        category: "Technology",
        question: "What computer and printer giant was founded in 1939 in Palo Alto, CA?",
        choices: ["Hewlett-Packard", "Dell", "Brother", "Epson"],
        answer: "Hewlett-Packard"
    },
    {
        category: "Technology",
        question: "What company first introduced their Chromebook hardware in 2011?",
        choices: ["Acer", "Asus", "MSI", "Google"],
        answer: "Google"
    },
    {
        category: "Technology",
        question: "How many bytes are in 1 Kilobyte?",
        choices: ["10", "100", "1,000", "10,000"],
        answer: "1,000"
    },
    {
        category: "Technology",
        question: "What is the two digit numeric system, that only uses 0 and 1, that computers operate using?",
        choices: ["Binary", "Calculator", "Caesar Cipher", "Braille"],
        answer: "Binary"
    },
    {
        category: "Technology",
        question: "What year was the first iPhone released?",
        choices: ["2006", "2007", "2009", "2012"],
        answer: "2007"
    },
    {
        category: "Technology",
        question: "What is the name of the first search engine ever created?",
        choices: ["Google", "Yahoo!", "AltaVista", "Bing"],
        answer: "AltaVista"
    },
    {
        category: "Technology",
        question: "What does the acronym 'PDF' stand for?",
        choices: ["Portable Document Format", "Personal Data File", "Printable Document File", "Programmed Data File"],
        answer: "Portable Document Format"
    },
    {
        category: "Technology",
        question: "What was the first commercially successful video game?",
        choices: ["Pong", "Space Invaders", "Donkey Kong", "Tetris"],
        answer: "Pong"
    },
    {
        category: "Technology",
        question: "What is the name of the first mass-produced computer?",
        choices: ["ENIAC", "Apple I", "Altair 8800", "IBM PC"],
        answer: "IBM PC"
    },
    {
        category: "Technology",
        question: "What year was the World Wide Web invented?",
        choices: ["1985", "1991", "1995", "2000"],
        answer: "1991"
    },
    {
        category: "Technology",
        question: "What is the name of the first smartphone?",
        choices: ["BlackBerry", "iPhone", "Palm Pilot", "Nokia Communicator"],
        answer: "IBM Simon"
    },
    {
        category: "Technology",
        question: "What is the name of the first graphical web browser?",
        choices: ["Mosaic", "Netscape Navigator", "Internet Explorer", "Firefox"],
        answer: "Mosaic"
    },
    {
        category: "Technology",
        question: "What is the name of the first commercially available computer mouse?",
        choices: ["Xerox PARC", "Logitech Mouse", "Apple Mouse", "Microsoft Mouse"],
        answer: "Xerox PARC"
    },
    {
        category: "Technology",
        question: "What was the first video ever uploaded to YouTube?",
        choices: ["Me at the zoo", "Charlie bit my finger", "Evolution of dance", "Baby Shark Dance"],
        answer: "Me at the zoo"
    },
    {
        category: "Technology",
        question: "What is the name of the first consumer digital camera?",
        choices: ["Sony Mavica", "Kodak DCS", "Canon PowerShot", "Nikon Coolpix"],
        answer: "Dycam Model 1"
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