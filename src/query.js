const axios = require('axios')

const queryGen = require('./querygen')
const validate = require('./validate')

async function query(api, queryParams) {
  try {
    const invalid = validate(queryParams)
    if (!invalid) {
      const queryStr = queryGen(queryParams)
      const res = await axios.get(`${api}/${queryStr}`)
      // @debug console.log(res.data)
      return res
    }
  } catch (err) {
    console.error(err)
  }
}

module.exports = query
