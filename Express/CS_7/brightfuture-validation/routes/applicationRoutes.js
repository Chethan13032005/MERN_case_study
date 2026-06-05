const express = require("express");
const router = express.Router();

const { validationResult } = require("express-validator");
const applicationValidation = require("../validators/applicationValidator");

router.post("/apply", applicationValidation, (req, res) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  res.json({
    status: "Application received successfully"
  });

});

module.exports = router;