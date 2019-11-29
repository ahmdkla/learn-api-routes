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
    addOne: (req, res) => {
        get()
            .collection("users")
            .insertOne(req.body)
            .then(result => {
                res.status(201).json({
                    message: "Data successfully added to users",
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
