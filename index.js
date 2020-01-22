const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  app = express(),
  routes = require("./constants/routes"),
  port = routes.port,
  mongoose = require("mongoose");

// mongodb connection
mongoose
  .connect("mongodb://smettu:Treez%402020@ds211259.mlab.com:11259/treez", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(result => {
    console.log("MongoDB connection successful");
  })
  .catch(err => {
    throw new Error(err);
  });

app.use(bodyParser.json());

// for now :)
app.use(cors({ origin: "*" }));

require("./routes")(app);

let server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

module.exports = server;
