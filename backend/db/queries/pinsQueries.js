const {
  db
} = require('./index.js')

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
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Created a pin"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const editPin = (req, res, next) => {
  db.none("UPDATE pins SET users_id=${users_id}, boards_id=${boards_id}, description=${description}, image_url=${image_url} WHERE id=${id}", 
  {
    users_id: parseInt(req.body.users_id),
    boards_id: parseInt(req.body.boards_id),
    description: req.body.description,
    image_url: req.body.image_url,
    id: parseInt(req.params.id)
    }
  )
  .then(() => {
    res.status(200).json({
      status: "success",
      message: "Updated a pin"
    });
  })
  .catch(err => {
    return next(err);
  });
};

const deletePin = (req, res, next) => {
  let pinId = parseInt(req.params.id);
  db
    .result("DELETE FROM pins WHERE id=$1", pinId)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "Removed pin",
        result: result
      });
    })
    .catch(err => next(err));
};

module.exports = {
  getAllPins,
  getSinglePin,
  createPin,
  editPin,
  deletePin
};