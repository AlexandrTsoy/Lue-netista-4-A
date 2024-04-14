const questionData = [
    {
        image: "./1banaaninkuoret.jpg",
        correctAnswer: 0,
    },
    {
        image: "./2energiansaastolamput.jpg",
        correctAnswer: 1,
    },
    {
        image: "./3hehkulamppu.jpg",
        correctAnswer: 1,
    },
    {
        image: "./4hiuslakkapullo.jpg",
        correctAnswer: 1,
    },
    {
        image: "./5jaatelopakkaukset.jpg",
        correctAnswer: 2,
    },
    {
        image: "./6kahvinporot.jpg",
        correctAnswer: 0,
    },
    {
        image: "./7kahvipussi.jpg",
        correctAnswer: 6,
    },
    {
        image: "./8kartonkipakkaukset.jpg",
        correctAnswer: 2,
    },
    {
        image: "./9kasidesi.jpg",
        correctAnswer: 6,
    },
    {
        image: "./10kirjekuori.jpg",
        correctAnswer: 7,
    },
    {
        image: "./11kukka-ja-multaa.jpg",
        correctAnswer: 0,
    },
    {
        image: "./12kuumemittari.jpg",
        correctAnswer: 1,
    },
    {
        image: "./13kynsilakka.jpg",
        correctAnswer: 1,
    },
    {
        image: "./14leivinpaperi.jpg",
        correctAnswer: 3,
    },
    {
        image: "./15maalipurkki.jpg",
        correctAnswer: 1,
    },
    {
        image: "./16mainoslehdet.jpg",
        correctAnswer: 3,
    },
    {
        image: "./17maitopurkit.jpg",
        correctAnswer: 2,
    },
    {
        image: "./18metallifolio.jpg",
        correctAnswer: 5,
    },
    {
        image: "./19metallikorkit.jpg",
        correctAnswer: 5,
    },
    {
        image: "./20muoviastiat.jpg",
        correctAnswer: 6,
    },
    {
        image: "./21muovikassi.jpg",
        correctAnswer: 6,
    },
    {
        image: "./22pahvilaatikko.jpg",
        correctAnswer: 2,
    },
    {
        image: "./23pantiton-pullo.jpg",
        correctAnswer: 1,
    },
    {
        image: "./24panttipullot.jpg",
        correctAnswer: 4,
    },
    {
        image: "./25paperipussi.jpg",
        correctAnswer: 3,
    },
    {
        image: "./26paperit.jpg",
        correctAnswer: 3,
    },
    {
        image: "./27pilaantunut-ruoka.jpg",
        correctAnswer: 0,
    },
    {
        image: "./28pyykinpesuneste.jpg",
        correctAnswer: 6,
    },
    {
        image: "./29rikkinainen-juomalasi.jpg",
        correctAnswer: 4,
    },
    {
        image: "./30rikkinainen-kannykka.jpg",
        correctAnswer: 1,
    },
    {
        image: "./31rikkinainen-lappari.jpg",
        correctAnswer: 1,
    },
    {
        image: "./32rikkinaiset-farkut.jpg",
        correctAnswer: 7,
    },
    {
        image: "./33ruuvit-ja-naulat.jpg",
        correctAnswer: 5,
    },
    {
        image: "./34sailyketolkki.jpg",
        correctAnswer: 5,
    },
    {
        image: "./35shampoopullo.jpg",
        correctAnswer: 6,
    },
    {
        image: "./36teepussi.jpg",
        correctAnswer: 7,
    },
    {
        image: "./37uloste.jpg",
        correctAnswer: 7,
    },
    {
        image: "./38vaipat.jpg",
        correctAnswer: 7,
    },
    {
        image: "./39vanha-oljy.jpg",
        correctAnswer: 1,
    },
    {
        image: "./40vanhat-akut.jpg",
        correctAnswer: 1,
    },
    {
        image: "./41vanha-talouspaperi.jpg",
        correctAnswer: 3,
    },
    {
        image: "./42vanhat-kattilat.jpg",
        correctAnswer: 5,
    },
    {
        image: "./43vanhat-laakkeet.jpg",
        correctAnswer: 1,
    },
    {
        image: "./44vanhat-paristot.jpg",
        correctAnswer: 1,
    },
    {
        image: "./45vessapaperi.jpg",
        correctAnswer: 0,
    },
    {
        image: "./46vessapaperirullan-keskiö.jpg",
        correctAnswer: 2,
    }
];

const totalQuestions = questionData.length;
let currentQuestion = 0;
let correctCount = 0;
const correctAnswers = new Array(totalQuestions).fill(false);

const questionImage = document.getElementById("question-image");
const answerButtonsContainer = document.querySelector(".card-body");
const correctAnswersSpan = document.getElementById("correct-answers");
const totalQuestionsSpan = document.getElementById("total-questions");






function initializeGame() {
if (currentQuestion < totalQuestions) {
const currentQuestionData = questionData[currentQuestion];
questionImage.src = currentQuestionData.image;
answerButtonsContainer.innerHTML = ""; 


const answerImages = [
    "./biojate_vihrea.jpg",
    "./jateasema.jpg",
    "./kartonkikerays.jpg",
    "./kerayspaperi.jpg",
    "./lasinkerays.jpg",
    "./metallijate.jpg",
    "./muovipakkaukset.jpg",
    "./sekajate.jpg"
];


const row1 = document.createElement("div");
row1.className = "row";


for (let i = 0; i < 4; i++) {
    const answerContainer = document.createElement("div");
    answerContainer.className = "col-md-3 text-center"; 

    const answerButton = document.createElement("img");
    answerButton.className = "btn btn-primary answer-button";
    answerButton.src = answerImages[i];
    answerButton.setAttribute("data-answer-index", i);

    answerButton.addEventListener("click", () => {
        checkAnswer(answerButton);
    });

    const answerText = document.createElement("p");
    answerText.className = "answer-text";
    answerText.textContent = "" + getAnswerName(i);;

    answerContainer.appendChild(answerButton);
    answerContainer.appendChild(answerText);

    row1.appendChild(answerContainer);
}

const row2 = document.createElement("div");
row2.className = "row";

for (let i = 4; i < 8; i++) {
    const answerContainer = document.createElement("div");
    answerContainer.className = "col-md-3 text-center";

    const answerButton = document.createElement("img");
    answerButton.className = "btn btn-primary answer-button";
    answerButton.src = answerImages[i];
    answerButton.setAttribute("data-answer-index", i);

    answerButton.addEventListener("click", () => {
        checkAnswer(answerButton);
    });

    const answerText = document.createElement("p");
    answerText.className = "answer-text";
    answerText.textContent = "" + getAnswerName(i);;

    answerContainer.appendChild(answerButton);
    answerContainer.appendChild(answerText);

    row2.appendChild(answerContainer);
}

answerButtonsContainer.appendChild(row1);
answerButtonsContainer.appendChild(row2);

} else {
        const questionCard = document.getElementById("question-card");
        const resultsContainer = document.getElementById("results-container");
        questionCard.style.display = "none";
        resultsContainer.classList.remove("d-none");
        showResults();
    }
}






function checkAnswer(selectedButton) {
    const selectedAnswerIndex = parseInt(selectedButton.getAttribute("data-answer-index"));
    const currentQuestionData = questionData[currentQuestion];
    if (selectedAnswerIndex === currentQuestionData.correctAnswer) {
        selectedButton.classList.add("btn-success");
        correctAnswers[currentQuestion] = true;
        correctCount++;
    } else {
        selectedButton.classList.add("btn-danger");
    }

    currentQuestion++;
    correctAnswersSpan.textContent = correctCount;
    totalQuestionsSpan.textContent = currentQuestion;
    initializeGame();
}





function showResults() {
const resultsContainer = document.getElementById("results-container");
const resultGrid = resultsContainer.querySelector(".row");

for (let i = 0; i < totalQuestions; i++) {
const currentQuestionData = questionData[i];
const resultCard = document.createElement("div");
resultCard.className = "col-md-3";

const imageContainer = document.createElement("div");
imageContainer.style.border = correctAnswers[i] ? "2px solid green" : "2px solid red";

imageContainer.innerHTML = `
    <img src="${currentQuestionData.image}" class="img-fluid" alt="? ${i + 1}">`;

const answerStatus = document.createElement("p");
answerStatus.className = correctAnswers[i] ? "text-success" : "text-danger";
answerStatus.textContent = correctAnswers[i] ? "Oikea vastaus" : "Väärä vastaus";

if (!correctAnswers[i]) {
    const correctAnswerName = getAnswerName(currentQuestionData.correctAnswer);
    const correctAnswerLabel = document.createElement("p");
    correctAnswerLabel.className = "text-success";
    correctAnswerLabel.textContent = `Oikea vastaus: ${correctAnswerName}`;
    answerStatus.appendChild(correctAnswerLabel);
}

resultCard.appendChild(imageContainer);
resultCard.appendChild(answerStatus);

resultGrid.appendChild(resultCard);
}
showRestartButton(); 
}











function getAnswerName(answerIndex) {
const answerNames = [
"Biojate vihrea",
"Jateasema",
"Kartonkikerays",
"Kerayspaperi",
"Lasinkerays",
"Metallijate",
"Muovipakkaukset",
"Sekajate"
];
return answerNames[answerIndex];
}













function restartGame() {
const restartButton = document.getElementById("restart-button");
restartButton.style.display = "none"; 

currentQuestion = 0;
correctCount = 0;
correctAnswers.fill(false);
correctAnswersSpan.textContent = correctCount;
totalQuestionsSpan.textContent = currentQuestion;

const resultsContainer = document.getElementById("results-container");
resultsContainer.classList.add("d-none");

const resultGrid = resultsContainer.querySelector(".row");
resultGrid.innerHTML = '';

const questionCard = document.getElementById("question-card");
questionCard.style.display = "block";

initializeGame();
}






function showRestartButton() {
const restartButtonTop = document.getElementById("restart-button");
const restartButtonBottom = document.getElementById("restart-button-bottom");

restartButtonTop.style.display = "block";
restartButtonBottom.style.display = "block";
}





initializeGame();