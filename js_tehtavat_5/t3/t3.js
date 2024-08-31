'use strict';

const fetchData = async function (method) {
  const url = 'https://reqres.in/api/unknown/23';
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (method === 'POST' || method === 'PUT') {
    options.body = JSON.stringify({key: 'value'});
  }

    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error('ei toimi');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(`Error ${method}:`, error.message);
    }
};

fetchData('GET');
fetchData('POST');
fetchData('PUT');
fetchData('DELETE');
