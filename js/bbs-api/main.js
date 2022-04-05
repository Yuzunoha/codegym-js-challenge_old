'use strict';

const p = console.log;
const host = 'http://18.179.200.206:20780/';

registerSubmit.onclick = () => {
  fetch(host + '/register');
  alert('押された');
};
//以下にコードを書きましょう。
/*
        <td><input type="text" id="registerName" placeholder="name" /></td>
        <td><input type="text" id="registerBio" placeholder="bio" /></td>
        <td><input type="text" id="registerPassword" placeholder="password" /></td>
        <td><button id="registerSubmit">送信</button></td>
*/
async function postData(url = '', data = {}) {
  // 既定のオプションには * が付いています
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // 本文のデータ型は "Content-Type" ヘッダーと一致させる必要があります
  });
  return response.json(); // JSON のレスポンスをネイティブの JavaScript オブジェクトに解釈
}

postData('https://example.com/answer', { answer: 42 }).then((data) => {
  console.log(data); // `data.json()` の呼び出しで解釈された JSON データ
});
