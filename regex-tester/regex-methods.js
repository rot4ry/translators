let testingString = ''
let testingRegExp = new RegExp(/\s/, 'g')

console.log('String: ', testingString)
console.log('RegEx: ', testingRegExp.toString(), '\n')

console.log('1. RegExp methods: ')
console.log(`exec():\t${testingRegExp.exec(testingString)}`)
console.log(`test():\t${testingRegExp.test(testingString)}`, '\n')

console.log('2. String methods: ')
console.log(`match():\t${testingString.match(testingRegExp)}`)
console.log(`matchAll():`, ...testingString.matchAll(testingRegExp))

console.log(`replace():\t${testingString.replace(testingRegExp, 'REPLACED')}`)
console.log(`search():\t${testingString.search(testingRegExp)}`)
console.log(`split():\t${testingString.split(testingRegExp)}`, '\n')