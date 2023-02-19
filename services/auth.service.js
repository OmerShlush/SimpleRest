import jwt from 'jsonwebtoken';

const getToken = () => {
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }, 'SECRET_KEY')
    return token;
}

export { getToken };