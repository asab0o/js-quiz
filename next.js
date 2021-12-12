const path = 'file:///Users/asaka/Documents/Dev/js-quiz';

const imageList = [
  path + '/image/choco.jpg', 
  path + '/image/cake.jpg',
  path + '/image/chrithmas.jpg',
  path + '/image/boo.jpg'
];

const quizList = [
  {
    question: 'びはどれ？',
    answers: [
      //画像の問題を作りたい
      imageList[0],
      imageList[1]
    ] ,
    correct: imageList[0],
  },  
  {
    question: 'くーちゃんはどれ？',
    answers: [
      //画像の問題を作りたい
      imageList[2],
      imageList[3]
    ] ,
    correct: imageList[3],
  },
];



//問題文の表示をする
const quizLength = quizList.length;
let quizIndex = 0;

//選択肢の表示
const $image = document.getElementsByTagName('img');
//選択肢の数（next.html）
const imageLength = $image.length;
// console.log(imageLength);
// $image[1].src = imageList[0];

//クイズの問題文、選択肢を定義
const setQuiz = () => {
  document.getElementById('js-question').textContent = quizList[quizIndex].question;
  for (let imageIndex = 0; imageIndex < imageLength; imageIndex++) {
    $image[imageIndex].src = quizList[quizIndex].answers[imageIndex];
  }
};
setQuiz();

//イベントの確認
// $image[0].addEventListener('click', (e) => {
//   console.log(e.target);
// });

const clickHandler = (e) => {
  if(e.target.src === quizList[quizIndex].correct) {
    window.alert('正解！');
  } else {
    window.alert('不正解！！');
  }
  //次の問題
  console.log(e.target);
  quizIndex++;
  if (quizIndex < quizLength) {
    setQuiz();
  } else {
    window.alert('★☆★FINISH☆★☆');
  }
};

for (let j = 0; j < imageLength; j++) {
  $image[j].addEventListener('click', (e) => {
   clickHandler(e);
  })
};
