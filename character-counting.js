// Input: a string
// Output: an object that reports instances of each letter
function countLetters(inputString) {
  const report = {}

  const joinedArray = inputString.split(' ').join('').split('')

  // iterate array
  joinedArray.forEach((el, i) => {
    const currentCharacter = el

    if(!report[currentCharacter]) {
      report[currentCharacter] = 0
    }
    
    report[currentCharacter]++
  }) 
  
  return report
}

console.log(countLetters('love toronto'))