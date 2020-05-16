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
                    html: "Ова е тест за петтата лекција. <br/>Имаш 30 секунди за секое прашање!<br/>Кликни на копчето <b>'СТАРТ'</b> кога ќе бидеш подготвен."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "programmingcode",
                    title: "Во кој програмски јазик се напишани најголем број од видео игрите?",
                    choicesOrder: "random",
                    choices: [
                        "C или C++", "Java", "Python", "C#"
                    ],
                    correctAnswer: "C или C++"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "libertyordeath",
                    title: "Која е првата објавена компјутерска игра?",
                    choicesOrder: "random",
                    choices: [
                        "Spacewar!", "The Brown Box", "Super Mario Bros", "Skylanders: Spyro’s Adventure"
                    ],
                    correctAnswer: "Spacewar!"
                }
            ]
        }, {
            maxTimeToFinish: 15,
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacarta",
                    title: "Видео игра со најголема продажба",
                    choicesOrder: "random",
                    choices: [
                        "Call of Duty", "Warcraft", "The Sims", "POKÉMON"
                    ],
                    correctAnswer: "POKÉMON"
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