// Write a code to check whether the given username is available in 15 names or not, if
// the username is found then print the given username’s position and also print all the
// user usernames till the found user name

const myArray = [
  'mihir',
  'mihir1',
  'mihir2',
  'mihir3',
  'mihir4',
  'mihir5',
  'mihir6',
  'mihir7',
  'mihir4',
  'mihir9',
  'mihir10',
  'mihir11',
  'mihir12',
  'mihir13',
  'mihir14',
  'mihir15',
]
// const hiii = 'no'
const value = 'mihir6'
if (myArray.includes(value)) {
  for (const [index, item] of myArray.entries()) {
    if (item === value) {
      console.log(`${index},${item}`)
      break
    } else {
      console.log(`${item},`)
    }
  }
} else {
  console.log('notfound')
}
