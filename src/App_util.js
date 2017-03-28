export const filterObjectsWithKey = (arr, key) => {
  return arr.reduce((acc, obj) => {
    return acc.concat([{...obj[key], name: obj.name}])
  }, []);
};
