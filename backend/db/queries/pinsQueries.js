const { db } = require('./index.js')

const getAllPins = (req, res, next) => {
  db.any("SELECT * FROM pins")
    .then(data => {
      res.status(200).json({
        status: "success",
        data: data, 
        message: "Received all pins"
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllPins
};