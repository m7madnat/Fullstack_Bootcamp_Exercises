const express = require("express");

const app = express();
const port = 3000;

app.get("/numbers", (req, res) => {
  res.send("This is a get route");
});

app.post("/numbers", (req, res) => {
  res.send("This is a post route");
});

app.delete("/numbers", (req, res) => {
  res.send("This is a delete route");
});

app.put("/numbers", (req, res) => {
  res.send("This is a put route");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
