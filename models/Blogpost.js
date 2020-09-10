const { Schema, model } = require('mongoose');

const BlogpostSchema = new Schema(
  {
    title: { type: String, required: true },
    url: { type: String, require: true },
    content: { type: String, required: true },
    tags: [Schema.Types.Mixed],
    author: { type: String, required: false },
    created_at: { type: Date, default: Date.now }
  }
);

module.exports = model('Blogpost', BlogpostSchema);