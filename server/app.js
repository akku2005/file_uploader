const express = require("express");
const cors = require("cors")
const cookieParser = require("cookie-parser");
const fileRoute = require('./routes/file');
constapp = express();

app.use(express.json({limit:"1mb"}))
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(fileRoute);
app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true
}
));

app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser());

module.exports = {
    app
}