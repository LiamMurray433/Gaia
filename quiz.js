// Initialize variables
let score = 0;
let currentQuestion = 0;

// Define quiz questions and answers
const quiz = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Paris", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the tallest mountain in the world?",
        choices: ["K2", "Mount Everest", "Denali", "Kilimanjaro"],
        correctAnswer: "Mount Everest"
    },
    {
        question: "What is the largest continent in the world?",
        choices: ["Africa", "Asia", "North America", "Antarctica"],
        correctAnswer: "Asia"
    }
];

// Display the current question and multiple-choice answers
function displayQuestion() {
    const questionContainer = document.querySelector("#quiz-container");
    const question = quiz[currentQuestion].question;
    const choices = quiz[currentQuestion].choices;
    let choicesHtml = "";
    for (let i = 0; i < choices.length; i++) {
        choicesHtml += `<label><input type="radio" name="answer" value="${choices[i]}"> ${choices[i]}</label><br>`;
    }
    questionContainer.innerHTML = `
    <h2>${question}</h2>
    <form id="answer-form">${choicesHtml}</form>
    <button id="submit-btn">Submit</button>
  `;
    const submitButton = document.querySelector("#submit-button");
    submitButton.addEventListener("click", checkAnswer);
}

// Check the user's answer against the correct answer
function checkAnswer() {
    const answerForm = document.querySelector("#answer-form");
    const userAnswer = answerForm.elements["answer"].value;
    const correctAnswer = quiz[currentQuestion].correctAnswer;
    if (userAnswer === correctAnswer) {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
    currentQuestion++;
    if (currentQuestion < quiz.length) {
        displayQuestion();
    } else {
        alert(`You scored ${score} out of ${quiz.length}!`);
    }
}

// Start the quiz
displayQuestion();