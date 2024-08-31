'use strict';

const data = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    job: 'Software Developer'
  })
};

async function createUser() {
  const response = await fetch('https://reqres.in/api/users', data);
  const responseData = await response.json();
  console.log(responseData)
}
createUser();