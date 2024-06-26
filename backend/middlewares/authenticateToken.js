const {verifyToken} = require('../utils/jwtUtilis');

async function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ error: 'Token sağlanmadı.' });

    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Geçersiz token formatı.' });
    

    try {
        const decoded = await verifyToken(token);
        req.auth = decoded;
        next();
    } catch (error) {
        res.status(403).json({ error: 'Geçersiz token.' });
    }
}

module.exports = authenticateToken;
