const db = require('../../data/dbConfig');
const Resources = require('./model');

exports.checkResourceUnique = async (req, res, next) => {
  const { resource_name } = req.body;
  try {
    const resourceName = await Resources.getByName(resource_name);
    if (resourceName) {
      res.status(400).json({ message: "that name is taken "});
    } else {
      next();
    }
  } catch(err) {
    next(err);
  };
};