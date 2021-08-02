function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
};

window.addEventListener('load', post);


// ページが読み込まれることをトリガーにして、
// 処理が実行されるように関数を定義
// console.logで、読み込まれた際、正常にイベント発火しているか確認

// 投稿したいメモの内容をサーバーサイドへ送信するために、
// フォームに入力した値を取得,下記
// const form = document.getElementById("form")

// FormDataオブジェクトを使って、フォームの値を取得、下記
// const formDate = new FormData(form)

// 非同期通信を行うためにXMLHttpRequestオブジェクトを生成

// open()は、リクエストを初期化するメソッド。
// リクエストの内容を指定するためのメソッドだと理解,下記
// XHR.open("POST", "/posts", true)

// サーバーからのレスポンス形式を指定、下記
// XHR.responseType = "json";

// send()メソッドとは、リクエストを送信するメソッド
// フォーム内容をサーバー側に送信、下記
// XHR.send(formData)

// preventDefault()は既定のイベントを無効化するためのメソッド。
// 既定のイベントとは、「投稿ボタンをクリックする」のようなものを指す
// eはイベントオブジェクト、イベント発生時の情報を持ったオブジェクト