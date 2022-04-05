'use strict';

const p = console.log;
const host = 'http://18.179.200.206:20780';

const commonPost = (url, data = {}) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      p('fetchでエラーが発生しました。');
      p(error);
    });
};

registerSubmit.onclick = () => {
  const url = host + '/register';
  const data = {
    name: 'b',
    bio: 'b',
    password: 'b',
  };
  commonPost(url, data).then(p);
};
