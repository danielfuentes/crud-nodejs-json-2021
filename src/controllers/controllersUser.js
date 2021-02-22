const path = require('path');

module.exports = {
    registro: function (req,res){
        res.render(path.resolve(__dirname, '..', 'views', 'usuarios', 'registro'));
    },
    login: function(req,res){
        res.render(path.resolve(__dirname,'..','views','usuarios','login'))
    }
}