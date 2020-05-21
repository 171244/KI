// ZA QUIZ

Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    title: "",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 30,
    maxTimeToFinish: 90,
    firstPageIsStarted: true,
    startSurveyText: "СТАРТ",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "Ова е тест за втората лекција. <br/>Имаш 30 секунди за секое прашање!<br/>Кликни на копчето <b>'СТАРТ'</b> кога ќе бидеш подготвен."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "programmingcode",
                    title: "Која е акцијата за да се прави нешто одново и одново?",
                    choicesOrder: "random",
                    choices: [
                        "Loop", "Program", "Persistence", "Code"
                    ],
                    correctAnswer: "Loop"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "libertyordeath",
                    title: "Колку битови има во еден бајт?'",
                    choicesOrder: "random",
                    choices: [
                        "1", "4", "8", "16"
                    ],
                    correctAnswer: "8"
                }
            ]
        }, {
            maxTimeToFinish: 15,
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacarta",
                    title: "Што е алгоритам?",
                    choicesOrder: "random",
                    choices: [
                        "Музичка нота", "Грепка во програма", "Математичка равенка", "Секвенца од чекори за да се реши проблем"
                    ],
                    correctAnswer: "Секвенца од чекори за да се реши проблем"
                }
            ]
        }
    ],
    completedHtml: "<h4>Одговоривте точно на <b>{correctedAnswers}</b> прашања од вкупно <b>{questionCount}</b>.</h4>",
};

window.survey = new Survey.Model(json);


survey
    .onComplete
    .add(function (sender, result) {
        if(sender.getCorrectedAnswerCount() === 3) {
            document.getElementById("x").src = "https://i.giphy.com/media/efa5qyLvkUwCHZcYlQ/giphy.webp";
            //document.getElementById("y").src="https://i.gifer.com/2Qx7.gif";
        }
        document
            .querySelector('#surveyResult');

    });

$("#surveyElement").Survey({model: survey});