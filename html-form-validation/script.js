const errorsBox = document.querySelector('#errors-box')
const patterns = {
  'name': {
    length: {
      pattern: new RegExp(/^.{3,23}$/),
      message: 'Name must be between 3 and 23 characters long.',
      validationResult: false
    },
    formatShort: {
      pattern: new RegExp(/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{2,10}$/),
      message: 'Name can consist only of English and Polish characters, can also contain a hyphen.',
      validationResult: false
    },
    formatLong: {
      pattern: new RegExp(/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{2,}([-\s])?([A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{2,})?$/),
      message: 'Name can consist only of English and Polish characters, can also contain a hyphen.',
      validationResult: false
    }
  },
  'surname': {
    length: {
      pattern: new RegExp(/^.{2,28}$/),
      message: 'Surname must be between 2 and 28 characters long.',
      validationResult: false
    },
    formatShort: {
      pattern: new RegExp(/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{2,10}$/),
      message: 'Surname can consist only of English and Polish characters, can also contain a hyphen.',
      validationResult: false
    },
    formatLong: {
      pattern: new RegExp(/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{2,}([-\s])?([A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{0,})?$/),
      message: 'Surname can consist only of English and Polish characters, can also contain a hyphen.',
      validationResult: false
    }
  },
  'email': {
    length: {
      pattern: new RegExp(/^.{1,255}$/),
      message: 'Email adress must be at most 255 characters long.',
      validationResult: false
    },
    format: {
      pattern: new RegExp(/^([^\s$&+,:;=?@#|'<>.^*()%!0-9_-][^\s$&+,:;=?@#|'<>.^*()%!_-]+)@([^\s$&+,:;=?@#|'<>.^*()%!_-]+)((\.\w{2,4})){1,3}$/),
      message: 'Email address must have a format of <username>@<server-domain-name> (e.g. hello@world.com)',
      validationResult: false
    }
  },
  'phone': {
    length: {
      pattern: new RegExp(/^.{9,18}$/),
      message: 'Phone number must be between 9 and 18 characters long.',
      validationResult: false
    },
    format: {
      pattern: new RegExp(/^((\+48\s?)|(\(\+48\)\s?))?(\d{3})(([-]|[\s])?(\d{3})){2}$/),
      message: 'Phone number can consist of (+48) in the beginning, digits, hyphens and spaces.',
      validationResult: false
    }
  },
  'password': {
    length: {
      pattern: new RegExp(/^.{8,24}$/),
      message: 'Password must be between 8 and 24 characters long.',
      validationResult: false
    },
    specialCharacters: {
      pattern: new RegExp(/[!@#$%^&*+=\[\]{}()\\|;:'",<.>/?`~_-]+/),
      message: 'Password must contain at least one special character.',
      validationResult: false
    },
    numbers: {
      pattern: new RegExp(/[0123456789]+/),
      message: 'Password must contain at least one digit character.',
      validationResult: false
    },
    capitalLetters: {
      pattern: new RegExp(/[A-Z]+/),
      message: 'Password must contain at least one capital letter.',
      validationResult: false
    },
    noSpaces: {
      pattern: new RegExp(/^([\S]*)$/),
      message: 'Password must NOT contain white characters.',
      validationResult: false
    }
  },
  'passwordRepeat': {
    length: {
      pattern: new RegExp(/^.{8,24}$/),
      message: 'Password must be between 8 and 24 characters long.',
      validationResult: false
    },
    specialCharacters: {
      pattern: new RegExp(/[!@#$%^&*+=\[\]{}()\\|;:'",<.>/?`~_-]+/),
      message: 'Password must contain at least one special character.',
      validationResult: false
    },
    numbers: {
      pattern: new RegExp(/[0123456789]+/),
      message: 'Password must contain at least one digit character.',
      validationResult: false
    },
    capitalLetters: {
      pattern: new RegExp(/[A-Z]+/),
      message: 'Password must contain at least one capital letter.',
      validationResult: false
    },
    noSpaces: {
      pattern: new RegExp(/^([\S]*)$/),
      message: 'Password must NOT contain white characters.',
      validationResult: false
    }
  }
}

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

const validate = (e) => {
  const inputName = e.target.id
  for (const property in patterns[inputName]) {
    if (patterns[inputName][property].pattern.test(e.target.value)) {
      patterns[inputName][property].validationResult = true
      removeError(inputName, property)
    } else {
      patterns[inputName][property].validationResult = false
      displayError(inputName, property, patterns[inputName][property].message)
    }
  }
}

// validate passwords separately?
// password === passwordRepeat

const validateForm = (e) => {
  let correct = true
  for (const inputName in patterns) {
    for (const property in patterns[inputName]) {
      correct = correct && patterns[inputName][property].validationResult
    }
  }

  if (!correct) {
    e.preventDefault()
    alert('Validation failed.')
  } else {
    alert('Validation succeeded, submitting...')
  }
}

//  Uncomment to show errors on load
//  Not a very nice look
/*
function initialValidation () {
  for (const inputName in patterns) {
    for (const property in patterns[inputName]) {
      displayError(inputName, property, patterns[inputName][property].message)
    }
  }
}
window.addEventListener('DOMContentLoaded', initialValidation)
*/
for (const input of document.querySelectorAll('input')) {
  input.addEventListener('input', (e) => validate(e))
}
document.querySelector('#frm').addEventListener('submit', (e) => validateForm(e))
