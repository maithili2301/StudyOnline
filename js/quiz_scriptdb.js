const quizData = [
    {
        question:"What is the full form of DBMS?",
        a: "Data of Binary Management System",
        b: "Database Management System",
        c: "Database Management Service",
        d: "Data Backup Management System",
        correct: "b",
    },
    {
        question: "Who created the first DBMS?",
        a: "Edgar Frank Codd",
        b: "Charles Bachman",
        c: "Charles Babbage",
        d: "Sharon B. Codd",
        correct: "b",
    },
    {
        question: " Which of the following is a function of the DBMS?",
        a: "Storing data",
        b: "Providing multi-users access control",
        c: " Data Integrity",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Which of the following is a component of the DBMS?",
        a: "Data",
        b: "Data Language",
        c: "Data Manager",
        d: "All of the Above",
        correct: "d",
    },
    {
        question: "Which forms have a relation that contains information about a single entity?",
        a: "4NF",
        b: "2NF",
        c: "5NF",
        d: "3NF",
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