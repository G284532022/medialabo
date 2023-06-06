////////// 課題3-2 ここからプログラムを書こう
let dk = [{tosi:"カイロ", id:"360630"},{tosi:"モスクワ", id:"524901"},{tosi:"ヨハネスブルク", id:"993800"},{tosi:"北京", id:"1816670"},{tosi:"東京", id:"1850147"}
,{tosi:"シンガポール", id:"1880252"},{tosi:"シドニー", id:"2147714"},{tosi:"ロンドン", id:"2643743"},{tosi:"パリ", id:"2968815"}
,{tosi:"リオデジャネイロ", id:"3451189"},{tosi:"ニューヨーク", id:"5128581"},{tosi:"ロサンゼルス", id:"5368361"}]
let r0,r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11;
r0=document.getElementById("a");
r1=document.getElementById("b");
r2=document.getElementById("c");
r3=document.getElementById("d");
r4=document.getElementById("e");
r5=document.getElementById("f");
r6=document.getElementById("g");
r7=document.getElementById("h");
r8=document.getElementById("i");
r9=document.getElementById("j");
r10=document.getElementById("k");
r11=document.getElementById("l");
let b = document.querySelector('#print');
b.addEventListener('click', erabareta);
function erabareta(){
  let tumo =[r0,r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11];
  let gg=0;
  for (let jj of tumo) {
    if (jj.checked) {   
      sendRequest(dk[gg].id);
    }
    gg++;
  }
}
function sendRequest(id){
  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }
  let f=document.querySelector('div#ansewer');
  f.textContent=data.name+'の最高気温は'+data.main.temp_max+'です。最低気温は'+data.main.temp_min+'です。';
}
function showError(err) {
  console.log(err);
}
function finish() {
  console.log('Ajax 通信が終わりました');
}