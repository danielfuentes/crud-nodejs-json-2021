const path = require('path');

module.exports = (req,res,next) =>{
    let perfil = 1; // Para mi 9 es = Administrador
    if(perfil != 9){
        return res.render(path.resolve(__dirname, '../views/web/accesoDenegado'));    
    }else{
        next();
    }
}