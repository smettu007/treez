const router = require("express").Router();
const { createOrder } = require("./middlewares/create-order");
const { getOrders } = require("./middlewares/get-orders");
const { getOrderDetails } = require("./middlewares/get-order");
const { deleteOrder } = require("./middlewares/delete-order");
const { updateOrder } = require("./middlewares/update-order");

router.post("/", createOrder);
router.get("/", getOrders);
router.get("/:id", getOrderDetails);
router.delete("/:id", deleteOrder);
router.put("/:id", updateOrder);

module.exports = router;
