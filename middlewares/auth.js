import jwt from 'jsonwebtoken';

const verifyToken = async (req, res, next) => {
    const { authorization } = req.headers;
    if(!authorization) return res.status(401).send({message: 'Unauthorized'});
    const token = authorization.replace("Bearer ", "");
    try {
        const decoded = jwt.verify(token, 'SECRET_KEY');
        next();
    } catch (error) {
        res.status(401).send({message: 'Unauthorized'})
    }
}

export { verifyToken };