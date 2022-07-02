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
    }
]

const questionContain = document.getElementById('question-container');
const answerButtons = document.getElementById('get-buttons');





document.addEventListener('DOMContentLoaded', displayQuestions())

function displayQuestions() {
    let askedQuestions = `
    <h2 id="display-questions"> Question: ${questions[0].question}</h2>
`;
questionContain.innerHTML = askedQuestions;
}
