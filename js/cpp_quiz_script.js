const quizData = [
    {
        question: " C++ is ______________",
        a: "functional programming language",
        b: "procedural programming language",
        c: "object oriented programming language",
        d: "both procedural and object oriented programming language",
        correct: "d",
    },
    {
        question: "Which of the following is used for comments in C++?",
        a: "// comment */",
        b: " both // comment or /* comment */",
        c: " /* comment */",
        d: "// comment",
        correct: "b",
    },
    {
        question: "Which of the following type is provided by C++ but not C?",
        a: "bool",
        b: "double",
        c: "float",
        d: "int",
        correct: "a",
    },
    {
        question: "What is Inheritance in C++?",
        a: "Deriving new classes from existing classes",
        b: "Overloading of classes",
        c: "Classes with same names",
        d: "Wrapping of data into a single class",
        correct: "b",
    },
    {
        question: "Which of the following symbol is used to declare the preprocessor directives in C++?",
        a: " #",
        b: "$",
        c: "*",
        d: "^",
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
