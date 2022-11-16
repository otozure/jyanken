//保存
let my_score;

//初期状態
function resetScore(){
  my_score = 0;
}

//変更
function addScore(){
  my_score = my_score + 1;
}

function addScore(my_hand){
  if(my_hand === "✌"){
    my_score = my_score + 2;
  }
  if(my_hand === "✋"){
    my_score = my_score + 5;
  }
}

function lostScore(){
  my_score = my_score - 1;
}

//画面に表示する
function showScore(){
}
  



//計算
//表示
