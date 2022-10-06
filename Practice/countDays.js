function countDaysFromDate(start, end) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(start);
  const secondDate = new Date(end);
  const diffDays = Math.round(
    Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay)
  );
  return console.log(diffDays);
}

countDaysFromDate("1945-09-23", "2008-05-01"); // 1
