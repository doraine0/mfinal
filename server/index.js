const express = require("express");
const app = express();
const port = 3007;
const db = require("./models");
const CustomerRouter = require("./routes/customers");
const StaffRouter = require("./routes/staff");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/customer", CustomerRouter);
app.use("/api/staff", StaffRouter);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
});
