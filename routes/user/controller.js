const { get } = require("../../config");
const objectId = require("mongodb").ObjectId;

module.exports = {
  getAll: (req, res) => {
    get()
      .collection("users")
      .find({})
      .toArray()
      .then(result => {
        res.send({ message: "Get all datas from users", data: result });
      })
      .catch(error => {
        console.log(error);
      });
  },
  signIn: (req, res) => {
    const { body } = req;
    get()
      .collection("users")
      .findOne({ email: body.email, password: body.password })
      .then(response => {
        const { email, firstName, _id } = response;
        res.status(200).json({
          message: "Login successfull",
          data: { _id, email, firstName }
        });
      })
      .catch(error => {
        console.log(error);
      });
  },
  getById: (req, res) => {
    const { id } = req.params;

    get()
      .collection("users")
      .findOne({ _id: objectId(id) })
      .then(result => {
        res.send({
          message: `Get data from users with id :${id}`,
          data: result
        });
      })
      .catch(error => {
        console.log(error);
      });
  },
  deleteOne: (req, res) => {
    const { id } = req.params;

    get()
      .collection("users")
      .deleteOne({ _id: objectId(id) })
      .then(result => {
        res.send({
          message: `Delete data from users with id ${id}`,
          data: result
        });
      })
      .catch(error => {
        console.log(error);
      });
  },
  updateOne: (req, res) => {
    const { id } = req.params;
    get()
      .collection("users")
      .updateOne({ _id: objectId(id) }, { $set: req.body })
      .then(result => {
        res.send({
          message: `Data from users successfully update with id ${id}`,
          data: result
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
