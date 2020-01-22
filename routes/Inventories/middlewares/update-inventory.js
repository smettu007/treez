const Inventory = require("../../../models/Inventory");

const updateInventory = async (req, res, next) => {
  const inventory = await Inventory.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true
    }
  );
  if (inventory) {
    res.status(200).json(inventory);
  } else {
    res.status(204).send("No inventory found");
  }
};

module.exports = {
  updateInventory
};
