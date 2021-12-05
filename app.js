const quizList =[
  {
    question: '飼っているペットはどれ？',
    answers: [
      '犬', 
      '猫',
      'はむ',
      '金魚'
    ],
    correct: '猫'
  }, {
    question: 'ペットの名前は？',
    answers: [
      'クッキー',
      'くー',
      'く〜',
      'ぶー。'
    ],
    correct: 'ぶー。'
  }, {
    question: '好きなことは？',
    answers: [
      'ご飯',
      '毛づくろい',
      '昼寝',
      '猫じゃらし'
    ],
    correct: '毛づくろい'
  }
];

const quizLength = quizList.length;
let quizIndex = 0;

//buttonのobjectをとる
const $button = document.getElementsByTagName('button');
// console.log($button);
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義する
const setQuiz = () => {
  // console.log(quizIndex);
  document.getElementById('js-question').textContent = quizList[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quizList[quizIndex].answers[buttonIndex];
    buttonIndex++;  
  }
}
setQuiz();

//正誤判定
//eはeventのobject
const clickHandler = (e) => {
  // console.log(e);
  if(quizList[quizIndex].correct === e.target.textContent ) {
    window.alert('★正解★');
  } else {
    window.alert('不正解。');
  }

  //次の問題にいく処理
  quizIndex++;
  if(quizIndex < quizLength) {
    //問題がまだある
    setQuiz();
  } else {
    window.alert('終了！');
  }
};

for (let j = 0; j < buttonLength; j++) {
  $button[j].addEventListener('click', (e) => {
   clickHandler(e);
  })
};
