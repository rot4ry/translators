const errorsBox = document.querySelector('#errors-box')

const displayError = (id, type, errorMessage) => {
  if (document.querySelector(`#err-${id}-${type}`) === null) {
    const newError = document.createElement('p')
    newError.id = `err-${id}-${type}`
    newError.innerText = errorMessage
    errorsBox.appendChild(newError)
  }
}

const removeError = (id, type) => {
  const elementToRemove = document.querySelector(`#err-${id}-${type}`)
  if (elementToRemove !== null) {
    document.querySelector('#errors-box').removeChild(elementToRemove)
  }
}

const validateNames = (e) => {
  const elementID = e.target.id
  const toValidate = e.target.value

  const shortNamePattern = new RegExp(/[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{2,10}/)
  const longNamePattern = new RegExp(/[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{2,10}([-\s])?([A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{2,10})?/)
  
  switch (elementID) {
    //  ^[^\s0-9]{2,5}[^-]$
    //  ^\b([A-Za-z]{3,5})\b
    case 'name':
      !new RegExp(/^\b.{3,23}\b/).test(toValidate) ?
        displayError(elementID, 'length', 'Name must be between 3 and 23 characters long.') :
        removeError(elementID, 'length')
    break
    
    case 'surname':
      !new RegExp(/\b.{2,28}\b/).test(toValidate) ?
        displayError(elementID, 'length', 'Surname must be between 2 and 28 characters long.') :
        removeError(elementID, 'length')
    break
  }
  return false
}

const validateMail = (e) => {
  const mail = e.target.value
  const mailPattern = /mail/gi
  // ([^$&+,:;=?@#|'<>.^*()%!-]+)@([^$&+,:;=?@#|'<>.^*()%!-]+)((\.\w{2,4})){1,3}
  return false
}

const validatePhone = (e) => {
  const phone = e.target.value
  const phonePattern = /phone/gi
  // (\+48)[-\s](\d{3})[-\s](\d{3})[-\s](\d{3})
  return false
}

const validatePasswords = (e) => {
  const password = e.target.value
  const passwordPattern = /password/gi
  return false
}

const validateForm = (e) => {
  // if validations failed, refuse to submit the form
  if (!(validateNames(e) &&
        validateMail(e) &&
        validatePhone(e) &&
        validatePasswords(e))
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
