//? We are going to store everything related to REQ and RES in this file

const userControllers = require("./users.controllers");

//* userControllers.findAllUsers();
//* userControllers.createUser();
//* userControllers.findUserById();
//* userControllers.updateUser();

const getAllUsers = (req, res) => {
    const data = userControllers.findAllUsers();
    res.status(200).json(data);
};

const getUserById = (req, res) => {
    const id = req.params.id;
    const data = userControllers.findUserById(id);
    //? receives parameter by ID
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(404).json({ Message: "Invalid ID!" });
    }
};

const postUser = (req, res) => {
    const newUserData = req.body;
    const { firstName, lastName, email, password, age } = newUserData;

    if (!firstName || !lastName || !email || !password || !age) {
        res.status(400).json({ message: "Invalid data" });
    }

    const data = userControllers.createUser(newUserData);
    res.status(201).json(data);
};

const putUser = (req, res) => {
    const id = req.params.id;
    const newUserData = req.body;
    const data = userControllers.editUser(id, newUserData);
    //? Receives two parameters

    if (data) {
        res.status(201).json({ data, message: "User updated successfully" });
    } else {
        res.status(404).json({ Message: "Invalid ID!" });
    }
};

const deleteUser = (req, res) => {
    const id = req.params.id;
    const data = userControllers.deleteUser(id);

    if (data) {
        res.status(202).json({ message: "User deleted successfully" });
    } else {
        res.status(404).json({ message: "Invalid ID!" });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    putUser,
    deleteUser,
};
