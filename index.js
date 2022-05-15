const express = require("express");
const app = express();
const port = 8000;

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the Server : ${err}`);
  } else {
    console.log(`Yup! My Server is running at server : ${port}`);
  }
});
