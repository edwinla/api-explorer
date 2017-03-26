import _ from 'underscore';

export const findIndexOfBodyObjWith = (name, body) => {
  const index = _.findIndex(body, inputObj => inputObj.name === name);
  return index;
};

export const updateBodyInputObj = ({name, value}, body) => {
  const inputIndex = findIndexOfBodyObjWith(name, body);
  const newBody = [...body];
  newBody[inputIndex].value = value;

  return newBody;
};
