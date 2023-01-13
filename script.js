const start = document.getElementById('start-btn')
const confirmPage = document.getElementById('confirm-container')
const questionPage = document.getElementById('question-container')

start.addEventListener('click', startQuiz)

function startQuiz(){
    console.log("started")
    confirmPage.classList.add('hide')
    questionPage.classList.remove('hide')

}

const questions = [
    {
        question: '',
        wrongAns1: '',
        wrongAns2: '',
        wrongAns3: '',
        correctAns: ''
    }
]