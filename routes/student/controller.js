const { get } = require("../../config");
const objectId = require("mongodb").ObjectId;

module.exports = {
  getAll: (req, res) =>
    get()
      .collection("Student")
      .find({})
      .toArray()
      .then(result => {
        res.send({ mesage: "Get all data of Students", data: result });
      })
      .catch(error => {
        console.log(error);
      }),
  getById: (req, res) =>
    get()
      .collection("Student")
      .findOne({ _id: objectId(req.params.id) })
      .then(result => {
        res.send({ message: "Get data of Students :", data: result });
      })
      .catch(error => {
        console.log(error);
      }),

  deleteOne: (req, res) =>
    get()
      .collection("Student")
      .deleteOne(req.body)
      .then(deleteThis => {
        res.send({
          message: "Delete this...",
          data: deleteThis
        });
      })
      .catch(error => {
        console.log(error);
      }),

  updateData: (req, res) =>
    get()
      .collection("Student")
      .updateOne({ _id: objectId(req.params.id) }, { $set: req.body })
      .then(does => {
        res.send({
          message: "Updating data",
          currentData: does
        });
      })
      .catch(error => {
        console.log(error);
      }),
  addOne: (req, res) =>
    get()
      .collection("Student")
      .insertOne(req.body)
      .then(result => {
        res.send({ message: "Data added successfully", dataAdded: result });
      })
      .catch(error => {
        console.log(error);
      })
};
