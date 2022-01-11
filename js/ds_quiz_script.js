const quizData = [
    {
        question: "Which one of the following is the process of inserting an element in the stack?",
        a: "Insert",
        b: "Add",
        c: "NOT",
        d: "Push",
        correct: "d",
    },
    {
        question: " When the user tries to delete the element from the empty stack then the condition is said to be a ____",
        a: "overflow",
        b: "Underflow",
        c: "garbage collection",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which data structure is required to convert the infix to prefix notation?",
        a: " Stack",
        b: "Linked list",
        c: " Queue",
        d: " Binary tree",
        correct: "a",
    },
    {
        question: "Which of the following is the infix expression?",
        a: "+A*BC",
        b: "A+B*C",
        c: "ABC+*",
        d: "NOT",
        correct: "b",
    },
    {
        question: "Which of the following principle does Queue use?",
        a: "FIFO",
        b: "LIFO",
        c: "Liner",
        d: "Non of the above",
        correct: "a",
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
