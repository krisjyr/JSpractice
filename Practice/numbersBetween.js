function between(a, b) {
  let count = a;
  let string = [];
  while (count < b) {
    string.push(count);
    count++;
  }
  if (count === b) {
    string.push(b);
    return string;
  }
}

between(1, 4);
