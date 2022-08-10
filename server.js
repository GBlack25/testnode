const bodyParser = require("body-parser");
const cors = require("cors");

const app = require("express")();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3001;
const HOST = "0.0.0.0";

app.post("/api/payment/notify", function (req, res) {
  console.log(req?.body);
  return res.json({ body: req?.body });
});

app.listen(PORT, HOST, function () {
  console.log("Server is running at port", PORT);
});
