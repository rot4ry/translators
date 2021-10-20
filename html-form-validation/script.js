// check if:
// - exists, longer than 0/2
const validateNames = () => {
  return false
}

// check if:
// - is mail address
const validateMail = () => {
  return false
}

// check if phone:
// - is long enough
// - contains numbers
const validatePhone = () => {
  return false
}

// check if passwords: 
// - contain special chars
// - are equal
// - longer than X
const validatePasswords = () => {
  return false
}

const validateForm = (e) => {
  // if validations failed, refuse to submit the form
  if(!( validateNames() &&
        validateMail() &&
        validatePhone() && 
        validatePasswords() )
  ) {
    e.preventDefault()
    console.log('Validation failed.')
  } else {
    console.log('Validation succeeded, submitting...')
  }
}

const formToValidate = document.querySelector('#frm')
formToValidate.addEventListener('submit', (e) => validateForm(e))
