let gu_num;//グーの格納用の変数
let ch_num;
let pa_num;

//ゲームスタート時にカードが配られる
function getCards(){
  
}

//じゃんけんすると使った手のカードがひとつ減る
function lostACard(my_hand){
  if(my_hand === "gu"){
   gu_num = gu_num - 1;
  }
  if(my_hand === "ch"){
   ch_num = ch_num - 1;
  }
}

//※ 負けるとカードがもらえる
