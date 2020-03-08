const express = require("express");
const router = express.Router();

const productController = require("../controllers/note");

// all routes
router.get("/", productController.getAllNotes);
router.get("/reset", productController.reset);
router.get("/:id", productController.getOneNote);
router.delete("/:id", productController.deleteOneNote);
router.put("/:id", productController.editOneNote);
router.post("/", productController.createOneNote);

module.exports = router;
