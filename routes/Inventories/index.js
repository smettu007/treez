const router = require("express").Router();
const { getInventories } = require("./middlewares/get-inventories");
const { getInventory } = require("./middlewares/get-inventory");
const { postInventory } = require("./middlewares/post-inventory");
const { deleteInventory } = require("./middlewares/delete-inventory");
const { updateInventory } = require("./middlewares/update-inventory");

router.get("/", getInventories);
router.post("/", postInventory);
router.get("/:id", getInventory);
router.delete("/:id", deleteInventory);
router.put("/:id", updateInventory);

module.exports = router;
