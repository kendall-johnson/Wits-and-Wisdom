  /*----- constants -----*/ // within a browser trivia game the main constant "always the same" features will be the questions, options for answers, and the correct answer. Besides that, potentially any background sounds or images used for Quality of Life purposes could be constants. Those however, are additional add ons and not necessary to a functioning game.

  // Define an object, that will store several different trivia questions that will be flucuated through during the process of the game along with the potential options and the correct answer.
  const questions = [
    {
      question: "How many rings are on the Olympic flag?",
      choices: ["Six","Three","Eight","Five"],
      answer: "Five"
    },
    {
      question: "Where can you find the London bridge today?",
      choices: ["United States of America","United Kingdom","Wales","Germany"],
      answer: "United States of America"
    },
    {
      question: "Who starred as Rocky Balboa in the Rocky films?",
      choices: ["Dwayne Johnson","Robert DeNiro","Sylvester Stallone","Eddie Murphy"],
      answer: "Sylvester Stallone"
    },
    {
      question: "What does the nursery rhyme, ring a ring a roses, refer to?",
      choices: ["Rings made out of roses","The Black Death","The Vietnam War","The Queen of England falling down"],
      answer: "The Black Death"
    },
    {
      question: "Whose nose grew whenever he told a lie?",
      choices: ["Pinocchio","Kenjamin Button","Billy Joel","Spongebob Squarepants"],
      answer: "Pinocchio"
    },
    {
      question: "If you had pogonophobia what would you be afraid of?",
      choices: ["Porridge","Beards","Unsharpened Pencils","Rats"],
      answer: "Beards"
    },
    {
      question: "Which car company makes the Celica?",
      choices: ["Nissan","Hyundai","Toyota","Ford"],
      answer: "Toyota"
    },
    {
      question: "Triskadeccaphobia is the fear of what?",
      choices: ["The Number 13","Triscuit Crackers","Open Windows","Dull Knives"],
      answer: "The Number 13"
    },
    {
      question: "Ictheologists study what?",
      choices: ["Fish","DNA Structures","Dinosaur Bones","Social Tendencies of Mice"],
      answer: "Fish"
    },
    {
      question: "What type of acid is used in car batteries?",
      choices: ["Hydrochloric","Sulphuric","Phosphoric","Nitric"],
      answer: "Sulphuric"
    },
    {
      question: "What is a group of owls called?",
      choices: ["Murder","Family","Gang","Parliament"],
      answer: "Parliament"
    },
    {
      question: "What plant does the Colorado beetle attack?",
      choices: ["Sunflower","Petunia","Potato","Oak Tree"],
      answer: "Potato"
    },
    {
      question: "La Giaconda is better known as what?",
      choices: ["Pam from The Office","Mona Lisa","Lady Gaga","The Queen of Scotland"],
      answer: "Mona Lisa"
    },
    {
      question: "Whose autobiography was The Long Walk to Freedom?",
      choices: ["Dr. Martin Luther King Jr.","Nelson Mandela","Rosa Parks","Malcolm X"],
      answer: "Nelson Mandela"
    },
    {
      question: "What was discovered in 1922 by Howard Carter?",
      choices: ["The Circumferece of Earth","The Cure to Yellow Fever","Tutankamens Tomb","The Lost City of Atlantis"],
      answer: "Tutankamens Tomb"
    },
    {
      question: "Who won the World Series in 1987?",
      choices: ["Minnesota Twins","San Diego Padres","Boston Red Sox","New York Yankees"],
      answer: "Minnesota Twins"
    },
    {
      question: "Which German word means lightning war used in WW2?",
      choices: ["Blitzkrieg","Nein","Guten Tag","Auf Wiedersehen"],
      answer: "Blitzkrieg"
    },
    {
      question: "Broccoli belongs to what family of plants?",
      choices: ["Daisy","Celery","Cabbage","Bedstraw"],
      answer: "Cabbage"
    },
    {
      question: "Who wrote about Willie Wonka and the Chocolate Factory?",
      choices: ["Roald Dahl","Dr. Seuss","Colleen Hoover","William Shakespeare"],
      answer: "Roald Dahl"
    },
    {
      question: "Which character has been played by the most actors?",
      choices: ["Willy Wonka","Spiderman","Sherlock Holmes","Inpector Gadget"],
      answer: "Sherlock Holmes"
    }
]


/*----- state variables -----*/ // the two variables that come to mind that are necessary to track and update throughout the course of the game include the current score and the current question number. On a more robust iteration of the game, another state could be the topic of questions that a user selects, which I will attempt to implement, but it is not the main focus for the time being. 

// set a variable to keep track of the current score
let score;
// set a variable for which question number the user is on
let questionNum;


/*----- cached elements  -----*/

// The cached elements will refer to elements within the HTML and reduces the amount of times the code calls a DOM query since it stores the result to a variable.
// The HTML element that displays the current question.
const currentQuestion = document.getElementById("question");
// The HTML element that displays the answer choices.
const currentChoices = [...document.querySelectorAll('#choice-1, #choice-2, #choice-3, #choice-4')];
// The HTML element that displays the current score.
const currentScore = document.getElementById("score");
// The HTML element that will make a button function as a next question/skip question feature.
const skipQuestion = document.getElementById("skip-question");


/*----- event listeners -----*/  //document + queryselector("the element you wish to grab") + addEventListener('what you are listening for i.e. click', CALLBACK function)

  
// Add a click event listener to the answer options, so that when a user clicks an answer it will go to the next question. (We also want to display whether that answer was right or wrong with a delay before switching to the next question)

// Add a similar click event listener to the 'next question/skip question' button so that it listens for a click then immediately skips to the next question.

  
/*----- functions -----*/ // remember to use function render() and to keep it concise by calling other functions within the render. 

// Define a function to render the current question and answer options.

// Define a function to handle the user's answer and update the score and current question index. We also want to implement the ability to display whether or not the answer was right within this function as well. 

// Define a function to end the game and display the final score.
