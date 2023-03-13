const express = require("express");

const adminController = require("../controllers/admin-controller");

const router = express.Router();

router.get("/", adminController.getAllEbook);
router.post("/ebook", adminController.createEbook);
router.patch("/:ebookId", adminController.editEbook);
router.delete("/:ebookId", adminController.deleteEbook);

module.exports = router;
