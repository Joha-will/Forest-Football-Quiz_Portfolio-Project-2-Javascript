// Declaring variables to get elements
const startButton = document.getElementById('start-button');
const aboutButton = document.getElementById('about-button');
const mainButtons = document.getElementsByClassName('main-buttons');

const textArea = document.getElementById('quiz-info');

let quizInfo = `
    <h2> How to play </h2>
    <p> Once you have seleted your answer, <strong> style="background-color: greenyellow" you can not change it.</strong></p>
    <br>
    <p> Each correct answer is worth 10 points.</p>
`;




// Function for the quiz games

function startGame() {

}

function aboutQuiz() {
    const homeButton = document.createElement('a');
    const homeButtonText = document.createTextNode('Home')

}

function removeButton() {
    mainButtons.remove()
}