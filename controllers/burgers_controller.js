const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
        var newBurger = {
            burgers: data
        };
    res.render("index", newBurger);
    })
})

router.post("/api/burgers", function(req, res) {
    burger.create("burger_name", req.body.burger, function(result) {
        res.json({ id: result.insertId });
    })
})


module.exports = router;