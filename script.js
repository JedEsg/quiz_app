

// Variables

const start = document.getElementById('start-btn');
const pick = document.getElementById('pick-btn');
const container = document.getElementById('container');
const confirmPage = document.getElementById('confirm-container');
const questionPage = document.getElementById('question-container');
const quizpick = document.getElementById('quiz-pick');


// Event Listeners

start.addEventListener('click', startQuiz);
pick.addEventListener('click', pickQuiz);


// Function

function startQuiz(){
    console.log("started");
    confirmPage.classList.add('hide');
    questionPage.classList.remove('hide');

}

function pickQuiz(){
    start.classList.remove('hide');
    pick.classList.add('hide');
    container.style.top = "3rem";
    
}

const questions = [
    {
        question: '',
        wrongAns1: '',
        wrongAns2: '',
        wrongAns3: '',
        correctAns: ''
    }
];