const express = require("express");
const app = express();

const PORT = 1338;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})