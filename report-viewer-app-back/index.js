const express = require("express");
const app = express();
const PORT = 3002;
const content = require("./routes/content");
const reports = require("./routes/reports");
const cors = require("cors");
const options = require("./config/cors.js");

app.use(express.json());
app.use(cors(options));
app.use('/', content)
app.use('/reports', reports)



app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`)
});
