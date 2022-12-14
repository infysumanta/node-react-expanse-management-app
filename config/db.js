const mongoose = require("mongoose");
const config = require(".");

const connectDB = async () => {
  await mongoose
    .connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(
        `Database Running on ${mongoose.connection.host}`.bgCyan.white
      );
    })
    .catch((error) => {
      console.log(`${error}`.bgRed);
    });
};

module.exports = {
  connectDB,
};
