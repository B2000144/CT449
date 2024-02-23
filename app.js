const express = require("express");
const cors = require("cors");

const ApiError = require("./app/api-error");
 const app = express();

 const contactsRouter = require("./app/route/contact.route");
app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);
app.get("/", (req, res) => { 
    res.json({message: "welcome to contact book application."});
});
// handle 404 response
app.use((req, res, next) => {
    return next(new ApiError(404,"Resource not found"));
});
app.use((err,req, res, next) => {
    return res.status(error.statusCode || 500).json({
        message: error.message || "internal Server error",
    });
});
module.exports = app;
