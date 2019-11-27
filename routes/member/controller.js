const { get } = require("../../config");
const objectId = require("mongodb").ObjectId;

const getAll = (req, res) => {
  get()
    .collection("Member")
    .find({})
    .toArray()
    .then(result => {
      res.send({ message: "Get all datas", data: result });
    })
    .catch(error => {
      console.log(error);
    });
};

const getById = (req, res) => {
  get()
    .collection("Member")
    .findOne({ _id: objectId(req.params.id) })
    .then(result => {
      res.send({ message: "Get id of", data: result });
    })
    .catch(error => {
      console.log(error);
    });
};

const deleteOne = (req, res) => {
  // let newMember = members.filter(item => item.id !== parseInt(req.params.id));
  // res.send(newMember);
};

const addMany = (req, res) => {
  get()
    .collection("members")
    .insertMany(req.body)
    .then(addingMany => {
      res.send({
        message: "A Bunch of Data successfully added",
        data: addingMany
      });
    })
    .catch(error => {
      console.log(error);
    });
};

const addOne = (req, res) => {
  get()
    .collection("member")
    .insertOne(req.body)
    .then(result => {
      res.send({ message: "Data successfully added", data: result });
    })
    .catch(error => {
      console.log(error);
    });
};

module.exports = {
  getAll,
  addOne,
  deleteOne,
  getById,
  addMany
};
