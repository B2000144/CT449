const app = require("./app");
const config = require("./app/config/index"); // Thay đổi đường dẫn import

// start server
const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
