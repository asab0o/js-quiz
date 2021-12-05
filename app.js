const question = '飼っているペットはどれ。';
const answers = [
  '猫',
  '犬',
  'はむ',
  'かめ'
];
const correct = '猫';

//定数の文字列をHTMLに反映させる
const $button = document.getElementsByTagName('button');

// クイズの問題文、選択肢を定義する
let buttonLength = $button.length;
const setQuiz = () => {
  document.getElementById('js-question').textContent = question;
  for (let i = 0; i < buttonLength; i++) {
    $button[i].textContent = answers[i];
  }
}
setQuiz();

//正誤判定
const clickHandler = (e) => {
  if(correct === e.target.textContent ) {
    window.alert('★正解★');
  } else {
    window.alert('不正解。');
  }
};

for (let j = 0; j < buttonLength; j++) {
  $button[j].addEventListener('click', (e) => {
   clickHandler(e);
  })
};
