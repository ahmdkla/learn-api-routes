const { member: members } = require("../../models");

const getAll = (req, res) => {
  res.send(members);
};

module.exports = {
  getAll
};
