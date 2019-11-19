/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const promisOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 2000);
})
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });

fetch('url', {
  headers: {
    Accept: 'application/json',
  },
});
