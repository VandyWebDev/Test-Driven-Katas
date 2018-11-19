function wrap (aString, maxColNum) {
  if (!aString.length) return "";

  let newString = '';

  let arr = aString.split(' ');
  for (let i = 0; i < arr.length; i++) {
    let line = '';
    while (line.length < maxColNum) {
      if (arr[i].length + line.length <= maxColNum) {
        line += arr[i] + " ";
      }
      else break;
    }
    line += '\n';
    newString += line;
  }
  
  console.log('newstring is', newString);
  return newString;
}
module.exports = wrap;
