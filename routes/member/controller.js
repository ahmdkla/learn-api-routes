const { get } = require("../../config");
const objectId = require("mongodb").ObjectId;

const getAll = (req, res) => {
  get()
    .collection("Member")
    .find({})
    .toArray()
    .then(result => {
      res.send({ message: "Get all data of Members", data: result });
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
      res.send({ message: "Get data of Members :", data: result });
    })
    .catch(error => {
      console.log(error);
    });
};

const deleteOne = (req, res) => {
  // let newMember = members.filter(item => item.id !== parseInt(req.params.id));
  // res.send(newMember);
  get()
    .collection("Member")
    .deleteOne(req.body)
    .then(deleteThis => {
      res.send({
        message: "Already delete this",
        data: deleteThis
      });
    })
    .catch(error => {
      console.log(error);
    });
};

const updateData = (req, res) => {
  // let newMember = members.filter(item => item.id !== parseInt(req.params.id));
  // res.send(newMember);
  get()
    .collection("Member")
    .updateOne({_id: objectId(req.params.id) },{$set: req.body} )
    .then(does => {
      res.send({
        message: "Updating data",
        data: does
      });
    })
    .catch(error => {
      console.log(error);
    });
};


const addMany = (req, res) => {
  get()
    .collection("Member")
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
    .collection("Member")
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
  addMany,
  updateData
};
