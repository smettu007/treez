const Inventory = require("../../../models/Inventory");

const getInventory = async (req, res, next) => {
  const inventory = await Inventory.findById(req.params.id);
  if (inventory) {
    res.status(200).json(inventory);
  } else {
    res.status(204).send("No inventories found");
  }
};

module.exports = {
  getInventory
};
