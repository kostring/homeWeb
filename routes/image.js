var imageConfig = require("../config").imageConfig;
var fs = require("fs");
var gm = require("gm");

var imageList = [];
var errorInfo = null;

function readImageList(){
    fs.readdir(imageConfig.path, function(err, files){
        files.forEach(function(fileName){
            if(fileName != "." && fileName != "..")
            {
                imageList.push(fileName);
            }
        });
    });
}

fs.stat(imageConfig.path, function(error, stats){
    if(error){
        console.log("Check Image Path error: " + error);
        throw error;
    }
    if(!stats.isDirectory()){
        console.log("Check Image Path error: Not a directory");
        throw "Check Image Path error: Not a directory";        
    }
    readImageList();
});

fs.exists(imageConfig.path, function(exists){
    if(!exists){
        errorInfo = "Image Path invalid!";
    }
    else{
        errorInfo = "No error!";
    }
});

module.exports = function(req, res, next){ 
    res.render("image", {"imageList" : imageList});
};

