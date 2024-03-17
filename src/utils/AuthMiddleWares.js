const jwt = require('jsonwebtoken');

function itsAuth(req, res, next){
    
    const auth = req.get('Authorization');

    if(!auth){
        return res.status(401).json({message:'No autorizado'});
    }

    try {
        const token=auth.split(" ")[1];
        const decodeToken=jwt.verify(token, process.env.SECRET_KEY);
        req.user=decodeToken;
        next();
    } catch (error) {
        //next(new Error('Token Vencido'))
        return res.status(401).json({message:"Token invalido o vencido"})
    }
}

function isAdmin(req, res, next){
    if (req.user.role !== "Admin") {
        return res.status(403).json({message:"Acceso denegado"})
    }
    next()
}

module.exports={itsAuth, isAdmin}