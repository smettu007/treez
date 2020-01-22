const Inventory = require("../../../models/Inventory");

const getInventories = async (req, res, next) => {
  const inventories = await Inventory.find({});

  if (inventories && inventories.length > 0) {
    res.status(200).json(inventories);
  } else {
    res.status(204).send("No inventories found");
  }
};

module.exports = {
  getInventories
};
