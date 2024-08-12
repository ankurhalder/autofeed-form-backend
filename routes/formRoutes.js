const express = require("express");
const {
  getFormData,
  createOrUpdateFormData,
} = require("../controllers/formController");

const router = express.Router();

router.get("/formdata", getFormData);
router.post("/formdata", createOrUpdateFormData);

module.exports = router;
