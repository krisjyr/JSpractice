const countSheep = function (num) {
  if (num != 0) {
    let count = 1;
    let string = [];

    while (true) {
      const repeat = `${count} sheep...`;
      string.push(repeat);
      if (num == count) {
        return console.log(string.join(""));
      }
      count++;
    }
  }
  return "";
};

countSheep(176);
