// Declaring variables to get elements
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

// List of EventListeners 
aboutButton.addEventListener('click', aboutQuiz, );



// Functions for the quiz games

/**
 *  When the about buttons is clicked, it triggers this function which removes the start and about button and displays a how to play text.
 */
function aboutQuiz() {
    removeButtons()
    textArea.classList.add('hide')
    const homeButton = document.createElement('a');
    const homeButtonText = document.createTextNode('Home');
    textArea.innerHTML = quizInfo;
    textArea.append(homeButton);
    homeButton.append(homeButtonText);
    homeButton.setAttribute('class', 'home-button');
    homeButton.setAttribute('href', './index.html');
    console.log('click')
}

function removeButtons() {
    mainButtons.remove();
}