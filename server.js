const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");

app.use("/imgs", express.static("imgs"));
app.use(express.static("client/build"));

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    const filePath = path.join(__dirname, "client", "build");
    res.sendfile(filePath);
  });
}
app.listen(port, () => console.log("connected port : " + port));
