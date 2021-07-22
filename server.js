const express = require("express");
const connectDB = require("./utils/db");
require("./services/cache");

connectDB();

const postsRoutes = require("./routes/post");
const app = express();

app.use(express.json());
app.use(postsRoutes);

app.listen(3000, () => {
  console.log(`Server at http://localhost:3000`);
});
