const Inventory = require("../../../models/Inventory");
const Order = require("../../../models/Order");
const _ = require("lodash");

const updateOrder = async (req, res, next) => {
  try {
    // find the order
    const { inventories } = req.body;
    let order = await Order.findOne({
      _id: req.params.id,
      status: "processed"
    });
    if (!order) {
      return res.status(204).send({
        message: "cannot update order"
      });
    }

    // check if quantity is increased or decreased
    order.inventory.map(async inventory => {
      const reqInventory = _.find(inventories, ["id", inventory.id]);
      console.log("reqInventory", reqInventory);
      if (reqInventory) {
        const extraItems = reqInventory.quantity - inventory.quantity;
        if (extraItems < 0) {
          reqInventory.isItemReduced = true;
          reqInventory.items = extraItems;
        } else {
          reqInventory.isItemReduced = false;
          reqInventory.items = extraItems;
        }
        console.log("extraItems", extraItems);
      }
    });

    // update inventories accordingly
    inventories.forEach(async item => {
      const inventory = await Inventory.findById(item.id);

      // if more items are requested
      if (
        !item.isItemReduced &&
        item.items > 0 &&
        inventory.quantity > item.items
      ) {
        inventory.quantity -= item.items;
        await inventory.save();
      } else {
        // less items were requested so add inventory back
        inventory.quantity += -1 * item.items;
        await inventory.save();
      }
    });
    // format inventories to save it in the order
    order.inventory = inventories.map(item => {
      return {
        quantity: item.quantity,
        id: item.id
      };
    });
    const updateOrder = await order.save();
    res.status(201).send(updateOrder);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  updateOrder
};
