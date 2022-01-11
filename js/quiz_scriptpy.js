const quizData = [
    {
        question:"Who developed Python Programming Language?",
        a: " Wick van Rossum",
        b: "Rasmus Lerdorf",
        c: "Guido van Rossum",
        d: "Niene Stom",
        correct: "c",
    },
    {
        question: "Which type of Programming does Python support?",
        a: "Object-oriented programming",
        b: "structured programming",
        c: "functional programming",
        d: "all of the mentioned",
        correct: "d",
    },
    {
        question: "Which of the following is not an OOPS concept in Java?",
        a: "Compilation",
        b: "Polymorphism",
        c: " Inheritance",
        d: "Encapsulation",
        correct: "a",
    },
    {
        question: "Which of the following is the correct extension of the Python file?",
        a: ".python",
        b: ".pl",
        c: ".py",
        d: ".p",
        correct: "c",
    },
    {
        question: "Is Python code compiled or interpreted?",
        a: " Python code is both compiled and interpreted",
        b: " Python code is neither compiled nor interpreted",
        c: " Python code is only compiled",
        d: " Python code is only interpreted",
        correct: "b",
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