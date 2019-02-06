// Input: a string
// Output: an object that reports instances of each letter
function countLetters(inputString) {
  var report = {}

  let inputArray = inputString.replace(/\s+/g, '').split('')

  // iterate array
  for(let i = 0; i < inputArray.length; i++) {
    let currentCharacter = inputArray[i]
    
    // if the character is on the report
    if (isKeyOnReport(currentCharacter, report)) {
      report[currentCharacter]++
    } else {
      report[currentCharacter] = 1
    }
  }

  console.log(report)
  // iterate each character of the string
    // for each character:
      // if it is not in the outputObject,
        // add it to the object
      // else
        // increment that property of the object

  return report
}

function isKeyOnReport(key, report) {
  let onReport = false
  for (let property in report) {
    if(property === key) {
      onReport = true
    }
  }

  return onReport
}
