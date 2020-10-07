const express = require("express");
const mongoose = require("mongoose");
const app = express();
const schools = require("./routes/checkSchools");
const register = require("./routes/registration");
const verify = require("./routes/ktr_socp_get");
//const student_data=require('./routes/socp/student_data')
const cors = require("cors");
app.use(express.static("public"));

mongoose
  .connect(`mongodb://localhost:27017/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`db connected`);
  })
  .catch((err) => {
    console.log(err);
  });

// mongoose
//   .connect(
//     `mongodb+srv://chetan_db:chetan_pwd@cluster0.gcabm.mongodb.net/srm?retryWrites=true&w=majority`,
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .then(() => {
//     console.log(`db connected`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.use(express.json());
app.use(cors());
app.use("*", cors());
//app.use('/',api)

//app.use('/ktr',student_data)
app.use("/ktr", schools);
app.use("/reg", register);
app.get("/access_data", verify, (req, res) => {
  res.send("passed after next function");
});
// app.use('/rpm')
// app.use('/vdp')
// app.use('/delhi_ncr')

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started at port : ${port}`);
});
