  /*----- constants -----*/ // within a browser trivia game the main constant "always the same" features will be the questions, options for answers, and the correct answer. Besides that, potentially any background sounds or images used for Quality of Life purposes could be constants. Those however, are additional add ons and not necessary to a functioning game.

  // Define an object, that will store several different trivia questions that will be flucuated through during the process of the game along with the potential options and the correct answer.

  /*----- state variables -----*/ // the two variables that come to mind that are necessary to track and update throughout the course of the game include the current score and the current question number. On a more robust iteration of the game, another state could be the topic of questions that a user selects, which I will attempt to implement, but it is not the main focus for the time being. 

  // set a variable to keep track of the current score
  // set a variable for which question number the user is on

  /*----- cached elements  -----*/

  // The cached elements will refer to elements within the HTML and reduces the amount of times the code calls a DOM query since it stores the result to a variable.
  // The HTML element that displays the current question.
  // The HTML element that displays the answer choices.
  // The HTML element that displays the current score.
  // The HTML element that will make a button function as a next question/skip question feature.

  /*----- event listeners -----*/  //document + queryselector("the element you wish to grab") + addEventListener('what you are listening for i.e. click', CALLBACK function)

  // Add a click event listener to the answer options, so that when a user clicks an answer it will go to the next question. (We also want to display whether that answer was right or wrong with a delay before switching to the next question)
  // Add a similar click event listener to the 'next question/skip question' button so that it listens for a click then immediately skips to the next question.

  /*----- functions -----*/ // remember to use function render() and to keep it concise by calling other functions within the render. 

  // Define a function to render the current question and answer options.
  // Define a function to handle the user's answer and update the score and current question index. We also want to implement the ability to display whether or not the answer was right within this function as well. 
  // Define a function to end the game and display the final score.
