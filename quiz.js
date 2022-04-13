const quizData = [
    {
        question: "What is the type of the game?",
        a: "Arcade",
        b: "PvP",
        c: "Hypercasual",
        d: "RPG",
        correct: "c",
    },
    {
        question: "How many people made the game?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "b",
    },
    {
        question: "In what country was the game made?",
        a: "Lebanon",
        b: "USA",
        c: "UK",
        d: "France",
        correct: "a",
    },
    {
        question: "What is the game size?",
        a: "3 MB",
        b: "50 MB",
        c: "20 MB",
        d: "100 MB",
        correct: "c",
    },
    {
        question: "What is the purpose of the game?",
        a: "Having fun",
        b: "Helping people",
        c: "Winning prizes",
        d: "All of the above",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerElements = document.querySelectorAll('.answer')
const questionElements = document.getElementById('question')
const first_text = document.getElementById('first_text')
const second_text = document.getElementById('second_text')
const third_text = document.getElementById('third_text')
const forth_text = document.getElementById('forth_text')
const submitBtn = document.getElementById('submitBtn')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionElements.innerText = currentQuizData.question+" ("+(quizData.length-currentQuiz)+" questions left)";
    first_text.innerText = currentQuizData.a
    second_text.innerText = currentQuizData.b
    third_text.innerText = currentQuizData.c
    forth_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerElements.forEach(answerEl => {
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
                if(score >= 3){
                   quiz.innerHTML = `
                <h2>${score}/${quizData.length} questions answered correctly. Now you know more about the game!</h2>
                <button onclick="location.reload()">Reload</button>
            `  
                }
                else{
                    quiz.innerHTML = `
                <h2>${score}/${quizData.length} questions answered correctly. Ain't much but thats okay!</h2>
                <button onclick="location.reload()">Reload</button>
            ` 
                }
                
            
            
        }
    }
})
