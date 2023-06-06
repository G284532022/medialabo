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
  let f1=document.querySelector('div#ansewer1');
  f1.textContent='都市名:'+data.name;
  let f2=document.querySelector('div#ansewer2');
  f2.textContent='最高気温は'+data.main.temp_max+'です。';
  let f3=document.querySelector('div#ansewer3');
  f3.textContent='最低気温は'+data.main.temp_min+'です。';
  let f4=document.querySelector('div#ansewer4');
  f4.textContent='天気は'+data.weather[0].description+'です。';
  let f5=document.querySelector('div#ansewer5');
  f5.textContent='緯度'+data.coord.lon+'です。';
  let f6=document.querySelector('div#ansewer6');
  f6.textContent='経度'+data.coord.lat+'です。';
  let f7=document.querySelector('div#ansewer7');
  f7.textContent='風速'+data.wind.speed+'です。';
  let f8=document.querySelector('div#ansewer8');
  f8.textContent='風向'+data.wind.deg+'です。';
  let f9=document.querySelector('div#ansewer9');
  f9.textContent='湿度'+data.main.humidity+'です。';
}
function showError(err) {
  console.log(err);
}
function finish() {
  console.log('Ajax 通信が終わりました');
}