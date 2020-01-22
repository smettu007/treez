const Order = require("../../../models/Order");
const Inventory = require("../../../models/Inventory");

const createOrder = async (req, res, next) => {
  try {
    const { email, inventories } = req.body;

    let errors = [];
    let loadedInventories = {};

    // check for quantity first
    await Promise.all(
      inventories.map(async item => {
        const inventory = await Inventory.findById(item.id);
        if (item.quantity > inventory.quantity) {
          errors.push({
            message: `Inventory ${inventory.name} has insufficient quantity`
          });
        }
        loadedInventories[inventory.id] = inventory;
      })
    );
    if (errors.length > 0) {
      res.status(400).json({
        status: "failed to place order",
        errors
      });
    } else {
      // update inventory quantity
      inventories.forEach(async item => {
        loadedInventories[item.id].quantity -= item.quantity;
        await loadedInventories[item.id].save();
      });

      //place the order once inventory is updated
      let order = new Order();
      order.email = email;
      order.date = Date.now();
      order.status = "processed";
      order.inventory = inventories;
      const orderStatus = await order.save();
      res.status(201).json(orderStatus);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createOrder
};
