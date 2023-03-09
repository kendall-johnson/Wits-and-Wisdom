  /*----- constants -----*/ // within a browser trivia game the main constant "always the same" features will be the questions, options for answers, and the correct answer. Besides that, potentially any background sounds or images used for Quality of Life purposes could be constants. Those however, are additional add ons and not necessary to a functioning game.

  // Define an object, that will store several different trivia questions that will be flucuated through during the process of the game along with the potential options and the correct answer.
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
      question: "What computer and printer giant was founded in 1939 in Palo, Alto, CA?",
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

]

/*----- state variables -----*/ // the two variables that come to mind that are necessary to track and update throughout the course of the game include the current score and the current question number. On a more robust iteration of the game, another state could be the topic of questions that a user selects, which I will attempt to implement, but it is not the main focus for the time being. 

// set a variable to keep track of the current score
let score = 0;
let randomQuestion;
let answerEl;
let wrong = 0;
let categoryQuestions;
let gameEnded = false;
// set a variable for which question number the user is on
// let questionNum;


/*----- cached elements  -----*/

// The cached elements will refer to elements within the HTML and reduces the amount of times the code calls a DOM query since it stores the result to a variable.
// The HTML element that displays the current question.
const questionEl = document.getElementById("question"); //called in line 152
// The HTML element that displays the answer choices.
const choicesEls = document.querySelectorAll('.choices-container button'); // setting choicesEls equal to all the buttons under the choices-container
// The HTML element that displays the current score.
const currentScore = document.getElementById("score");
// The HTML element that will make a button function as a next question/skip question feature.
const skipQuestion = document.getElementById("skip-question");

const choicesContainer = document.querySelector(".choices-container")

const categoryContainerButtons = document.querySelectorAll('.categories-container')

const categoryPage = document.querySelector('.category-page')

const gameplayPage = document.querySelector('gameplay-page')


/*----- event listeners -----*/  //document + queryselector("the element you wish to grab") + addEventListener('what you are listening for i.e. click', CALLBACK function)

  
// Add a click event listener to the answer options, so that when a user clicks an answer it will go to the next question. (We also want to display whether that answer was right or wrong with a delay before switching to the next question)
const buttons = document.querySelectorAll('.choices-container button');
buttons.forEach(button => {
  button.addEventListener('click', handleChoice);
})
// Add a similar click event listener to the 'next question/skip question' button so that it listens for a click then immediately skips to the next question.
skipQuestion.addEventListener('click', nextQuestion);

categoryContainerButtons.forEach(button => {
  button.addEventListener('click', selectedCategory)
})
  
/*----- functions -----*/ // remember to use function render() and to keep it concise by calling other functions within the render. 
startGame();

function startGame() {
  score = 0;
  wrong = 0;
  gameEnded = false;
  questionEl.innerHTML = "Select a Category From The Widgets Above!";
  resetAnswerChoices();
  renderScore(score);
}

function selectedCategory(category) {
  // write a function that when a user clicks on one of the buttons it chooses the category of questions that will be displayed
  selectedCategory = category.target.textContent;
  if (category.target.tagName === 'IMG') {
    selectedCategory = category.target.parentNode.textContent;
    console.log(category.target.parentNode.textContent)
  }
  filteredQuestions = questions.filter(question => question.category === selectedCategory);
  categoryQuestions = filteredQuestions;
  resetAnswerChoices();
  render();
}


// create a function to generate a random question and its accompanying choices on the webpage
function nextQuestion() {
  if (!gameEnded) {
    // if (!categoryQuestions || categoryQuestions.length === 0) {
    //   // handle case where categoryQuestions is undefined or empty
    //   return;
    // }
    // generate a random index number between 0 and the length of the `questions` array
    const randomIdx = Math.floor(Math.random()* 10);
    // access the question object at the random index number provided above
    randomQuestion = categoryQuestions[randomIdx];
    // access the text within the question object along with its potential choices 
    const currentQuestion = randomQuestion.question;
    const choices = randomQuestion.choices;
    // render the question text and choices as HTML elements using DOM manipulation
    questionEl.innerHTML = currentQuestion; // changing what is inside the ID 'question' in the HTML to the value of the randomly selected question   text.
    // initiate a for loop to generate the choices that go along with the randomly generated question into their necessary buttons
    for (let i = 0; i < choices.length; i++) { // it then iterates through all of those buttons
      const choiceEl = choicesEls[i]; // sets choiceEl equal to the specific choice button at a given time
      choiceEl.innerHTML = choices[i]; // set the inside of the specific button choice equal to the necessary potential answer choice from the  original constant array.
    }
  }  
}

// create a function that takes note of the users choice
function handleChoice(evt) {
  const selectedAnswer = evt.target.textContent; // target is a read-only property, textContent returns the string of the selected button in this case.
  checkAnswer(selectedAnswer);
  render()
}

// create a function that checks if the users choice was the correct answer
function checkAnswer(selectedAnswer) { // takes the parameter answer as an input and checks if it is the correct one 
  if (!gameEnded) {
    answerEl = randomQuestion.answer;
    if (selectedAnswer === answerEl) {
      score++; // if it is correct, it adds one to the score
    } else {
      if (selectedAnswer !== answerEl) {
        wrong++
      }
    render();
    }
    renderScore(score); // then it renders the new updated score accordingly
  }
  
}

// create a function that renders the score
function renderScore(score) {
  currentScore.innerHTML = `SCORE: ${score}`; // renders "Score: (whatever current score is based on number of correct answers"
}

// Define a function to end the game and display the final score.
function endGame() {
  gameEnded = true;
  questionEl.innerHTML = "CONGRATULATIONS! You have won Wits & Wisdom!";
  // for (let i=0; i < choicesEls.length; i++) {
  //   choicesEls.style.visibility = "hidden";
  // }
  choicesContainer.style.filter = "blur(3px)" // blurs the answer choices once you reach the end of the game
  skipQuestion.style.filter = "blur(3px)" // blurs the skip question button once you reach the end of the game
  renderScore(score);
  addPlayAgain();
}

function endGameLoss() {
  gameEnded = true;
  questionEl.innerHTML = "GAME OVER! You have no Wits or Wisdom!";
  // for (let i=0; i < choicesEls.length; i++) {
  //   choicesEls.style.visibility = "hidden";
  // }
  choicesContainer.style.filter = "blur(3px)" // blurs the answer choices once you reach the end of the game
  skipQuestion.style.filter = "blur(3px)" // blurs the skip question button once you reach the end of the game
  renderScore(score);
  addPlayAgain();
  // skipQuestion.remove();
}

function resetAnswerChoices() {
  choicesEls.forEach(choiceEl => {
    choiceEl.innerHTML = "";
  })
}

function addPlayAgain() {
  // check if a 'Play again' button already exists
  if (!document.querySelector('.restart-button')) {
    // implement restart function upon click of new button
    const restartBtn = document.createElement("button");
    restartBtn.innerHTML = "Play Again!";
    restartBtn.classList.add("restart-button")
    // restartBtn.addEventListener('click', startGame);
    // add restart button to HTML document
    document.body.append(restartBtn);
    // remove the restart button once it is clicked
    restartBtn.addEventListener('click', function() {
      restartBtn.remove();
      choicesContainer.style.filter = "none" // unblurs the answer choices once you restart the game
      skipQuestion.style.filter = "none" // blurs the skip button once you restart the game
      startGame(); // start the game again
    });
  }
}
// define a render function that displays all results of above functions if necessary
function render() {
  if (wrong > 2) { // if you get more than 2 wrong, the game ends
    endGameLoss();
  }
  else if (score < 5) { // if you have less than 5 the next question loads and your score updates
    nextQuestion();
    renderScore(score);
  } else if (score > 4) { // if you score more than 4, the game ends
    endGame();
  }
}

render();