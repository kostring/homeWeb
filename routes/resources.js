var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    var resourceTypeList = ["Image", "Movie"];
    res.render("resources", {"resourceTypeList": resourceTypeList});
});

module.exports = router;
