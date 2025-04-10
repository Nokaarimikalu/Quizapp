let questionsHtml = [
    {
        question: "Wer hat HTML erfunden?",
        answer_1: "Robbie Williams",
        answer_2: "Lady Gaga",
        answer_3: "Tim Berners-Lee",
        answer_4: "Justin Bieber",
        right_answer: 3,
    },
    {
        question: "Was ist das korrekte HTML-Element für die größte Überschrift?",
        answer_1: "&lt;h6&gt;",
        answer_2: "&lt;heading&gt;",
        answer_3: "&lt;h1&gt;",
        answer_4: "&lt;head&gt;",
        right_answer: 3,
    },
    {
        question: "Welches Attribut wird verwendet, um einem Bild eine alternative Beschreibung zu geben?",
        answer_1: "src",
        answer_2: "alt",
        answer_3: "title",
        answer_4: "description",
        right_answer: 2,
    },
    {
        question: "Wie fügt man einen Link in HTML ein?",
        answer_1: "&lt;link href='url'&gt;Text&lt;/link&gt;",
        answer_2: "&lt;a url='url'&gt;Text&lt;/a&gt;",
        answer_3: "&lt;a href='url'&gt;Text&lt;/a&gt;",
        answer_4: "&lt;href='url'&gt;Text&lt;/href&gt;",
        right_answer: 3,
    },
    {
        question: "Welches HTML-Element wird für Absätze verwendet?",
        answer_1: "&lt;p&gt;",
        answer_2: "&lt;text&gt;",
        answer_3: "&lt;span&gt;",
        answer_4: "&lt;div&gt;",
        right_answer: 1,
    },
    {
        question: "Was macht das &lt;br&gt;-Element in HTML?",
        answer_1: "Fügt einen Link ein",
        answer_2: "Fügt einen Seitenumbruch ein",
        answer_3: "Fügt ein Bild ein",
        answer_4: "Fügt einen Zeilenumbruch ein",
        right_answer: 4,
    },
    {
        question: "Wie bindet man eine Website in eine Website ein?",
        answer_1: "&lt;frame&gt;, &lt;frame&gt;, and &lt;frameset&gt;",
        answer_2: "&lt;iframe&gt;",
        answer_3: "&lt;frame&gt;",
        answer_4: "&lt;frameset&gt;",
        right_answer: 2,
    },
];

currentQuestion = 0;

function init() {
    headerArea();
    startingArea();
}

function headerArea() {
    const headerArea = document.getElementById(`header-container`);
    headerArea.innerHTML = headerTemplate();
}
function startingArea() {
    const startingPage = document.getElementById(`main-container`);
    startingPage.innerHTML = startingTemplateHtml();
}

function startingAreaCss() {
    const startingPageCss = document.getElementById(`main-container`);
    startingPageCss.innerHTML = startingTemplateCss();
}
function startingAreaJavaScript() {
    const startingPageJavaScript = document.getElementById(`main-container`);
    startingPageJavaScript.innerHTML = startingTemplateJavaScript();
}
function startingAreaJava() {
    const startingPageJava = document.getElementById(`main-container`);
    startingPageJava.innerHTML = startingTemplateJava();
}

function addHtml() {
    const htmlElement = document.getElementById(`main-container`);
    htmlElement.innerHTML = ``;
    htmlElement.innerHTML = QuestionTemplate();
    showQuestionHtml();
}
// function addCss() {
//     const htmlElement = document.getElementById(`main-container`);
//     htmlElement.innerHTML = ``;
//     htmlElement.innerHTML = QuestionTemplate();
//     //showQuestionCss
// }
// function addJavaScript() {
//     const htmlElement = document.getElementById(`main-container`);
//     htmlElement.innerHTML = ``;
//     htmlElement.innerHTML = QuestionTemplate();
//     //showQuestionJavaScript();
// }
// function addJava() {
//     const htmlElement = document.getElementById(`main-container`);
//     htmlElement.innerHTML = ``;
//     htmlElement.innerHTML = QuestionTemplate();
//     //showQuestionJava();
// }

function showQuestionHtml() {
    if (currentQuestion >= questionsHtml.length) {
        document.getElementById(`next-button`).disabled = false;
    } else {
        let question = questionsHtml[currentQuestion];
        document.getElementById(`howManyQuestions`).innerHTML = currentQuestion + 1 + " von " + questionsHtml.length;
        document.getElementById(`question-text`).innerHTML = question[`question`];
        document.getElementById(`answer_1`).innerHTML = question[`answer_1`];
        document.getElementById(`answer_2`).innerHTML = question[`answer_2`];
        document.getElementById(`answer_3`).innerHTML = question[`answer_3`];
        document.getElementById(`answer_4`).innerHTML = question[`answer_4`];
    }
}
function answer(selection) {
    let question = questionsHtml[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question[`right_answer`]}`;

    if (selectedQuestionNumber == question["right_answer"]) {
        document.getElementById(selection).parentNode.classList.add(`green`);
    } else {
        document.getElementById(selection).parentNode.classList.add(`red`);
        document.getElementById(idOfRightAnswer).parentNode.classList.add(`green`);
    }
    document.getElementById(`next-button`).disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    showQuestionHtml();
    resetAnswerButtons();
    document.getElementById(`next-button`).disabled = true;
}
function resetAnswerButtons() {
    document.getElementById(`answer_1`).parentNode.classList.remove(`red`);
    document.getElementById(`answer_1`).parentNode.classList.remove(`green`);
    document.getElementById(`answer_2`).parentNode.classList.remove(`red`);
    document.getElementById(`answer_2`).parentNode.classList.remove(`green`);
    document.getElementById(`answer_3`).parentNode.classList.remove(`red`);
    document.getElementById(`answer_3`).parentNode.classList.remove(`green`);
    document.getElementById(`answer_4`).parentNode.classList.remove(`red`);
    document.getElementById(`answer_4`).parentNode.classList.remove(`green`);
}
