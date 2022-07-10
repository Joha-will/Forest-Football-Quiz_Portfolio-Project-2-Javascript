// Getting elements from the DOM and assigning them to variables
const aboutButton = document.getElementById('about-button');
let mainButtons = document.querySelector('#two-buttons');
const textArea = document.getElementById('quiz-info');

let quizInfo = `

    <h2 id="how-to" class="under-line"> How to play </h2>
    <p> To start the quiz, just simply click the <strong class="under-line"> Start Quiz Button.</strong></p>
    <p> If the answer you have choosen is correct, <strong class="under-line">the button will turn green.</strong></p>
    <p>If the answer you have choosen is wrong, <strong class="under-line">the button will turn red.</strong></p>
    <p> Once you have seleted your answer, <strong class="under-line"> you can not change it.</strong></p>
    <p> Choose the answer that you think is correct.</p>
    <p> Each correct answer is worth <strong class="under-line"> 10 points.</strong></p>
`;



aboutButton.addEventListener('click', aboutQuiz);





/**
 *  When the about buttons is clicked, it triggers this function which removes the start and about button and displays a how to play text.
 */
function aboutQuiz() {
    removeButtons();
    textArea.classList.add('hide');
    const homeButton = document.createElement('a');
    const homeButtonText = document.createTextNode('Home');
    textArea.innerHTML = quizInfo;
    textArea.append(homeButton);
    homeButton.append(homeButtonText);
    homeButton.setAttribute('class', 'home-button');
    homeButton.setAttribute('href', './index.html');
}
/**
 * This function removes the start and about buttons when its called.
 */
function removeButtons() {
    mainButtons.remove();
}