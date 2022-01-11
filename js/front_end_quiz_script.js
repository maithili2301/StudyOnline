const quizData = [
    {
        question: "HTML stands for __________",
        a: " HighText Marking Language",
        b: "HyperText Marking Language",
        c: "HyperText Machine Language",
        d: "HyperText Markup Language",
        correct: "d",
    },
    {
        question: " How do we write comments in HTML5?",
        a: "</…….>",
        b: " <!……>",
        c: "</……/>",
        d: "<…….!>",
        correct: "b",
    },
    {
        question: "Which character is used to represent when a tag is closed in HTML?",
        a: " /",
        b: "#",
        c: " !",
        d: " &",
        correct: "a",
    },
    {
        question: "Among the following, which is the HTML paragraph tag?",
        a: "<pre>",
        b: "<p>",
        c: "<hr>",
        d: "<a>",
        correct: "b",
    },
    {
        question: "Which of the following tag is used to create an unordered list?",
        a: " <ul>",
        b: " <ol>",
        c: "<li>",
        d: " <il>",
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
