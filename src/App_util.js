export const filterObjectsWithKey = (arr, key) => {
  return arr.reduce((acc, obj) => {
    return acc.concat([{...obj[key], name: obj.name}])
  }, []);
};

export const formatAction = (method, resource) => {
  resource = resource.charAt(0).toUpperCase() + resource.slice(1);
  let action;

  switch (method) {
    case 'get':
      action = 'Get';
      break;
    case 'post':
      action = 'Create';
      break;
    case 'patch':
      action = 'Update';
      break;
    case 'delete':
      action = 'Delete'
      break;
  }

  return `${action} a ${resource}`;
}

export const getMethodClass = (method) => {
  let styleClass = 'api-component-method';

  switch (method) {
    case 'post':
      styleClass += ' http-post';
      break;
    case 'get':
      styleClass += ' http-get';
      break;
    case 'patch':
      styleClass += ' http-patch';
      break;
    case 'delete':
      styleClass += ' http-delete';
      break;
  }

  return styleClass;
}

export const hideElementClass = (boolean) => {
  if (boolean) return 'hide-element';
  return '';
}

export const fetchRequest = (data) => {
  const {method, resource, body} = data;

  return fetch(`https://jsonplaceholder.typicode.com/${resource}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({body})
  }).then(response => response.json());
}
