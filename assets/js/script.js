// Declaring variables to get elements
const startButton = document.getElementById('start-button');
const aboutButton = document.getElementById('about-button');
const mainButtons = document.querySelector('#two-buttons');

const textArea = document.getElementById('quiz-info');

let quizInfo = `

    <h2> How to play </h2>
    <p> To start game just simply click the <strong style="background-color: greenyellow"> Start Quiz Button.</strong></p>
    <p> Choose the answer that you think is correct.</p>
    <p> Once you have seleted your answer, <strong style="background-color: greenyellow"> you can not change it.</strong></p>
    <p> Each correct answer is worth <strong style="background-color: greenyellow"> 10 points.</strong></p>
`;



// Questions to display to users.
const questions = [
    {
        question: 'What year was Nottingham Forest FC founded?',
        option1: '1879',
        option2: '1906',
        option3: '1865',
        answer: 3,
    },
    {
        question: 'What did Nottingham Forest win in 1979?',
        option1: 'Premier League',
        option2: 'European Cup Final',
        option3: 'Carabao Cup Final',
        answer:  2,
    },
    {
        question: 'what year did Steve Cooper take over as Nottingham Forest manager?',
        option1: '1993',
        option2: '2001',
        option3: '2021',
        answer: 3,
    },
]





// List of EventListeners 

aboutButton.addEventListener('click', aboutQuiz, );




// Function for the quiz games

function startGame() {

}

function checkAnswer() {

}

function incrementScore() {

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