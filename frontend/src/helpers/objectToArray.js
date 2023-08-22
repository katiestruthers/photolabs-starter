const objectToArray = function(object) {
  const array = Object.keys(object).map((property) => {
    return object[property];
  })

  return array;
}

export default objectToArray;