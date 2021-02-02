// user schema

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const User = new schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  // password: { type: String, required: true },
  // roles: [{ type: String, required: true }],
  isActive: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now },
  // createdBy: { type: schema.Types.ObjectId, ref: "User" },
  updatedAt: { type: Date, default: Date.now },
  // updatedBy: { type: schema.Types.ObjectId, ref: "User" },
  isDeleted: { type: Boolean, default: false },
  deletedAt: { type: Date },
  // deletedBy: { type: schema.Types.ObjectId, ref: "User" },
});

// write methods here
User.methods.create = function() {
  return new Promise((resolve, reject) => {
    this.save(function(err, user) {
      if (err) {
        reject(err);
      }
      resolve(user);
    });
  });
};

module.exports = mongoose.model("User", User);
