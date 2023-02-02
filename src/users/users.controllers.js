//? We will use this file to build the function that will handle the actions towards to the DataBase

//* Dummy database
const usersDB = [];
let baseId = 1;

//* 1 . Function to find all users
const findAllUsers = () => {
    return usersDB;
};

//* 2. Function to create a new user
const createUser = (data) => {
    const newUser = {
        id: baseId++,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        age: data.age,
    };
     usersDB.push(newUser);
    return newUser;
};

//* 3 Function to find a user by ID
const findUserById = (id) => {
    const user = usersDB.find((user) => id == user.id);
    return user;
};

//* 4 Function to edit an user by ID
const editUser =  (id, data) => {
    const userIndex = usersDB.findIndex((user) => user.id == id);
    if (userIndex === -1) {
        return null;
    }
    const user = usersDB[userIndex];
    user.firstName = data.firstName || user.firstName;
    user.lastName = data.lastName || user.lastName;
    user.email = data.email || user.email;
    user.password = data.password || user.password;
    user.age = data.age || user.age;
    usersDB[userIndex] = user;
    return user;
};

//* 5. Function to delete an user by ID

const deleteUser = (id) => {
    const userIndex = usersDB.findIndex((user) => user.id == id);
    if (userIndex === -1) {
        return false;
    }
     usersDB.splice(userIndex, 1);
    return true;
};

module.exports = {
    findAllUsers,
    createUser,
    findUserById,
    editUser,
    deleteUser,
};
