const express = require("express");
const app = express();

const applicationRoutes = require("./routes/applicationRoutes.js");
app.use(express.json());

app.use("/api", applicationRoutes);

app.listen(3000, () => {
  console.log("BrightFuture Validation API running on http://localhost:3000");
});