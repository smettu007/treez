const Inventory = require("../../../models/Inventory");

const deleteInventory = async (req, res, next) => {
  const deleteResult = await Inventory.findByIdAndDelete(req.params.id);
  if (deleteResult) {
    res.status(200).json({
      id: deleteResult.id
    });
  } else {
    res.status(204).send("No inventory found");
  }
};

module.exports = {
  deleteInventory
};
