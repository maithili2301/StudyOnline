const quizData = [
    {
        question: "What is the extension of java code files?",
        a: ".js",
        b: ".c",
        c: ".txt",
        d: ".java",
        correct: "d",
    },
    {
        question: "Which one of the following is not a Java feature?",
        a: "Object-oriented",
        b: "Use of pointers",
        c: "Portable",
        d: "Dynamic and Extensible",
        correct: "b",
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
        question: "Which of these class is a superclass of every class in Java?",
        a: "ArrayList class",
        b: "Object class",
        c: "Abstract class",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which component is used to compile, debug and execute the java programs?",
        a: " JRE",
        b: " JIT",
        c: "JDK",
        d: " JVM",
        correct: "c",
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
