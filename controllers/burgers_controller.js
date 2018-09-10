const express = require("express");
const burger = require("../models.burgers");

const router = express.Router();

router.get("/", function(req, res) {
    burger.all(function() {
        
    })
})