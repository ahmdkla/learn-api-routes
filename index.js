const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", require("./routes"));
app.use("/student", require("./routes/student"));
app.use("/member", require("./routes/member"));

app.listen(PORT, () => {
    console.log(`This app listening on PORT: ${PORT}`);
});
