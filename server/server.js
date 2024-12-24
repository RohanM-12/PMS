const express = require("express");

const express = require("express");
const app = express();
const port = 5000;
app.use(express().json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/auth", authRoutes);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
