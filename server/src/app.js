const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json());


app.get("/status", (req, res) => {
  res.send({
    message: "Hello World!",
  })
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
