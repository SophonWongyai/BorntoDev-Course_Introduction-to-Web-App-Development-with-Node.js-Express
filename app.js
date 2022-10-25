const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;
const servicesRouter = require("./src/router/servicesRouter");

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs");



app.use("/services", servicesRouter)

app.get("/", (req,res) => {

    res.render('index',{username: 'Prameza55+', customers: ["Kitti112","Kittikorn","Kitty"]});

})

app.listen(PORT, ()=>{
    debug("Listening on port" + chalk.green(" : "+PORT));
})