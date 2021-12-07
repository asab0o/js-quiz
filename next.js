const imageList = [
  {
    question: 'くーちゃんはどれ？',
    answers: [
      //画像の問題を作りたい
    ] ,
    correct: ,
  },
  {
    question: 'びはどれ？',
    answers: [
      //画像の問題を作りたい
    ] ,
    correct: ,
  }
];


//問題文の表示をする
// console.log(document.getElementById('js-question'));  
document.getElementById('js-question').textContent = '練習中';

//選択肢の表示
$button = document.getElementsByTagName('button');
// $button[1].outerText = 'テスト';
$button[1].textContent = 'テスト';