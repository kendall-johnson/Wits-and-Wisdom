# Wits and Wisdom by Kendall Johnson
### Description:
Wits and Wisdom is an engaging trivia game that uses HTML, CSS, and JavaScript to deliver a dynamic and interactive experience. Through the implementation of DOM, Event Listeners, and several other key tools provided from the likes of JavaScript the user is fist given the option of which category they wish to select. Once a category is selected, at a pace of one question at a time, the user is given four choices of answers and they must decipher which is the correct one. If the user braves the challenge and selects the correct answer they are alerted with acknowledgement of a valid choice via the score increasing and then immediately move onto the next question until they get a total of 5 correct. After 5 correct answers, they are greeted with a custom congratulations message and are prompted to play again. If they are wrong, behind the scenes the program takes note of it and then pushes them to the next question, if the user gets three answers wrong they fail the quiz and are promted to play again. When the user clicks play again, they are brought back to the initial screen to start the program all over.

## :link: Live Link: 
Click the following link to be redirected to the live version of the code, also, don't forget to have fun! [Wits and Wisdom](https://kendall-johnson.github.io/Wits-and-Wisdom/)

## :camera_flash: Visuals and Helpful Insight :
### Category Selection Page
![main page](/screenshots/startingScreen.png)
When the user opens the webpage, they are greeted by a entry screen that prompts the user to select a category. Nothing else will display until they do so. This grants the user the ability to play the game in the way in which they most desire.
### Gameplay Page
![when you play the game](/screenshots/gameplay.png)
Once the user selects a category, they are launched into the game and displayed with a randomly selected question and its accompanying possible answer choices. Along with that, as the user continues to play, the score will update whenever they get a question correct and if the user is ever completely lost and does not know what to choose for an answer they can skip the question using the implemented button.
### Win Screen Page
![when you win the game](/screenshots/winScreen.png)
When the user reaches a score of 5, they are met with a winning message, the unnecessary elements including the answer choices get blurred out and you are left with the score and a "Play Again" button to restart the game when you are ready.
### Lose Screen Page
![when you lose the game](/screenshots/loseScreen.png)
When the user gets 3 questions wrong they are met with a message alerting them they have failed and, similar to when one wins, the unnecessary elements are blurred out and you are left with a "Play Again" button to restart the game.


## :computer: Technologies Used
- HTML (HyperText Markup Language) ![HTML badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- CSS (Cascading Style Sheets) ![CSS badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- JavaScript ![JS badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

## The Code Behind The Program:
``` 
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
```
Although, it appears relatively short in nature, this block of code serves as the legs to this walking machine. It renders a random question based on the category selected and iterates through the beginning array of objects to grab not only that random question, but its accompanying answer choices. Without this block of code, almost nothing else functions. The harmony within all the separate gears turning here are like the melody of a song you cannot get out of your head. 

## :chart_with_upwards_trend: Look Forward
I have a few key changes I hope to implement in the near future to increase the functionality of the game. They are as follows: 
- [ ] Add a wider question base
- [ ] Implement a more reactive environment to different screen and display sizes
- [ ] Streamline the current code using React and other JavaScript Libraries

