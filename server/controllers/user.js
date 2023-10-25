const User = require("../models/User.model");

async function getUserById(req, res, next) {
  try {
    const userId = req.params.id;

    const user = await User.find({ _id: userId });
    res.json(user);
  } catch (er) {
    console.log(er);
    console.log("get isteği hatası:", er);
    next(er);
  }
}

async function getAllUser(req, res) {
  try {
    const users = await User.find();

    res.json(users);
  } catch (er) {
    console.log(er);
    console.log("get isteği hatası:", er);
    next(er);
  }
}

async function updateUserById(req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({
        message: "User not found!",
      });
      return;
    }

    const User = require("../models/User.model");

    res.status(200).json({
      message: "User is updated successfully!",
      updatedUser,
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteUser(req, res) {
  try {
    const gonnaDeletedUser = await models.user.findByPk(req.params.id);
    await gonnaDeletedUser.save({
      isActive: false,
      isDeleted: true,
    });
    res.status(200).json({
      message: "User is deleted successfully!",
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteUserPermanent(req, res) {
  try {
    const gonnaDeletedUser = await models.user.findByPk(req.params.id);
    await gonnaDeletedUser.destroy();
    res.status(200).json({
      message: "User is deleted successfully as permanently!",
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  getUserById,
  getAllUser,
  updateUserById,
  deleteUser,
  deleteUserPermanent,
};
