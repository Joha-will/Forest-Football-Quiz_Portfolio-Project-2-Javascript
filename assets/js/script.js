// Declaring variables to get elements
const startButton = document.getElementById('start-button');
const aboutButton = document.getElementById('about-button');
const mainButtons = document.querySelector('#two-buttons');

const textArea = document.getElementById('quiz-info');

let quizInfo = `
    <h2> How to play </h2>
    <p> Once you have seleted your answer, <strong> style="background-color: greenyellow" you can not change it.</strong></p>
    <br>
    <p> Each correct answer is worth 10 points.</p>
`;



// List of EventListeners 

aboutButton.addEventListener('click', aboutQuiz, );




// Function for the quiz games

function startGame() {

}




function aboutQuiz() {
    removeButtons()
    const homeButton = document.createElement('a');
    const homeButtonText = document.createTextNode('Home');
    textArea.innerHTML = quizInfo;
    textArea.append(homeButton);
    homeButton.append(homeButtonText);
    homeButton.setAttribute('class', 'home-button');
    homeButton.setAttribute('href', './index.html');
}

function removeButtons() {
    mainButtons.remove();
}