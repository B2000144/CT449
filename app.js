const express = require("express");
const contactsRouter = require("./app/route/contact.route");
const cors = require("cors");
 const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);

app.get("/", (req, res) => { 
    res.json({message: "welcome to contact book application."});
});

module.exports = app;
