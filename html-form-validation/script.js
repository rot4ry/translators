const validateNames = (e) => {
  const name = e.target.value
  // [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{2,10}
  // .{3,10}
  // OR
  // [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{2,10}([-\s])?([A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{2,10})?
  // .{7,23}
  const namePattern = /name/gi

  return false
}

// check if:
// - is mail address
// ([^$&+,:;=?@#|'<>.^*()%!-]+)@([^$&+,:;=?@#|'<>.^*()%!-]+)((\.\w{2,4})){1,3}
const validateMail = (e) => {
  const mail = e.target.value
  const mailPattern = /mail/gi
  
  return false
}

// check if phone:
// - is long enough
// - contains numbers
// (\+48)[-\s](\d{3})[-\s](\d{3})[-\s](\d{3})
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
  if(!( validateNames(e) &&
        validateMail(e) &&
        validatePhone(e) && 
        validatePasswords(e) )
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
