window.addEventListener("keydown", play);
window.addEventListener("keyup", stop);

function play(event) {
  //給定一變數來取得按下按鍵的keycode
  let keyboard = event.keyCode;
  //判斷式：當取得的keycode為符合的9個按鍵才會往下執行
  if (
    keyboard === 65 ||
    keyboard === 83 ||
    keyboard === 68 ||
    keyboard === 70 ||
    keyboard === 71 ||
    keyboard === 72 ||
    keyboard === 74 ||
    keyboard === 75 ||
    keyboard === 76
  ) {
    //取的對應的div元素將其改為playing這個class
    document.getElementById("key" + keyboard).setAttribute("class", "playing");
    //取的對應的audio元素並播放
    document.getElementById("audio" + keyboard).play();
  }
}

function stop(event) {
  //給定一變數來取得按下按鍵的keycode
  var keyboard = event.keyCode;
  //判斷式：當取得的keycode為符合的9個按鍵才會往下執行
  if (
    keyboard === 65 ||
    keyboard === 83 ||
    keyboard === 68 ||
    keyboard === 70 ||
    keyboard === 71 ||
    keyboard === 72 ||
    keyboard === 74 ||
    keyboard === 75 ||
    keyboard === 76
  ) {
    //取的對應的div元素將其改回key這個class
    document.getElementById("key" + keyboard).setAttribute("class", "key");
    //取的對應的audio元素並重新讀取
    document.getElementById("audio" + keyboard).load();
  }
}
