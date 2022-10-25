const express = require('express');
const servicesRouter = express.Router();
const services = require("../data/services.json");

servicesRouter.route("/").get((req,res) =>{
    res.render("services",{
        services,
    }
    );
});

servicesRouter.route("/:id").get((req,res) => {
    const id = req.params.id;
    res.render("service",{
        service: services[id],
    });
});

module.exports = servicesRouter;