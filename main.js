const titleText = document.getElementById('title');
const questionText = document.getElementById('question');

let sum;
let correctAnswer;

const questions = [
    {question: '零は漢数字か。○か×か。', answer: 0},
    {question: '箱を英語で表したとき2文字目に入るのはどちら？○か×か。', answer: 1},
    {question: 'x^2+6x+5の二次方程式の解を英語で表したら何の文字が入る？。', answer: 1},
    {question: 'ローマ数字として存在しているのはどちら？。○か×か', answer: 0}
];

function writeQuestion() {
    titleText.textContent = `第${sum + sum}問`;
    questionText.textContent = questions[sum].question;
}

function onAnswer(ans) {
    if (ans === questions[sum].answer) {
        console.log('正解');
        correctAnswer++;
    } else {
        console.log('残念');
    }

    sum++;

    if (sum >= questions.length) {
        alert(`${questions.length}問中${correctAnswer}問正解です`);
        onStart();
    } else {
        writeQuestion();
    }
}

function onStart() {
    sum = 0;
    correctAnswer = 0;
    writeQuestion();
}

onStart();
