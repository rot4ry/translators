const results = document.querySelector('#results')

const validate = () => {
  const pattern = document.querySelector('#pattern').value
  const string = document.querySelector('#string').value
  results.replaceChildren()
  console.log('Pattern: ', pattern)
  console.log('String: ', string)

  if(pattern && string) {
    for(const found of string.matchAll(pattern)) {
      const newMatch = document.createElement('p')
      const content = ''
        .concat(`[ `)
        .concat(`'${found[0]}', `)
        .concat(`index: ${found['index']}, `)
        .concat(`input: '${found['input']}', `)
        .concat(`groups: ${found['groups']}`)
        .concat(` ]`)

      newMatch.textContent = content
      results.append(newMatch)
    }
  }
}

document.querySelector('#pattern').addEventListener('input', validate)
document.querySelector('#string').addEventListener('input', validate)
