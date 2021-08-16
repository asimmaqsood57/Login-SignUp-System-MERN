const express = require("express");

const mongoose = require("mongoose");
const userModel = require("./models/Users");
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

app.post("/signup", (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const password = req.body.password;
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
