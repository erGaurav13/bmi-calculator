const bcrypt = require("bcrypt");
const saltRound = 10;
const jwt = require("jsonwebtoken");
const User = require("../../Model/UserModel/user.model");

//for Creating new User
const createUser = async (name, email, passwordnothash) => {
  try {
    const password = await bcrypt.hash(passwordnothash, saltRound);
    const user = await User.create({ name, email, password });
    return user;
  } catch (e) {
    return e;
  }
};

// for login

const login = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    const match = await bcrypt.compare(password, user.password);
    if (user && match) {
      const token = jwt.sign(
        {
          data: "user.email",
        },
        "secret",
        { expiresIn: "1h" }
      );
      return token;
    }
    return false;
  } catch (e) {
    return e;
  }
};

const getUserByID = async (id) => {
  try {
    const user = await User.findOne({ _id: id });
    if (user) {
      return user;
    }
    return false;
  } catch (e) {
    console.log(e);
    return "No user found";
  }
};

const getAllUsers = async () => {
  try {
    const allUser = User.find();
    return allUser;
  } catch (e) {
    return e;
  }
};

module.exports = {
  createUser,
  login,
  getUserByID,
  getAllUsers
};
