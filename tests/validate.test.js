const validate = require('../src/validate')
let data = {}

let i = 0
const x = 3

while (i <= x) {
  data[i] = require(`./data/test${'0' + (i + 1)}.json`)
  i++
}

test(`validates ${JSON.stringify(data[0])}`, () => {
  expect(validate(data[0])).toBe(true)
})

test(`validates ${JSON.stringify(data[1])}`, () => {
  expect(validate(data[1])).toBe(false)
})

test(`validates ${JSON.stringify(data[2])}`, () => {
  expect(validate(data[2])).toBe(true)
})

test(`validates ${JSON.stringify(data[3])}`, () => {
  expect(validate(data[3])).toBe(false)
})
