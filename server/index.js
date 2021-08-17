const express = require("express");

const mongoose = require("mongoose");
const userModel = require("./models/Users");

const passwordHash = require("password-hash");
const cors = require("cors");
const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://asim:asim@reactwithnode.f909o.mongodb.net/programming?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("databse connected Successfully");
  })
  .catch((err) => {
    console.log("Something went wrong", err);
  });

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.post("/signup", async (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const password = req.body.password;

  const hashedPassword = passwordHash.generate(password);

  const user = new userModel({
    fullName: fullName,
    email: email,
    password: hashedPassword,
  });

  try {
    await user
      .save()
      .then(() => {
        console.log("Record is inserted successfully");
        res.send("Record is inserted successfully");
      })
      .catch((err) => {
        console.log("Something went wrong due to : ", err);
      });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
