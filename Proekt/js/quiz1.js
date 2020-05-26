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
                    html: "Ова е тест за првата лекција. <br/>Имаш 30 секунди за секое прашање!<br/>Кликни на копчето <b>'СТАРТ'</b> кога ќе бидеш подготвен."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "programmingcode",
                    title: "Што е програмски код?",
                    choices: [
                        "Множество инструкции за подготовка на торта", "Формален јазик за нотација на програми", "Множество инструкции кои формираат компјутерска програма", "Зелените линии од филмот Matrix"
                    ],
                    correctAnswer: "Множество инструкции кои формираат компјутерска програма"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "libertyordeath",
                    title: "Кое од наведените НЕ е фаза за креирање компјутеркса програма?'",
                    choicesOrder: "random",
                    choices: [
                        "Kодирање на алгоритамот", "Aнализа на проблемската ситуација", "Извршување наредби", "Корекција на грешки"
                    ],
                    correctAnswer: "Извршување наредби"
                }
            ]
        }, {
            maxTimeToFinish: 15,
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacarta",
                    title: "Што се добива со кодирање на алгоритам кој може да се изврши на машина?",
                    choicesOrder: "random",
                    choices: [
                        "Програма", "Код", "Секвенца", "Алгоритам"
                    ],
                    correctAnswer: "Програма"
                }
            ]
        }
    ],
    completedHtml: "<h4>Одговоривте точно на <b>{correctedAnswers}</b> прашања од вкупно <b>{questionCount}</b>.</h4>"
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
