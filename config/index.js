const {
  PORT,
  DATABASE_HOST,
  DATABASE_HOST_LIVE,
  DATABASE_PASSWORD,
  DATABASE_NAME
} = require("./environment");
const { connect, get, close } = require("./connection");

module.exports = {
  PORT: PORT,
  DATABASE_HOST: DATABASE_HOST,
  DATABASE_PASSWORD: DATABASE_PASSWORD,
  DATABASE_NAME: DATABASE_NAME,
  DATABASE_HOST_LIVE: DATABASE_HOST_LIVE,
  connect: connect,
  get: get,
  close: close
};
