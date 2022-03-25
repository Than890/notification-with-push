const express = require("express");
const app = express();
const port = 7979;

app.listen(port, () => {
    console.log('Express server started on port: ' + port);
});
app.get("/", (req, res, next) => {
    res.sendFile(__dirname + '/view/index.html')
});