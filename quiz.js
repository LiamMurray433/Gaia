// Initialize variables
let score = 0;
let currentQuestion = 0;

// Define quiz questions and answers
const quiz = [
    {
        question: "What is an extinct species?",
        choices: ["A species that is in danger of dying out completely", "A species that has died out completely", "A species that is sick", "A species that is rare"],
        correctAnswer: "A species that has died out completely"
    },
    {
        question: "Habitats for animals must include which of the following:",
        choices: ["Food", "Water", "Shelter and places to raise the young", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "Plants and trees release oxygen into the air",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Water is found in which of the following:",
        choices: ["Clouds", "Streams and rivers", "Plants", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "Litter is a type of pollution:",
        choices: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "What is the nationality of environmental activist Greta Thunberg?",
        choices: ["French", "Italian", "Swedish", "Norwegian"],
        correctAnswer: "Swedish"
    },
    {
        question: "Which animal is the primary culprit when it comes to greenhouse gas emissions?",
        choices: ["Cows", "Pigs", "Dogs", "Monkey"],
        correctAnswer: "Cows"
    },
    {
        question: "Which country contributes most cities in the list of the world's 10 worst polluted cities?",
        choices: ["China", "United States", "India", "United Kingdom"],
        correctAnswer: "India"
    },
    {
        question: "Greenpeace was founded in which country in 1969?",
        choices: ["United Kingdom", "Canada", "France", "New Zealand"],
        correctAnswer: "Canada"
    },
    {
        question: "How many pieces of plastic particles are there estimated to be currently floating around in the oceans?",
        choices: ["500 million", "5 billion", "5 trillion", "5 Googols"],
        correctAnswer: "5 trillion"
    },

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
    <h2 class="question-txt">${question}</h2>
    <form id="answer-form">${choicesHtml}</form>
    <button id="submit-button">Submit</button>
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
        alert(score / 10 * 100 + "% out of 100%")
    }
}

