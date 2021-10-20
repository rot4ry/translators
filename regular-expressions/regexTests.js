let testingString = 'Hello world, hello user'
let testingRegExp = new RegExp('hello', 'gi')

console.log('String: ', testingString)
console.log('RegEx: ', testingRegExp.toString(), '\n')

console.log('1. RegExp methods: ')
console.log(`exec():\t${testingRegExp.exec(testingString)}`)
console.log(`test():\t${testingRegExp.test(testingString)}`, '\n')

console.log('2. String methods: ')
console.log(`match():\t${testingString.match(testingRegExp)}`)
console.log(`matchAll():`)
for(const item of testingString.matchAll(testingRegExp)) {
  console.log('\t\t', item)
}
console.log(`replace():\t${testingString.replace(testingRegExp, 'REPLACED')}`)
console.log(`search():\t${testingString.search(testingRegExp)}`)
console.log(`split():\t${testingString.split(testingRegExp)}`, '\n')