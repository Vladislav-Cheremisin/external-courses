const arrSlice = (arr, begin = 0, end = arr.length) => {
  const result = [];
  let startPlace = begin;
  let endPlace = end;

  if (startPlace < 0) {
    startPlace = arr.length - Math.abs(startPlace);

    if (startPlace < 0) {
      startPlace = 0;
    }
  }

  if (endPlace < 0) {
    endPlace = arr.length - Math.abs(endPlace);

    if (endPlace < 0) {
      endPlace = 0;
    }
  } else if (endPlace > arr.length) {
    endPlace = arr.length;
  }

  for (let i = startPlace; i < endPlace; i += 1) {
    result.push(arr[i]);
  }

  return result;
};

module.exports = arrSlice;
