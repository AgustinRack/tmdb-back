const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");
const db = require("./config/db");

app.use(express.json());
app.use(cookieParser());

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`listening on port : ${PORT}`);
  });
});
