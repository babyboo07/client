const { Mail } = require("@mui/icons-material");
const mongoose = require("mongoose");
const UserModel = require("./src/Backend/Model/UserModel.js");

mongoose.connect(process.env.MONGODB_URL, (error) => {
  if (error) console.log(error);
  else console.log("Connected successfully");
});

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("Connect successfully");

  const user = new UserModel({ name: "hehehe", email: "hehe@gmail.com" });

  user.save(function (err, user) {
    if (err) {
      console.log(err);
    }
    console.log(user.name + "hhhhhhh");
  });
});
async function run() {
  try {
  } catch (e) {
    console.log(e);
  }
}

var user1 = new UserModel({
  name: "mai",
  email: "mai@gmail.com",
});

run();
