require("dotenv").config();
const colors = require("colors");
const app = require("./app");
const config = require("./config");
require("./config/db").connectDB();

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`.bgGreen);
});
