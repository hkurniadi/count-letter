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
var spaceRemovedString = string.split(' ').join('');
//console.log(spaceRemovedString);

function countLetter(string) {
  var storedLetters = {};
  for (var i = 0; i < spaceRemovedString.length; i++) {
    //console.log(spaceRemovedString[i]);
    if (storedLetters.hasOwnProperty(spaceRemovedString[i])) {
      //console.log(storedLetters.hasOwnProperty(spaceRemovedString[i]));
      storedLetters[spaceRemovedString[i]] += 1;
    } else {
      storedLetters[spaceRemovedString[i]] = 1;
    }
  }
  console.log(storedLetters);
}

countLetter(spaceRemovedString);


