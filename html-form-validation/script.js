const createButton = document.querySelector('#frm')
const submitLock = false

const handleClick = (e) => {
  e.preventDefault()
  console.log(this)
  return true
}

// check if 
// - exists?
const validateNames = () => {

}

const validateMail = () => {
  
}

// check if phone
// - is long enough
// - contains numbers
const validatePhone = () => {

}

// check if passwords: 
// - contain special chars
// - are equal
// - longer than X
const validatePasswords = () => {

}


const validateForm = (e) => {
  validateNames()
  validateMail()
  validatePhone()
  validatePasswords()
  handleClick(e)
  return false
}


createButton.addEventListener('submit', (e) => validateForm(e))
