const query = require('./src/query')

module.exports = (api, options) => {
  api.loadSource(({ addContentType, makeTypeName, slugify }) => {
    const { apiUrl, contentTypes } = options

    return Promise.all(
      contentTypes.map(async resource => {
        const typeName = makeTypeName(resource.name)
        let contentType = addContentType({ typeName })

        const data = await query(apiUrl, { title: resource.name, type: resource.type, lang: resource.lang })
        data.map(d => {
          const content = {},
            fields = {}
          Object.entries(d).forEach(([name, val]) => {
            coreProperties.includes(name) ? (content[name] = val) : (fields[name] = val)
          })
          content.fields = fields
          contentType.addNode(content)
        })
      })
    )
  })
}

module.exports.defaultOptions = () => ({
  apiUrl: 'http://localhost:3000',
  contentTypes: [],
  typeName: 'Wombat'
})
