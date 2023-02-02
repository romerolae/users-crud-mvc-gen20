const express = require("express");
const app = express();

const userRouter = require("./users/users.router");

//? Enable to receive format JSON
app.use(express.json());

app.get("./", (req, res) => {
    res.json({ message: "Server is running OK!" });
});

//? Enable connection with other files
app.use("/", userRouter);

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`Server started at port ${port}...`);
});

module.exports = app;
