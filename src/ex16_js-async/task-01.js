const randomUrl = 'https://jsonplaceholder.typicode.com/users';
const postHeaders = new Headers({
  'Content-Type': 'application/json',
});
const postData = {
  name: 'Vladislav',
  age: 24,
  location: 'Ryazan',
};

const myFetch = (requestUrl, init = {
  method: 'GET',
  body: null,
  headers: null,
}) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open(init.method, requestUrl);
  xhr.responseType = 'json';

  [...postHeaders.entries()].forEach((header) => xhr.setRequestHeader(header[0], header[1]));

  xhr.onload = () => {
    if (xhr.status >= 400) {
      reject(xhr.response);
    }

    resolve(xhr.response);
  };

  xhr.onerror = () => {
    reject(xhr.response);
  };

  xhr.send(JSON.stringify(init.body));
});

// return data from get request

myFetch(randomUrl)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// return data which we send with post request (postData)

myFetch(randomUrl, {
  method: 'POST',
  body: postData,
  headers: postHeaders,
}).then((data) => console.log(data))
  .catch((err) => console.log(err));
