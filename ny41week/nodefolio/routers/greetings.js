const router = require("express").Router();


router.get("/api/birthday", (req, res) => {
    res.send({ greeting: "Happy birthday!"});
});


module.exports = {
    router
};