const charArray = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "ü",
  "õ",
  "ö",
  "ä",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  "(",
  ")",
  "?",
  "[",
  "]",
  ";",
  ":",
  "#",
  "$",
  "%",
  "&",
  "-",
  ".",
];

function genPass(passLength) {
  let password = "";

  for (let i = 0; i <= passLength; i++) {
    let randomChar = Math.floor(Math.random() * charArray.length);
    const fullRandom = Math.floor(Math.random() * charArray.length - Math.random() * charArray.length);

      let character = charArray.at(randomChar);
      
      let caps = Math.floor(Math.random()*100)
          
      if (caps <= 50) {
             character = character.toUpperCase()
         }

    (character == ".") | "-"
      ? (character = charArray.at(fullRandom))
      : (password += character);
    }
    return console.log(password)
}

genPass(16)
