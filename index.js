const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { PORT, connect } = require("./config");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", require("./routes"));
app.use("/student", require("./routes/student"));
app.use("/member", require("./routes/member"));
app.use("/validate", require("./routes/validate"));
app.use("/user", require("./routes/user"));
app.use("/subject", require("./routes/subject"));

connect(() => {
  app.listen(PORT, () => {
    console.log(`This app listening on PORT: ${PORT || 3000}`);
  });
});
