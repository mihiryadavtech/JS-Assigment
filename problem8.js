// Write a code to store multiple student data(first name, last name, middle name,email, mobile, birthdate, address(line 1, line 2, area, city, pincode), enrollment number) and also print all student data and update any student data as well.
// let allStudents = []

// function student(
//   id,
//   fname,
//   mname,
//   lname,
//   email,
//   mobile,
//   birthdate,
//   line1,
//   line2,
//   area,
//   city,
//   pincode,
//   enrollment,
// ) {
//   const obj = {
//     address: {},
//   }
//   obj.id = id
//   obj.firstname = fname
//   obj.middlename = mname
//   obj.lastname = lname
//   obj.email = email
//   obj.mobile = mobile
//   obj.birthdate = birthdate
//   obj.address.line1 = line1
//   obj.address.line2 = line2
//   obj.address.area = area
//   obj.address.city = city
//   obj.address.pincode = pincode
//   obj.enrollment = enrollment
//   return obj
// }

// const mihir = student(
//   11,
//   'mihir',
//   'jiten',
//   'yadav',
//   'mihir@gmail.com',
//   999999999,
//   '23/12/1999',
//   '168/b',
//   'avirbhav',
//   'pandesara',
//   'surat',
//   13232,
//   1111111,
// )
// const ravi = student(
//   12,
//   'ravi',
//   'jit',
//   'yadav',
//   'ravi@gmail.com',
//   999999999,
//   '12/12/1999',
//   '168/b',
//   'avirbhav',
//   'pandesara',
//   'surat',
//   13232,
//   1111111,
// )
// allStudents.push(mihir)
// allStudents.push(ravi)
// // console.log(allStudents)

// function findperson(id) {
//   const value = allStudents.find((element) => {
//     return element.id === id
//   })
//   console.log(value)
// }

// findperson(122)
// function deleteperson(id) {
//   const newarray = allStudents.filter((element) => {
//     return element.id !== id
//   })
//   console.log(newarray)
// }
// deleteperson(12)

let studentData = []

const addStudentData = (studentObject) => {
  studentData = [...studentData, studentObject]
}

// const addStudentData = (studentObject) => {
//   studentData.push(studentObject)
// }
const deleteStudentData = (id) => {
  const foundStudentData = studentData.findIndex(
    (studentItem) => studentItem.id === id,
  )
  if (foundStudentData === -1) {
    console.log('USER NOT FOUND')
  } else {
    studentData = studentData.filter((studentItem) => studentItem.id !== id)
    console.log('DELETED ID SUCCESSFULLY==>>', id)
    console.log('REMAINING STUDENTS DATA==>>', studentData)
  }
}

const updateStudentData = (id, objectKey, objectValue, address) => {
  let foundStudentData = studentData.find((element) => {
    return element.id === id
  })
  if (foundStudentData) {
    if (address) {
      foundStudentData.address[objectKey] = objectValue
    } else {
      foundStudentData[objectKey] = objectValue
    }
  } else {
    console.log('notfound')
  }
}

const getStudentData = (id) => {
  const foundStudentData = studentData.find((element) => {
    return element.id === id
  })
  if (foundStudentData) {
    console.log('found', foundStudentData)
  } else {
    console.log('notfound')
  }
}

// find user

// Update the student data

// Delete the student data

const studentDataObject1 = {
  id: 21,
  firstName: 'Mihir',
  lastName: 'Yadav',
  email: 'mihir@yadav.com',
  mobileNumber: '00990099',
  birthDate: '09/00/99',
  enrollmentNumber: '889989989',
  address: {
    line1: 'asd',
    line2: 'asdas',
    area: 'sadasd',
    city: 'asdasd',
    pincode: 'asdasd',
  },
}

const studentDataObject2 = {
  // Math.floor(1000 + Math.random() * 9000)
  id: 22,
  firstName: 'Mihir',
  lastName: 'Yadav',
  email: 'mihir@yadav.com',
  mobileNumber: '00990099',
  birthDate: '09/00/99',
  enrollmentNumber: '889989989',
  address: {
    line1: 'asd',
    line2: 'asdas',
    area: 'sadasd',
    city: 'asdasd',
    pincode: 'asdasd',
  },
}
const studentDataObject3 = {
  // Math.floor(1000 + Math.random() * 9000)
  id: 23,
  firstName: 'Mihir',
  lastName: 'Yadav',
  email: 'mihir@yadav.com',
  mobileNumber: '00990099',
  birthDate: '09/00/99',
  enrollmentNumber: '889989989',
  address: {
    line1: 'asd',
    line2: 'asdas',
    area: 'sadasd',
    city: 'asdasd',
    pincode: 'asdasd',
  },
}

addStudentData(studentDataObject1)
addStudentData(studentDataObject2)
addStudentData(studentDataObject3)
deleteStudentData(23)
updateStudentData(22, 'line2', 'rander', true)
updateStudentData(22, 'mobileNumber', 888888888)
getStudentData(22)
console.log('STUDENT DATA==>>', studentData)
