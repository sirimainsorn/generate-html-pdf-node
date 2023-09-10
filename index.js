const express = require("express");
const bodyParser = require("body-parser");
const { getAllUser } = require("./controllers/user.controller");
const { getGeneratePDF } = require("./controllers/generatepdf.controller");

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello! Node.js");
});

app.get("/user-list", getAllUser);
app.get("/generate-pdf", getGeneratePDF);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});
