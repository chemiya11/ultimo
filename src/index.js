require("dotenv").config();
const express = require("express");


const route = require("./routes/index");

const app = express();
const PORT = process.env.PORT ;



app.use(express.json());
app.use("/", route);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
