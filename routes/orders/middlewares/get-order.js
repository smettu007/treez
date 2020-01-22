const Order = require("../../../models/Order");

const getOrderDetails = async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(204).send("No orders found");
  }
};

module.exports = {
  getOrderDetails
};
