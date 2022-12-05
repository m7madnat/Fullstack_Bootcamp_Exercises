const fs = require("fs");
const uniqid = require("uniqid");
const chalk = require("chalk");

const createUser = (name, email) => {
  const users = loadUsers();
  const duplicate = users.find((user) => user.email === email)
  if (!duplicate) {
    users.push({
      id: uniqid.time(),
      name: name,
      email: email,
    });
    console.log(chalk.green.inverse("user added successfully"));
    saveUsers(users);
  } else {
    console.log(chalk.red.inverse("user email is already in use"));
  }
};

const readUser = (id) => {
  const users = loadUsers();
  const user = users.find((user) => user.id ===id)
  if (user) {
    console.log(chalk.green.inverse(`user ID: ${id} was found`));
    console.log(chalk.green.inverse(`user name: ${user.name}`));
    console.log(chalk.green.inverse(`user email: ${user.email}`));
  } else {
    console.log(chalk.red.inverse(`user ID: ${id} was not found`));
  }
};

const updateUser = (id, newName, newMail) => {
  const users = loadUsers();
  const user = users.find((user) => user.id ===id)
  if (user) {
    if (newName) {
      user.name = newName;
    }
    if (newMail) {
      user.email = newMail;
    }
    saveUsers(users);
    console.log(chalk.green.inverse(`user ID: ${id} was updated`));
  } else {
    console.log(chalk.red.inverse(`user ID: ${id} was not found`));
  }
};

const deleteUser = (id) => {
  const users = loadUsers();
  const user = users.find((user) => user.id ===id)
  if (user) {
    const index = users.indexOf(user);
    users.splice(index, 1);
    saveUsers(users);
    console.log(chalk.green.inverse(`user ID: ${id} was deleted`));
  } else {
    console.log(chalk.red.inverse(`user ID: ${id} was not found`));
  }
};

const saveUsers = (users) => {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync("users.json", dataJSON);
};

const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  loadUsers: loadUsers,
  saveUsers: saveUsers,  
  createUser: createUser,
  readUser: readUser,
  deleteUser: deleteUser,
  updateUser: updateUser,
};
