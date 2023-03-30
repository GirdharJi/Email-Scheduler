const express = require("express");
const scheduler = require("node-cron");
const sendMail = require("./utils/mail");
const app = express();

const PORT = 1338;

scheduler.schedule("* * * * * *", async() => {
    console.log("I am running");
    sendMail();
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})