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

const patterns = {
  'name': {
    length: {
      pattern: new RegExp(/^.{3,23}$/),
      message: 'Name must be between 3 and 23 characters long.'
    },
    format: {
      patternShort: new RegExp(/[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{2,10}/),
      patternLong: new RegExp(/[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{2,10}([-\s])?([A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{2,10})?/),
      message: 'Name can consist only of English and Polish characters, can also contain a hyphen.'
    },
    validationResult: false
  },
  'surname': {
    length: {
      pattern: new RegExp(/^.{2,28}$/),
      message: 'Name must be between 2 and 28 characters long.'
    },
    format: {
      patternShort: new RegExp(/[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{2,10}/),
      patternLong: new RegExp(/[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{2,10}([-\s])?([A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{2,10})?/), // tochange
      message: 'Surname can consist only of English and Polish characters, can also contain a hyphen.'
    },
    validationResult: false
  },
  'email': {
    length: {
      pattern: new RegExp(/^.{1,255}$/),
      message: 'Email adress must be at most 255 characters long.'
    },
    format: {
      pattern: new RegExp(/\b([^\s$&+,:;=?@#|'<>.^*()%!-]+)@([^\s$&+,:;=?@#|'<>.^*()%!-]+)((\.\w{2,4})){1,3}\b/),
      message: 'Email address must have a format of <username>@<server-domain-name> (e.g. hello@world.com)'
    },
    validationResult: false
  },
  'phone': {   // TODO
    length: {
      pattern: new RegExp(/^.{9,15}$/),
      message: 'Phone number must be between 9 and 15 characters long.'
    },
    format: {
      pattern: new RegExp(),
      message: ''
    },
    validationResult: false
  },
  'password': {   // TODO
    length: {
      pattern: new RegExp(/^.{8,24}$/),
      message: 'Password must be between 8 and 24 characters long.'
    },
    format: {
      pattern: new RegExp(),
      message: ''
    },
    validationResult: false
  }
}


const validateNames = (e) => {
  const elementID = e.target.id
  const toValidate = e.target.value
  return false
}

const validateMail = (e) => {
  const mail = e.target.value
  return false
}

const validatePhone = (e) => {
  const phone = e.target.value
  return false
}

const validatePasswords = (e) => {
  const password = e.target.value
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
