import _ from 'underscore';

const API_URL = 'https://api-explorer-server.herokuapp.com/';

export const hideElementClass = (boolean) => {
  if (boolean) return 'Hide-element';
  return '';
}

export const formatPhoneNumber = (phoneStr) => {
  let formatted = "";
  for (let i = 0; i < phoneStr.length; i++) {
    const char = phoneStr[i];
    const fLen = formatted.length;

    if (char === ' ') continue;

    if (i !== fLen - 1 && (fLen === 3 || fLen === 7)) formatted += " ";
    formatted += phoneStr[i];
  }
  if (formatted.length > 12) return formatted.slice(0, 12);

  return formatted;
};

// Return an array of objects that matches the key while also ignoring optional values that are blank
export const filterObjectsWithKey = (arr, key) => {
  return arr.reduce((acc, obj) => {
    const keyed = obj[key];
    if (keyed.value === '') return acc;

    return acc.concat([{...obj[key]}]);
  }, []);
};

// merge original entry with new entry, excluding the 'id' parameter
const mergeForPatchRequest = (responseData, newData) => {
  const merged = _.uniq(
    _.union(newData, responseData),
    false,
    _.property('name')
  );

  return _.filter(merged, (parameter) => {return parameter.name !== 'id'});
}

const handleErrors = (response) => {
    if (!response.ok) throw Error(response.statusText);
    return response;
};

export const fetchRequest = (data) => {
  let {method, resource, body} = data;
  const myRequest = {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  let url = `${API_URL}${resource}`;

  if ((method !== 'POST') && body.length > 0) url += `/${body[0].value}`;

  if (method === 'PATCH') {
    myRequest.method = 'GET'
    return (
      fetch(url, myRequest)
        .then(response => response.json())
        .then((json) => {
          body = mergeForPatchRequest(json.body, body);
          myRequest.method = 'PATCH';
          const patchRequest = {
            ...myRequest,
            body: JSON.stringify({body})
          };

          return fetch(url, patchRequest).then(response => response.json());
        })
    );
  }

  if (method === 'POST') myRequest.body = JSON.stringify({body});

  return fetch(url, myRequest).then(handleErrors);
}
