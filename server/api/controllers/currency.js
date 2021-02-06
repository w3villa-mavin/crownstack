const Currency = require("../models/currency");

exports.getCurrencies = (req, res) => {
  console.log("Fetching data..")
  Currency.find()
    .select("name code")  
    .exec()
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => console.log(err));
};