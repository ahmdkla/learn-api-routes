const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/akla", (req, res) => {
  res.send({
    name: "Hafeez",
    class: "Super"
  });
});

app.get("/lala/:name", (req, res) => {
  const datas = [1, 2, 3, 4, 5];
  res.send({
    data: "Get one names in the param which it is named : " + req.params.name
  });
  console.log(data);
});

app.get("/", (req, res) => {
  const datas = [1, 2, 3, 4, 5];
  res.send({ data: datas });
  alert.log(data);
});

app.get("/down", (req, res) => {
  res.download("./12.jpg");
});

app.post("/tampan", (req, res) => {
  const datas = "tampan post";
  res.send({ data: datas });
  console.log("you are post" + datas);
});

app.put("/tampan", (req, res) => {
  const datas = "put hahaha";
  res.send({ data: datas });
  console.log("you are put" + datas);
});

app.listen(PORT, () => {
  console.log(`This app running on PORT : ${PORT}`);
  console.log(`TEEEEEEEEEEEEESSSSSSSSSSSSSSSSTTTT`);
});

app.get("/afa", (req, res) => {
  res.send({
    message: "New Item is added",
    data: {
      name: req.body.name,
      address: req.body.address,
      age: Number(req.body.age)
    }
  });
});

app.post('/tezz', (req,res)=>{
    res.status(201).json({
        message: "New Item is added",
        data:{
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }
    })
})
