const User = require("./../models/user.schema");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User not Found");
    }
    user.password = undefined;
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error,
    });
  }
};

exports.register = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    user.password = undefined;
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error,
    });
  }
};
