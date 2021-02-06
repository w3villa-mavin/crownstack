const express = require("express");
const router = express.Router();
const CurrencyController = require('../controllers/currency.js')


router
  .route("/")
  .get(CurrencyController.getCurrencies)

module.exports = router;
