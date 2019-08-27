const queryGen = require('../src/queryGen')

let testQ = {
  name: 'test',
  lang: 'en',
  sortBy: 'title',
  sort: 'asc',
  shuffle: null,
  limit: 10,
  page: null,
  perPage: null,
  items: null,
  props: null,
  filter: null,
  type: 'entity'
}

test('generates a query string', () => {
  expect(queryGen(testQ)).toBe('entity?name=test&lang=en&sortBy=title&sort=asc&limit=10')
})
