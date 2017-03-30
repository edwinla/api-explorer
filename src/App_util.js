const API_URL = 'https://api-explorer-server.herokuapp.com/';

export const hideElementClass = (boolean) => {
  if (boolean) return 'Hide-element';
  return '';
}

export const filterObjectsWithKey = (arr, key) => {
  return arr.reduce((acc, obj) => {
    return acc.concat([{...obj[key], name: obj.parameter}]);
  }, []);
};

export const fetchRequest = (data) => {
  const {method, resource, body} = data;
  const myRequest = {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let url = `${API_URL}${resource}`;

  // Only 'patch' and 'post' methods require body
  if (method === 'POST' || method === 'PATCH') {
    myRequest.body = JSON.stringify({body});
  }

  // 'Database entry id' is required for all methods other than post and retrieving all entries of a 'table'
  if ((method !== 'POST') && body.length > 0) {
    url += `/${body[0].value}`
  }

  return (
    fetch(url, myRequest)
      .then(response => response.json())
  );
}
