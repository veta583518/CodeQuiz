var startButton = document.getElementById('start');
var questionContainerEl = document.getElementById('question-wrapper');
var questionEl = document.getElementById('question');
var answerChoiceBtn = document.getElementById('answer-buttons');
//var intro = document.getElementById('intro');
//var startUpscreen = 'Try to answer the following code-related questions within the time limit.Keep in mind that incorrect answers will penalize your score/time by ten seconds!'
//var highscore = [];
let randomQuestions, currentQuestionIndex

// Hide intro and show 1st Question
function buildQuiz() {
    // Hide intro
    startButton.classList.add('hide');
    intro.classList.add('hide');
    
    // Randomize questions
    randomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    // Show questions and answer choices
    questionContainerEl.classList.remove('hide');
    setNextQuestion();
}

// Questions and Answers Array
var questions = [
    {
        question: 'String values must be enclosed within _____ when being assigned to variables.',
        answers: [
            { text: "1. commas", correct: false },
            { text: "2. curly brackets", correct: false },
            { text: "3. quotes", correct: true },
            { text: "4. parenthesis", correct: false}
        ]
    },
    {
        question:'Arrays in JavaScript can be used to store _____.',
        answers: [
            {text: '1. numbers and strings', correct: false},
            {text: '2. other array', correct: false},
            {text: '3. booleans', correct: false},
            {text: '4. all of the above', correct: true}
        ]
    },
    {
        question: 'The condition in an if / else statement is enclose with _____.',
        answers: [
            {text: '1. quotes', correct: true },
            {text: '2. curly brackets', correct: false},
            {text: '3. parenthesis', correct: false},
            {text: '4. square brackets', correct: false}
        ]
    },
    {
        question: 'Commonly used data types Do NOT include:' ,
        answers: [
            {text: '1. strings', correct: false},
            {text: '2. booleans', correct: false },
            {text: '3. alerts', correct: true},
            {text: '4. numbers', correct: false }
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            {text: '1. JavaScript', correct: false},
            {text: '2. terminal/bash', correct: false},
            {text: '3. for loops', correct: false},
            {text: '4. console.log', correct: true}
        ]
    }
];
// Start timer
function countdown() {

}




// Loads next question into quiz 
function setNextQuestion() {
    clearQuestions();
    showQuestion(randomQuestions[currentQuestionIndex])
};

// Loads questions into HTML
function showQuestion (question){
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        // create a new button for each answer and fill 
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerChoiceBtn.appendChild(button);
    })
};

function clearQuestions () {
    clearStatusClass(document.body)
}
function selectAnswer(event) {
    var SelectedButton
}

function showResults () {

}

startButton.addEventListener('click', buildQuiz)