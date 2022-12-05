const yargs = require("yargs");
const users = require("./users.js");

yargs.command({
  command: "add",
  describe: "new user",
  builder: {
    name: {
      describe: "name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "email",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    users.createUser(argv.name, argv.email);
  },
});

yargs.command({
  command: "get",
  describe: "read user",
  builder: {
    id: {
      describe: "id",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    users.readUser(argv.id);
  },
});

yargs.command({
  command: "update",
  describe: "update user",
  builder: {
    id: {
      describe: "id",
      demandOption: true,
      type: "string",
    },
    name: {
      describe: "new name",
      type: "string",
    },
    email: {
      describe: "new email",
      type: "string",
    },
  },
  handler(argv) {
    users.updateUser(argv.id, argv.name, argv.email);
  },
});

yargs.command({
  command: "remove",
  builder: {
    id: {
      describe: "id",
      demandOption: true,
      type: "string",
    },
  },
  describe: "remove user",
  handler(argv) {
    users.deleteUser(argv.id);
  },
});

yargs.parse();
