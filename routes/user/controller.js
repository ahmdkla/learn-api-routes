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
    get()
      .collection("users")
      .find(
        {
          email: req.body.email
        },
        {
          projection: {
            _id: 0,
            email: 0
          }
        }
      )
      .toArray()
      .then(result => {
        if (result.length > 0) {
          let item = result.find(item => {
            return item.password === req.body.password;
          });

          if (item != null) {
            res.send({
              id: item.id,
              firstName: item.firstName,
              lastName: item.lastName
            });
          } else {
            res.send({
              message: "Email or password is wrong!"
            });
          }
        } else {
          res.send({
            message: "Email or password is wrong!"
          });
        }
      });
  },
  signUp: (req, res) => {
    get()
      .collection("users")
      .find({
        email: req.body.email
      })
      .toArray()
      .then(result1 => {
        if (result1.length > 0) {
          res.send({
            message: "Email have been used!"
          });

          return null;
        }

        get()
          .collection("users")
          .find({})
          .toArray()
          .then(result2 => {
            get()
              .collection("users")
              .insertOne({
                id: parseInt(result2.length) + 1,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
              })
              .then(result3 => {
                res.send({
                  message: "User is successfully added."
                });
              })
              .catch(error => {
                console.log(error);
              });
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
