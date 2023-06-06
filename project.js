////////// 課題3-2 ここからプログラムを書こう
let dd = [{tosi:"カイロ", id:"360630"},{tosi:"モスクワ", id:"524901"},{tosi:"ヨハネスブルク", id:"993800"},{tosi:"北京", id:"1816670"},{tosi:"東京", id:"1850147"}
,{tosi:"シンガポール", id:"1880252"},{tosi:"シドニー", id:"2147714"},{tosi:"ロンドン", id:"2643743"},{tosi:"パリ", id:"2968815"}
,{tosi:"リオデジャネイロ", id:"3451189"},{tosi:"ニューヨーク", id:"5128581"},{tosi:"ロサンゼルス", id:"5368361"}]
let b = document.querySelector('#print');
b.addEventListener('click', sendRequest);
function sendRequest(){
  // URL を設定
  let d =document.querySelector('input[name="toshi"]');
  let y =parseInt(d.value);
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+y+'.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }
  let f=document.querySelector('p#ansewer');
  f.textContent=data.name+'の最高気温です'+data.main.temp_max+'です。最低気温は'+data.main.temp_min+'です。'

  // data をコンソールに出力
  console.log(data);

  // data.x を出力
  console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
  let f=document.querySelector('p#ansewer');
  f.taxtContent='そんなIDありません'
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}