const mongoose = require('mongoose');

mongoose
    .set("strictQuery", false)
    .connect("mongodb://localhost/mean-employees", )
    .then((db) => console.log("Db is connected"))
    .catch((err) => console.error(err));