const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  name: {type: String, required: true},
  content: {type: String, required: true},
  createDate: {type: Date, default: Date.now},
  lastEditDate: {type: Date, default: Date.now},
  category: {type: String, required: true},
  edits: {type: Number, default: 0},
  owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Note', schema)