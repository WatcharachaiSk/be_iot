const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// const { userProfile } = require("./db");

// app.post("/lab02", (req, res) => {
//   const { username, password } = req.body;
//   return res.json({ username: username, password: password });
// });

// ? DB User
const db = require("./src/model/index.model");
db.sequelize.sync();

app.use("/api", require("./src/routes/index.routes.js"));

app.get("/", (req, res) => {
  return res.json({ msg: "helloIOT" });
});

app.listen(3200, () => {
  console.log("server start to " + 3200);
});
