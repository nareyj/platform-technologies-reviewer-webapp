const questions = [
    {
        question:"Is a broad term that can encompass a variety of subjects and fields, depending on the context. ?",
        choices: ["Platform technologies", "Operating System", "Software"],
        correctAnswer: "Platform technologies",
    },
    {
        question: "Any pre-existing hardware  environment, a piece of software that is designed to run within it, and  any associated facilities used with it?",
        choices: ["Software", "Platform", "Hardware"],
        correctAnswer: "Platform"
    },
    // Add more questions here
    {
        question: "In what generation Vacuum Tubes start?",
        choices: ["1945-55", "1955-65", "1965-1980"],
        correctAnswer: "1945-55"
    },
    {
        question: "Managing all these components requires a layer of software.",
        choices: ["Operating System", "Cloud Computing", "Database Management System"],
        correctAnswer: "Operating System"
    },
    {
        question: "A set of disciplines that describes a computer system by specifying its  parts and their relations provides physical environment?",
        choices: ["Hardware Architecture", "Software Architecture", "Operating System"],
        correctAnswer: "Hardware Architecture"
    },
    {
        question: "A collection of software that  manages computer hardware  resources and provides common  services for computer programs.",
        choices: ["Hardware", "Cloud Storage", "Operating System"],
        correctAnswer: "Operating System"
    },
    {
        question: "Evolution of General-purpose mainframe and minicomputer era.",
        choices: ["1951 to present", "1983 to present", "1959 to present"],
        correctAnswer: "1959 to present"
    },
    {
        question: "Evolution of Personal computer era.",
        choices: ["1951 to present", "1983 to present", "1981 to present"],
        correctAnswer: "1981 to present"
    },
    {
        question: "Evolution of Client?server era.",
        choices: ["1959 to present", "1983 to present", "1951 to present"],
        correctAnswer: "1983 to present"
    },
    {
        question: "Evolution of General-purpose mainframe and minicomputer era.",
        choices: ["1951 to present", "1983 to present", "1959 to present"],
        correctAnswer: "1959 to present"
    },
    {
        question: "Evolution of Enterprise computing era.",
        choices: ["1992 to present", "1983 to present", "2000 to present"],
        correctAnswer: "1992 to present"
    },
    {
        question: "Evolution of Cloud and Mobile computing era.",
        choices: ["2000 to present", "1998 to present", "2002 to present"],
        correctAnswer: "2000 to present"
    },
    {
        question: "An activity of some kind and something that may be stored on disk, not doing anything.",
        choices: ["Program and Process", "Process and Program", "Procedure and PRogram"],
        correctAnswer: "Process and Program"
    },
    {
        question: "All the runnable software on the computer, sometimes including the  operating system, is organized into a number of sequential processes.",
        choices: ["The Procedure Model", "The Program Model", "The Process Model"],
        correctAnswer: "The Process Model"
    },
    {
        question: "Skeleton of what the lowest level of the operating system does when  an interrupt occurs.",
        choices: ["Interrupt Handling and Scheduling", "Interrupt Service Routine", "Break-point interrupt"],
        correctAnswer: "Interrupt Handling and Scheduling"
    },
    {
        question: "In many applications, multiple activities are going on at once.",
        choices: ["Multiprocessor", "Threads", "Activities Overlap"],
        correctAnswer: "Threads"
    },
    {
        question: "Is the situation of allowing multiple threads in the  same process.",
        choices: ["Mulimedia", "Multiprocessor", "Multithreading"],
        correctAnswer: "Multithreading"
    },
    {
        question: "Evolution of General-purpose mainframe and minicomputer era.",
        choices: ["1951 to present", "1983 to present", "1959 to present"],
        correctAnswer: "1959 to present"
    },
    
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question");
const choicesList = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const resultText = document.getElementById("result");
const scoreText = document.getElementById("score");
const nextButton = document.getElementById("next-button");


function loadQuestion() {
    if (currentQuestion < questions.length) {
        questionText.textContent = questions[currentQuestion].question;
        choicesList.innerHTML = "";
        questions[currentQuestion].choices.forEach((choice) => {
        const li = document.createElement("li");
        li.textContent = choice;
        li.addEventListener("click", checkAnswer);
        choicesList.appendChild(li);
        });
    } else {
        endQuiz();
    }
}

function checkAnswer(event) {
    if (event.target.textContent === questions[currentQuestion].correctAnswer) {
        score++;
        resultText.textContent = "Correct!";
    } else {
        resultText.textContent = `Wrong. The correct answer is: ${questions[currentQuestion].correctAnswer}`;
    }
    scoreText.textContent = `Score: ${score}`;
    feedback.style.display = "block";
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    feedback.style.display = "none";
    nextButton.style.display = "none";
    loadQuestion();
}


function endQuiz() {
    questionText.textContent = "Quiz completed!";
    choicesList.innerHTML = "";
    nextButton.style.display = "none";
}

nextButton.addEventListener("click", nextQuestion);

loadQuestion();
