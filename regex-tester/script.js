const results = document.querySelector('#results')

const validate = () => {
  const pattern = document.querySelector('#pattern').value
  const string = document.querySelector('#string').value
  results.replaceChildren()
  
  if(pattern && string) {
    for (const found of string.matchAll(new RegExp(pattern, 'g'))) {
      const newMatch = document.createElement('p')
      let groups = []
      try {
        for (const [key, value] of Object.entries(found['groups'])) {
          if(value != null) groups.push(key)
        }
      } catch (e) { groups = null }
      
      let content = ''
        .concat(`[ `)
        .concat(`match: '${found[0]}', `)
        .concat(`index: ${found['index']}, `)
        .concat(`groups: { `)
        if (groups === null) {
          content = content.concat('undefined')
        } else {
          for (let i = 0; i < groups.length; i++) {
            content = content.concat(groups[i])
            if(i < groups.length - 1) content = content.concat(', ')
          }
        }
        content = content.concat(` } ]`)

      newMatch.textContent = content
      results.append(newMatch)
    }
  }
}

document.querySelector('#pattern').addEventListener('input', validate)
document.querySelector('#string').addEventListener('input', validate)
