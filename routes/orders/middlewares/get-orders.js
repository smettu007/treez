const Order = require("../../../models/Order");

const getOrders = async (req, res, next) => {
  const orders = await Order.find({});

  if (orders && orders.length > 0) {
    res.status(200).json(orders);
  } else {
    res.status(204).send("No order found");
  }
};

module.exports = {
  getOrders
};
