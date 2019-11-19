/* eslint-disable no-console */
// const { CLIENT_ID } = process.env;
// const { CLIENT_SECRET } = process.env;

function searchUsersByQuery(query) {
  const baseUrl = 'https://api.github.com/search/users';
  const queryString = `?q=${query}`;

  const url = baseUrl + queryString;

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      const { items } = data;
      //   const items = data.items;
      return items.map(profile => profile.login);
    })
    .catch(e => console.error(e));

  // const response = await fetch(url);
  // const data = await response.json();
  // console.log(data);

  //   fetch(url)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => console.log(data));

  //   console.log('test');
}

function createLoginList(loginList) {
  const ul = document.createElement('ul');
  loginList.forEach(login => {
    const li = document.createElement('li');
    li.innerText = login;
    ul.appendChild(li);
  });
  document.body.append(ul);
}

searchUsersByQuery('ekater').then(loginList => {
  createLoginList(loginList);
});
