// These are the questions that would be displayed to the users of the quiz
const questions = [
    {
        question: 'What year was Nottingham Forest founded?',
        option1: '1879',
        option2: '1906',
        option3: '1865',
        answer: '1865',
    },
    {
        question: 'What did Nottingham Forest win in 1979?',
        option1: 'Premier League',
        option2: 'European Cup Final',
        option3: 'Carabao Cup Final',
        answer: 'European Cup Final',
    },
    {
        question: 'What year did Steve Cooper take over as Nottingham Forest manager?',
        option1: '1993',
        option2: '2001',
        option3: '2021',
        answer: '2021',
    },
    {
        question: 'How many years did Brian Clough manage Nottingham Forest?',
        option1: '8',
        option2: '16',
        option3: '18',
        answer: '18',
    },
    {
        question: 'What team did Forest beat to win the European Cup Final in 1980?',
        option1: 'Barcelona FC',
        option2: 'Malmö FF',
        option3: 'Chelsea FC',
        answer: 'Barcelona FC',
    },
    {
        question: 'What year did Nottingham Forest with the Division 1?',
        option1: '1998-99',
        option2: '1997-98',
        option3: '1993-94',
        answer: '1997-98',
    },
    {
        question: 'When did Forest last Premier league campaign ended?',
        option1: '1999',
        option2: '2005',
        option3: '1996',
        answer: '1999',
    },
    {
        question: 'How many League Cups have Nottingham Forest won?',
        option1: '1',
        option2: '3',
        option3: '4',
        answer: '4',
    },
    {
        question: 'What is the Nottingham Forest Stadium called?',
        option1: 'Red Bull Arena',
        option2: 'City Ground',
        option3: 'Meadow Lane',
        answer: 'City Ground',
    },
    {
        question: 'What is Nottingham Forest Mascot?',
        option1: 'Robin Hood',
        option2: 'Changy the Elephant',
        option3: 'Lucas the Kop Kat',
        answer: 'Robin Hood',
    },

];

// Getting elements from the DOM and assigning them to variables

const questionContain = document.getElementById('question-container');
const answerButtons = document.getElementById('get-buttons');
let nextButton = document.getElementById('next-btn');
const displayScore = document.querySelector('#score-counter');


// Variables created to use within the functions
let scoreCount = 0;
let quesCounter = 0;
let randomQuestion;

// Adding Eventlisteners
document.addEventListener('DOMContentLoaded', startQuiz());
nextButton.addEventListener('click', nextQuestion);


// Functions to play and control the quiz game
/**
 * The start quiz function shuffles the array of questions and then display it to users of the quiz.
 */
function startQuiz(){
    randomQuestion = questions.sort(() => Math.random() - .5);
    displayQuestions(0);
}



/**
 * This is the next question function, which gets the next question in the array of question when the next button is clicked.
 * It also hides the next button everytime it gets clicked.
 */
function nextQuestion() {
    if (quesCounter < questions.length - 1) {
        quesCounter++;
        displayQuestions(quesCounter);
        nextButton.classList.add('hide');
    }
    

}

/**
 * This function gets the question from the array of objects
 * and displays them users on the quiz page.
 * Then it get's all of the answer buttons on the quiz.html page and give them an attribute of onclick
 * to run the check answer function.
 */
function displayQuestions(index) {
    let askedQuestions = `
    <h2 id="display-questions"> Question: ${questions[index].question}</h2>
    `;
    questionContain.innerHTML = askedQuestions;
    let ListOfBtn = `
    <button type="button" class="answer-btn" data-number="1">${questions[index].option1}</button>
    <button type="button" class="answer-btn" data-number="2">${questions[index].option2}</button>
    <button type="button" class="answer-btn" data-number="3">${questions[index].option3}</button>
    `;
    answerButtons.innerHTML = ListOfBtn;
    theButtons = document.querySelectorAll('.answer-btn');
    for (let i = 0; i < theButtons.length; i++) {
        theButtons[i].setAttribute('onClick', "checkAnswer(this)")
    }


}

/**
 * This function check to see if the answer choosen by the user is correct.
 * If it is correct, the selected choice turns green and if incorrect it turn red.
 * After selecting an answer, it sets the cursor pointer back to default
 */
function checkAnswer(answer) {
    let userChoice = answer.textContent;
    let correctAnswer = questions[quesCounter].answer;
    if (userChoice === correctAnswer) {
        answer.classList.add('correct')
        nextButton.classList.remove('hide')
        incrementScore();
        console.log('you are right')
    } else {
        answer.classList.add('incorrect')
        nextButton.classList.remove('hide')
        console.log('it is wrong')
    }
    for (let i = 0; i < theButtons.length; i++) {
        theButtons[i].classList.add('disable-pointer');
    }

    };  

    /**
     * This function adds 10 points to score count everytime the user selects the correct answer.
     */
function incrementScore() {
    scoreCount += 10;
    displayScore.innerText = 'Score: ' + scoreCount;
}


    
