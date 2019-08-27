const Schema = require('validate')

const schema = {
  name: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    required: false,
    length: { min: 2, max: 2 }
  },
  sortBy: {
    type: String,
    required: false
  },
  sort: {
    type: String,
    required: false,
    enum: ['asc', 'desc', 'shuffle']
  },
  shuffle: {
    type: Boolean,
    required: false
  },
  limit: {
    type: Number,
    required: false
  },
  page: {
    type: Number,
    required: false
  },
  perPage: {
    type: Number,
    required: false
  },
  items: [
    {
      type: String,
      required: false
    }
  ],
  props: [
    {
      type: String,
      required: false
    }
  ],
  filter: {
    prop: {
      type: String,
      required: false
    },
    type: {
      type: String,
      enum: ['value', 'number', 'date'],
      required: false
    },
    value: {
      type: [String, Number, Array],
      required: false
    },
    from: {
      type: [String, Number],
      required: false
    },
    to: {
      type: [String, Number],
      required: false
    }
  },
  type: {
    type: String,
    required: true,
    enum: ['entity', 'collection']
  }
}

function validate(data) {
  try {
    const validOpts = new Schema(schema)
    const errors = validOpts.validate(data)

    if (errors.length > 0) {
      console.error('You must address the following errors:')
      errors.forEach(err => {
        console.error(err.message)
      })
      return true
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}

module.exports = validate
