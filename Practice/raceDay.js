let raceNumber = Math.floor(Math.random() * 1000);

let early = true;
let age = 18;

if (age >= 18 && early === true) {
  raceNumber += 1000;
}

if (age > 18 && early === true) {
  console.log(
    `You start the race at 9:30 am. Your race number is ${raceNumber}.`
  );
} else if (age > 18 && early === false) {
  console.log(
    `You start the race at 11:00 am. Your race number is ${raceNumber}.`
  );
} else if (age < 18) {
  console.log(
    `You start the race at 12:30 pm. Your race number is ${raceNumber}.`
  );
} else if (age == 18) {
  console.log(`Please go to the registration desk.`);
}
