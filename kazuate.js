// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
// ボタンを押した後の処理をする関数 hantei() の定義
let b = document.querySelector('#print');
b.addEventListener('click', hantei);
function hantei() {
  let i = document.querySelector('input[name="y"]');
  let yoso = i.value;
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  kaisu=kaisu+1;
  let su =document.querySelector('span#kaisu');
  su.textContent=kaisu;
  let n =document.querySelector('span#answer');
  n.textContent=yoso;
  // 課題3-1: 正解判定する;
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  let t = document.querySelector('p#result');
if(kaisu<3){
    if(yoso===kotae){
        t.textContent="正解です.おめでとう!";
        kaisu=3;
    }if(yoso<kotae){
      t.textContent="まちがい.答えはもっと大きいですよ.";
    }if(yoso>kotae){
      t.textContent="まちがい.答えはもっと小さいですよ.";
    }
}else{
  t.textContent="答えは"+kotae+"でした.既にゲームは終わっています.";
}
}
