function headerTemplate() {
    return `
                <header>
                    <img class="absolute-image" src="./Quizapp/logo.png" />
                    <div class="navbar">
                        <div class="navbar-container">
                            <span class="navbar-children" id="highlight1" onclick="startingArea()">HTML</span>
                        </div>
                        <div class="navbar-container">
                            <span class="navbar-children" id="highlight2" onclick="startingAreaCss()">CSS</span>
                        </div>
                        <div class="navbar-container">
                            <span class="navbar-children" id="highlight3" onclick="startingAreaJavaScript()">JavaScript</span>
                        </div>
                        <div class="navbar-container">
                            <span class="navbar-children" id="highlight4" onclick="startingAreaJava()">Java</span>
                        </div>
                    </div>
                </header>
            `;
}
function startingTemplateHtml() {
    return `    <div class="container2">
                    <div class="areyouready">
                        <h1>
                            Welcome to <br />
                            The Awesome HTML Quiz
                        </h1>
                        <span>Ready for the Challange?</span>
                    </div>
                    <footer>
                        <button onclick="addHtml()">START NOW </button>
                    </footer>
                </div>`;
}
function startingTemplateCss() {
    return `    <div class="container2">
                    <div class="areyouready">
                        <h1>
                            Welcome to <br />
                            The Awesome CSS Quiz
                        </h1>
                        <span>Ready for the Challange?</span>
                    </div>
                    <footer>
                        <button onclick="addCss()">START NOW </button>
                    </footer>
                </div>`;
}
function startingTemplateJavaScript() {
    return `    <div class="container2">
                    <div class="areyouready">
                        <h1>
                            Welcome to <br />
                            The Awesome JavaScript Quiz
                        </h1>
                        <span>Ready for the Challange?</span>
                    </div>
                    <footer>
                        <button onclick="addJavaScript()">START NOW </button>
                    </footer>
                </div>`;
}
function startingTemplateJava() {
    return `    <div class="container2">
                    <div class="areyouready">
                        <h1>
                            Welcome to <br />
                            The Awesome Java Quiz
                        </h1>
                        <span>Ready for the Challange?</span>
                    </div>
                    <footer>
                        <button onclick="addJava()">START NOW </button>
                    </footer>
                </div>`;
}
function QuestionTemplate() {
    return `    
                    <span class="quiz-question" id="question-text">Frage</span>
                    <div class="quiz-answer-container" onclick="answer('answer_1')">
                        <span class="abcd">A</span>    <span class="quiz-answer" id="answer_1"></span>
                    </div>
                    <div class="quiz-answer-container" onclick="answer('answer_2')">
                        <span class="abcd">B</span>    <span class="quiz-answer" id="answer_2"></span>
                    </div>
                    <div class="quiz-answer-container" onclick="answer('answer_3')">
                        <span class="abcd">C</span>    <span class="quiz-answer" id="answer_3"></span>
                    </div>
                    <div class="quiz-answer-container" onclick="answer('answer_4')">
                        <span class="abcd">D</span>    <span class="quiz-answer" id="answer_4"></span>
                    </div>
                    <footer>
                        <span id="howManyQuestions"></span>
                        <button onclick="nextQuestion()" id="next-button" disabled>Next Question</button>
                    </footer>
                `;
}
function completedQuiz() {
    return `<div class="completed-quiz">
                        <img src="./Quizapp/brain result.png" />
                        <span
                            >COMPLETE <br />
                            ... QUIZ
                        </span>
                        <div>
                            <span class="yellow">YOUR SCORE</span>
                            <span>10/10</span>
                        </div>
                        <button class="share">SHARE</button>
                        <button class="replay">REPLAY</button>
                    </div>`;
}
