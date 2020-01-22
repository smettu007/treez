const Order = require("../../../models/Order");
const Inventory = require("../../../models/Inventory");

const deleteOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order.status === "cancelled") {
      res.status(400).json({
        message: "order already cancelled"
      });
    } else {
      // add back quantity to their respective inventory
      order.inventory.forEach(async item => {
        const inventory = await Inventory.findById(item.id);
        inventory.quantity += item.quantity;
        await inventory.save();
      });
      order.status = "cancelled";
      const cancelOrder = await order.save();

      if (cancelOrder) {
        res.status(200).json({
          id: cancelOrder.id,
          cancelledDate: Date.now()
        });
      } else {
        res.status(204).send("No order found");
      }
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  deleteOrder
};
