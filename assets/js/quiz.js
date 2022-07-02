// These are the questions that would be displayed to the users of the quiz
const questions = [
    {
        question: 'What year was Nottingham Forest founded?',
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
        answer: 2,
    },
    {
        question: 'What year did Steve Cooper take over as Nottingham Forest manager?',
        option1: '1993',
        option2: '2001',
        option3: '2021',
        answer: 3,
    },
    {
        question: 'How many years did Brian Clough manage Nottingham Forest?',
        option1: '8',
        option2: '16',
        option3: '18',
        answer: 3,
    },

]

// Getting elements from the DOM and assigning them to variables

const questionContain = document.getElementById('question-container');
const answerButtons = document.getElementById('get-buttons');


// Variables created to use within the functions
let scoreIndex = 0;
let quesCounter = 0;
let randomQuestion;

// Adding Eventlisteners
document.addEventListener('DOMContentLoaded', startQuiz())


// Functions to play and control the quiz game

function startQuiz(){
    randomQuestion = questions.sort(() => Math.random() - .5);
    displayQuestions(0);
}

function nextQuestion() {

}

/**
 * This function gets the question from the array of objects
 * and displays them users on the quiz page
 */
function displayQuestions(index) {
    let askedQuestions = `
    <h2 id="display-questions"> Question: ${questions[index].question}</h2>
    `;
    questionContain.innerHTML = askedQuestions;
    let ListOfBtn = `
    <button type="button" class="answer-btn" data-number="1"> A.${questions[0].option1}</button>
    <button type="button" class="answer-btn" data-number="2"> B.${questions[0].option2}</button>
    <button type="button" class="answer-btn" data-number="3"> C.${questions[0].option3}</button>
    `;
    answerButtons.innerHTML = ListOfBtn;


}

function checkAnswer() {

}
