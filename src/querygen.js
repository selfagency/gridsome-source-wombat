function queryGen(queryOpts) {
  try {
    let queryStr = ''
    for (let [optK, optV] of Object.entries(queryOpts)) {
      if (optK !== 'type' && optV) {
        queryStr = queryStr + `&${optK}=${optV}`
      }
    }
    queryStr = `${queryOpts.type}?${queryStr.slice(1, queryStr.length)}`
    // @debug console.log(queryStr)
    return queryStr
  } catch (err) {
    console.error(err)
  }
}

module.exports = queryGen
