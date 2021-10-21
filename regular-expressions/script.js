const results = document.querySelector('#results')

const validate = () => {
  const pattern = document.querySelector('#pattern').value
  const string = document.querySelector('#string').value
  
  console.log(`pattern: ${pattern}\nstring: ${string}`)
  if(pattern && string) {
    console.log(...string.matchAll(`\\${pattern}`))

    for(const found of string.matchAll(pattern)) {
      const newMatch = document.createElement('p')
      for(const item in found) {
        newMatch.textContent += item + '/ '
      }
      results.append(newMatch)
      console.log('appended')
    }
  }
}

document.querySelector('#pattern').addEventListener('input', validate)
document.querySelector('#string').addEventListener('input', validate)
