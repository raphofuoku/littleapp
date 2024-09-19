const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  export const fetchAPI = function (date) {
    // Ensure `date` is a Date object, convert if necessary
    if (typeof date === 'string') {
      date = new Date(date); // Convert date string to Date object
    }

    // Now `date` is guaranteed to be a Date object, safe to use getDate()
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() < 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  };

  export const submitAPI = function (formData) {
    return true;
  };
