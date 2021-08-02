const buildHTML = (XHR) => {
    const item = XHR.response.post;
    const html = `
      <div class="post">
        <div class="post-date">
          投稿日時：${item.created_at}
      </div>
      <div class="post-content">
          ${item.content}
        </div>
      </div>`;
    return html;
  };


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
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
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

// onloadは、リクエストの送信が成功した際に呼び出されるプロパティ

// responseは、サーバーからのレスポンスに関する情報が格納されたプロパティ

// 新たに投稿されたメモのHTMLを生成する処理

// formText.value = ""; フォームの中身をリセット