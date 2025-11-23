// allow only authorized users access your library API.

const jwt = require('jsonwebtoken') 

const authMiddleware = async(req,res,next) => {
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({error: "Unauthorized. Token not provided"})
    }

    const authToken = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(authToken, process.env.JWT_SECRET)
        req.user = decoded
        next()
    }catch(err){
        res.status(401).json({error: "Invalid or expired token"})
    }

}

module.exports = {
    authMiddleware
}