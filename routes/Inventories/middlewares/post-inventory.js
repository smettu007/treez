const Inventory = require("../../../models/Inventory");

const postInventory = async (req, res, next) => {
  const payload = req.body;
  const schema = new Inventory(payload);
  try {
    const result = await schema.save();
    if (result) {
      res.status(201).json({
        id: result.id
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = {
  postInventory
};
