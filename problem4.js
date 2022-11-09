// Write a code to print A-Z characters in each line from
// “ABCKWQDEPFGMHODIJKALYMNCQOPQRBSTLBUVLWXYZ”, the print data must
// be A-Z, with no repeated characters

// function characterSearch(character) {
//   const myarray = []
//   for (let i = 0; i < character.length; i++) {
//     myarray.push(character[i])
//   }
//   console.log(myarray)
//   return new Set(myarray)
// }
// const hii = 'ABCKWQDEPFGMHODIJKALYMNCQOPQRBSTLBUVLWXYZ'
// console.log(characterSearch(hii))

const mystr = 'ABZCKWQDEPFGMHODIJKALYMNCQOPQRBSTLBUVLWXY'
const myset = new Set(mystr)
const myArray = [...myset]
const mystr2 = myArray.sort().join('')
console.log( mystr2)
console.log( typeof mystr2)
