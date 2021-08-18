const express = require("express");

require("dotenv").config();
const mongoose = require("mongoose");
const userModel = require("./models/Users");

const jwt = require("jsonwebtoken");

const auth = require("./middleware/auth");
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
  const user = await userModel.create({
    fullName: fullName,
    email: email,
    password: hashedPassword,
  });

  const token = jwt.sign(
    {
      user_id: user._id,
      email,
    },
    process.env.TOKEN_KEY,
    { expiresIn: "2h" }
  );
  user.token = token;
  res.status(201).json(user);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //   console.log(email, password);
  const user = await userModel.findOne({ email });

  console.log(user.email);
  if (user && passwordHash.verify(password, user.password)) {
    console.log("this is if");

    const token = jwt.sign(
      {
        user_id: user._id,
        email,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    user.token = token;

    res.status(200).json(user);
  }
  res.status(400).send("invalid  credentials");
});

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome");
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
