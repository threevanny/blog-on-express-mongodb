const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    full_name: { type: String },
    bio: { type: Date },
    country: { type: String },
    permissions: { type: String },
    created_at: { type: Date, default: Date.now }
  }
);

module.exports = model('User', UserSchema);