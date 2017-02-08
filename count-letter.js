/*
for each letter in the string argument {
  store the letter to an object as property
  if the letter repeats {
    do not add letter to object
    add count
  }
}
print all letters and their counts
*/

var string = 'lighthouse in the house';

function countLetter(str) {
  str = str.split(' ').join('');
  var storedLetters = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i]
    if (storedLetters.hasOwnProperty(char)) {
      storedLetters[char] += 1;
    } else {
      storedLetters[char] = 1;
    }
  }
  console.log(storedLetters);
}

countLetter(string);


