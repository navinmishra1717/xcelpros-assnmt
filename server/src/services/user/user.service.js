const User = require("../../models/user.model");

function get(getQuery, options = {}) {
  const limit = options.limit || 100;
  const skip = limit * options.page || 0;
  return User.find(getQuery)
    .skip(skip)
    .limit(limit)
    .exec();
}
/**
 * Creates new user and returns user
 * @param {object} userData The object that contains information about user to be created
 */
function create(userData) {
  const user = new User(userData);
  return user.create();
}

/**
 * Updates user by given id and returns user
 * @param {object} userData The object that contains information about user to be created
 */
function update(userId, userData) {
  userData.updatedAt = Date.now();
  return User.findByIdAndUpdate(userId, userData, { new: true }).exec();
}

/**
 * Gets user by given query
 * @param {string} userId The string which represents id of user
 */

function getOne(userId, options = {}) {
  return User.findOne({ _id: userId, ...options }).exec();
}

/**
 * Gets user by given id
 * @param {string} userId The string which represents id of user
 */

function findById(userId, options = {}) {
  return User.findById(userId).exec();
}

/**
 * Removes user by given id
 * @param {string} userId The string which represents id of user
 */

function deleteOne(userId, data) {
  data.isDeleted = true;
  data.deletedAt = Date.now();
  return User.findOneAndUpdate({ _id: userId }, data, { new: true }).exec();
}

const userService = {
  get,
  create,
  update,
  getOne,
  findById,
  deleteOne
};

module.exports = userService;
