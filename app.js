const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "frontend", "build")));
app.use("/assets", express.static(path.join(__dirname)));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at port : ${PORT}`);
});
