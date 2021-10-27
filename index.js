const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//middle weres
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  app.send("Database Running Successfully");
});

app.listen(port, () => {
  console.log("db live on port:-", port);
});
