const { db } = require('./index.js')

const getAllPins = (req, res, next) => {
  db.any("SELECT * FROM pins")
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data, 
        message: "Received all pins"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getSinglePin = (req, res, next) => {
  let pinsId = parseInt(req.params.id);
  db.one("SELECT * FROM pins WHERE id=$1", pinsId)
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Received one pin"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const createPin = (req, res, next) => {
  db
  .none(
    "INSERT INTO pins(users_id, boards_id, description, image_url) VALUES(${users_id}, ${boards_id}, ${description}, ${image_url})",
  req.body
  )
    .then(()=> {
      res.status(200).json({
        status: "Success",
        message: "Created a pin"
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllPins,
  getSinglePin,
  createPin
};