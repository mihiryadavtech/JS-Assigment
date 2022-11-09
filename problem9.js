// Write a code to store multiple employee details(first name, last name, mobile number,
// email, salary, address(line 1, line 2, area, pincode, city, state), photo) and also print
// all employee details and update any  employee detail or delete employee details,
// there should not be repeated data.
let employeeData = []
const addEmployeeData = (EmployeeObject) => {
  employeeData.push(EmployeeObject)
}
const deleteEmployeeData = (id) => {
  const foundEmployeeData = employeeData.find(
    (employeeItem) => employeeItem.id === id,
  )
  if (!foundEmployeeData) {
    console.log('USER NOT FOUND')
  } else {
    employeeData = employeeData.filter((employeeItem) => employeeItem.id !== id)
    console.log('DELETED ID SUCCESSFULLY==>>', id)
    console.log('REMAINING Employees DATA==>>', employeeData)
  }
}

const updateEmployeeData = (id, objectKey, objectValue, address) => {
  let foundEmployeeData = employeeData.find((element) => {
    return element.id === id
  })
  if (foundEmployeeData) {
    if (address) {
      foundEmployeeData.address[objectKey] = objectValue
    } else {
      foundEmployeeData[objectKey] = objectValue
    }
  } else {
    console.log('notfound')
  }
}

const getEmployeeData = (id) => {
  const foundEmployeeData = employeeData.find((element) => {
    return element.id === id
  })
  if (foundEmployeeData) {
    console.log('found', foundEmployeeData)
  } else {
    console.log('notfound')
  }
}

// find user

// Update the Employee data

// Delete the Employee data

const EmployeeDataObject1 = {
  id: 51,
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
  photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org',
}

const EmployeeDataObject2 = {
  // Math.floor(1000 + Math.random() * 9000)
  id: 52,
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
const EmployeeDataObject3 = {
  // Math.floor(1000 + Math.random() * 9000)
  id: 53,
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
  photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org',
}

addEmployeeData(EmployeeDataObject1)
addEmployeeData(EmployeeDataObject2)
addEmployeeData(EmployeeDataObject3)
deleteEmployeeData(53)
// updateEmployeeData(52, 'line2', 'rander', true)
// updateEmployeeData(52, 'mobileNumber', 888888888)
// getEmployeeData(52)
console.log('Employee data=>>', employeeData)
