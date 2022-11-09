// const password = prompt()

// Write a code to check the user-entered password should have min length of 6 and a
// max length of 14 characters, the first character must be in upper case, and the
// password must contain lower case, upper case, numbers, and special characters
function checkpassword(password) {
  const regex = /^[A-Z]+(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,14}$/
  if (password.match(regex)) {
    console.log('correct format')
  } else {
    console.log('it is wrong')
  }
}

checkpassword('HihhHdudg@1')
checkpassword('ah%1000')
checkpassword('D$$$$rashti112')
