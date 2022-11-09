// Write a code to find specific word positions from a paragraph, print that word length,
// and also print the last 3 characters of the word
const myParah =
  'Widows and orphans occur when the first line of a paragraph is the last in a column or page, or when the last line of a paragraph is the first line of a new column or page'

// function mystring(name) {
//   const word = ` ${name.toLowerCase()} `
//   console.log(word)
//   const matching = myParah.match(name)
//   console.log(matching)
//   if (matching) {
//     console.log(matching?.[0]?.length)
//     console.log(matching.index + 1)
//     console.log(matching?.[0]?.slice(-3))
//   } else {
//     console.log('WORD  NOT FOUND')
//   }
// }
// mystring('a')

// // function myword() {}
// // myword
// const hii = 'a'

// console.log(object);

// const word = 'or'

// console.log(myParah.match(/\b${word}\b/))
// matchingmyParah.match(regex))
// console.log(myParah.includes('a'))
// console.log(myParah.search('a'))
// console.log(myParah[myParah.search('a')])
// console.log(myParah.indexOf('a'));
// const myarray = myParah.split(' ')
// console.log(myarray[0]);

// const latestarray = myParah.split(' ')

function findAll(value) {
  if (latestarray.includes(value)) {
    const index = latestarray.indexOf(value)
    console.log(index)
    console.log(latestarray[index].length)
    console.log(latestarray[index].slice(-3))
  } else {
    console.log(' not found')
  }
}
findAll('paragraph')

// const saurabh = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const mihir = [11, 12, 13]
// console.log(saurabh.splice(4, 3, 'hi'))
// console.log(saurabh);
