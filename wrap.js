function wrap (aString, maxColNum) {
  if (!aString.length) return "";

  let newString = '';

  let arr = aString.split(' ');
  let line = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length + line.length <= maxColNum) {
      line += arr[i] + " " ;
    } else {
      line += '\n';
      newString += line;
      line = arr[i] + " ";
      if (i === arr.length - 1) {
        newString += arr[i];
      }
    }
  }

  console.log('newstring is', newString);
  return newString;
}
module.exports = wrap;
