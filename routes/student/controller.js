const { student: s } = require("../../models");

module.exports = {
  getAll: (req, res) => {
    res.send(s);
  },
  getById: (req, res) => {
    const findById = s.find(item => {
      return item.id === Number(req.params.id);
    });

    res.send(findById);
  },
  deleteById: (req, res) => {
    let newStudent = s.filter(item => item.id !== parseInt(req.params.id));
    res.send(newStudent);
  }
};
