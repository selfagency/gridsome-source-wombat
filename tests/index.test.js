const query = require('../index.js')

const api = 'http://localhost:3000'
const queryOpts = {
  name: 'home',
  type: 'entity'
}

;(async () => {
  const output = await query(api, queryOpts)
  console.log(output)
})()
