const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();

//database connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
  })
  .then((connection) => {
    console.log("connection made");
  });

//middlewear
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app, __dirname);

app.listen(PORT, () => {
  console.log("App is running on port ${PORT}!");
});
