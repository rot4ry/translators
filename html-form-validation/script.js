// check if:
// - exists, longer than 0/2
const validateNames = (e) => {
  const name = e.target.value
  const namePattern = /name/gi

  return false
}

// check if:
// - is mail address
const validateMail = (e) => {
  const mail = e.target.value
  const mailPattern = /mail/gi
  
  return false
}

// check if phone:
// - is long enough
// - contains numbers
const validatePhone = (e) => {
  const phone = e.target.value
  const phonePattern = /phone/gi

  return false
}

// check if passwords: 
// - contain special chars
// - are equal
// - longer than X
const validatePasswords = (e) => {
  const password = e.target.value
  const passwordPattern = /password/gi

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

document.querySelector('#name').addEventListener('input', (e) => validateNames(e))
document.querySelector('#surname').addEventListener('input', (e) => validateNames(e))
document.querySelector('#email').addEventListener('input', (e) => validateMail(e))
document.querySelector('#phone').addEventListener('input', (e) => validatePhone(e))
document.querySelector('#passwd').addEventListener('input', (e) => validatePasswords(e))
document.querySelector('#passwdRepeat').addEventListener('input', (e) => validatePasswords(e))

document.querySelector('#frm').addEventListener('submit', (e) => validateForm(e))
