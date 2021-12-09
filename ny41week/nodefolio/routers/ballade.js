const router = require("express").Router();

router.get("/ballade", (req, res) => {
    res.send("<h1>BOOO</h1>");
})

module.exports = {
    router
};

