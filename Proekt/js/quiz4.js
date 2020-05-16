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
                    html: "Ова е тест за четвртата лекција. <br/>Имаш 30 секунди за секое прашање!<br/>Кликни на копчето <b>'СТАРТ'</b> кога ќе бидеш подготвен."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "programmingcode",
                    title: "Лице кое пишува код и дава упатства на компјутер",
                    choicesOrder: "random",
                    choices: [
                        "Програма", "Команда", "Код", "Програмер"
                    ],
                    correctAnswer: "Програмер"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "libertyordeath",
                    title: "Што е дебагирање?",
                    choicesOrder: "random",
                    choices: [
                        "Бубачка", "Исклучување на компјутерот", "Релаксирање", "Наоѓање и поправање грешки во програма"
                    ],
                    correctAnswer: "Наоѓање и поправање грешки во програма"
                }
            ]
        }, {
            maxTimeToFinish: 15,
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacarta",
                    title: "Разбивање на проблемот на помали делови",
                    choicesOrder: "random",
                    choices: [
                        "Декомпцозиција", "Дебагирање", "Код", "Секвенца"
                    ],
                    correctAnswer: "Декомпцозиција"
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
            document.getElementById("x").src = "https://3.bp.blogspot.com/-OyEmWDoGcO8/XPXDK__E-BI/AAAAAAAMj_c/gzwVO4ASWX8uBYKQvstgWxX5SkBIbdU7gCLcBGAs/s1600/AS0005339_08.gif";
            //document.getElementById("y").src="https://i.gifer.com/2Qx7.gif";
        }
        document
            .querySelector('#surveyResult');

    });

$("#surveyElement").Survey({model: survey});