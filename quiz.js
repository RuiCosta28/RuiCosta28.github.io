const questions = [
{
    question: "Quando o teu amigo esta a abichanar a mais de meia hora, o que fazes?",
        answers: [
            { text: "Aceitas porque es bichona também", correct: false },
            { text: "Chamas o Fernando", correct: true },
            { text: "Tomam banho na barragem todos nús", correct: false },
            { text: "Eish olha ai não podes usar o termo bichona", correct: false },
        ]
},

{
    question: "Quem é o melhor jogador do mundo",
        answers: [
            { text: "Messi", correct: false },
            { text: "BOBBY CHARLTON 🏳️‍🌈", correct: false },
            { text: "Cristiano Ronaldo", correct: false },
            { text: "Cristiano Reinado", correct: true },
        ]
},

{
    question: "A gaja pergunta-te as horas, o que dizes?",
        answers: [
            { text: "O que tu queres sei eu", correct: true },
            { text: "São 11:00", correct: false },
            { text: "Não tenho relógio", correct: false },
            { text: "Até mandava tirar os dentes da frente só para te chupar melhor o grelo", correct: false },
        ]
},

{
    question: "Para uma boa campanha de marketing o que é preciso?",
        answers: [
            { text: "Um copy bem escrito", correct: false },
            { text: "Um youtuber a mandar o costa po crl", correct: false },
            { text: "Uma agencia publicitaria que não é de chelas", correct: false },
            { text: "Gaja boa com uma boa tranca, prateleira de sonho", correct: true },
        ]
},
{
    question: "Quem ganha a liga este ano?",
        answers: [
            { text: "Porto", correct: false },
            { text: "Benfica", correct: false },
            { text: "Sporting lol", correct: false },
            { text: "Todas as anteriores", correct: true },
        ]
},

];


const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();

}

 function showQuestion() {
    resetQuiz ();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNr = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNr + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener ("click", selectAnswer);
    });
}

function resetQuiz (){
    nextBtn.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        alert ("GONDOMAR GONDOMAR")
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
        alert ("ESTUPIDO, TA MALE")
    }
    Array.from(answerBtn.children).forEach(button => {
    if (button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
}); 
    nextBtn.style.display = "block";
}

function showScore () {
    resetQuiz();   
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block"; 
};


function handleNextBtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    }else {
        showScore();
    }
};

nextBtn.addEventListener ("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextBtn(); 
    }else {
        startQuiz();
    }
});
startQuiz();

