import User from "../model/user.js";

// Save data of the user in database
export const addUser = async (req, resp) => {
  let user = req.body;
  console.log(user);

  let newUser = new User(user);

  try {
    await newUser.save();
    resp.status(201).json({
      message: "User created successfully!",
      error: false,
      data: newUser,
    });
  } catch (error) {
    resp.status(409).json({ message: error.message, error: true });
  }
};

// Get all users data from database
export const getAllUser = async (req, resp) => {
  try {
    const users = await User.find();

    resp.status(200).json({
      message: "Success",
      error: false,
      data: users,
    });
  } catch (error) {
    resp.status(404).json({ message: error.message, error: true });
  }
};

// Get users data by id from database
export const getUserById = async (req, resp) => {
  try {
    // const user = await User.find({ _id: req.params.id });
    const user = await User.findById(req.params.id);
    resp.status(200).json({
      message: "Success",
      error: false,
      data: user,
    });
  } catch (error) {
    resp.status(404).json({ message: error.message, error: true });
  }
};

// Edit user data
export const editUser = async (req, resp) => {
  try {
    let user = req.body;
    let editUser = new User(user);
    await User.updateOne({ _id: req.params.id }, editUser);
    resp.status(201).json({
      message: "User edited successfully!",
      error: false,
      data: editUser,
    });
  } catch (error) {
    resp.status(409).json({ message: error.message, error: true });
  }
};

// Delete user from  database
export const deleteUser = async (req, resp) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    resp.status(200).json({
      message: "User deleted successfully!",
      error: false,
    });
  } catch (error) {
    resp.status(404).json({ message: error.message, error: true });
  }
};
