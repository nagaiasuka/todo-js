import "./styles.css";

const onClickAdd = () => {
  // idの指定取得して変数に格納
  const inputText = document.getElementById("add-text").value;
  //取り出した後中身を空にする
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
  // console.log(div);
};

//未完了リストから指定の要素を削除関数
const deleteFromIncompleteList = (target) => {
  //押れた削除ボタンの親タグ(div)を未完了リストから削除

  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //divを生成
  const div = document.createElement("div");
  //class名を指定
  div.className = "list-row";
  // console.log(div);

  //liタグ生成
  const li = document.createElement("li");
  //liタグの中身に要素を格納
  li.innerText = text;
  // console.log(li);

  //button(完了)生成
  const completButton = document.createElement("button");
  completButton.innerText = "完了";
  completButton.addEventListener("click", () => {
    // alert("完了");
    //押れた完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completButton.parentNode);

    //完了リストに追加
    const addTarget = completButton.parentNode;

    //liタグの中身取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liの生成
    const li = document.createElement("li");
    li.innerText = text;

    //戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ（div）を完了リストから削除
      const deleteTaget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTaget);

      //textの取得
      const text = backButton.parentNode.firstChild.innerText;

      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(div);
  });
  // console.log(completButton);

  //button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押れた削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  // console.log(deleteButton);

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completButton);
  div.appendChild(deleteButton);

  //ul（未完了）のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// idの指定とイベントの実行
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
