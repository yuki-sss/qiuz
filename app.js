const quiz = [
  {
    question: "鳥は何色？",
    answers: ["黒", "赤", "白", "緑"],
    correct: "緑",
  },
  {
    question: "soraは何色？",
    answers: ["黒", "赤", "白", "緑"],
    correct: "赤",
  },
  {
    question: "髪は何色？",
    answers: ["黒", "赤", "白", "緑"],
    correct: "黒",
  },
  {
    question: "米は何色？",
    answers: ["黒", "赤", "白", "緑"],
    correct: "白",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文。選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }
  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert(
      "終了！あなたの正解数は" + score + "/" + quizLength + "です！"
    );
  }
};

let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].textContent = quiz[quizIndex].answers[handleIndex];
  $button[handleIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handleIndex++;
}
