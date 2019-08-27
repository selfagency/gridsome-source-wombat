const query = require('../src/query.js')

const api = 'http://localhost:3000'
const queryOpts = {
  name: 'home',
  type: 'entity'
}

test('runs a test query', async () => {
  expect(await query(api, queryOpts)).toHaveProperty('status', 200)
})
