const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.post("/create", CategoryController.createCategory);
router.put("/update/:id", CategoryController.updateCategory);
router.get("/get-details/:id", CategoryController.getDetailsCategory);
router.delete("/delete/:id", CategoryController.deleteCategory);
router.get("/get-all", CategoryController.getAllCategories);

module.exports = router;
