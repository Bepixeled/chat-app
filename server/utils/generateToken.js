import jwt from 'jsonwebtoken';

const generateToken = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })

    res.cookie("token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true, // The cookie is only accessible by the web server to prevent attacks like XSS
        sameSite:"strict", // The cookie is not sent with cross-origin requests to prevent CSRF attacks
        secure: process.env.NODE_ENV !== "development" // The cookie is only sent with HTTPS
    })
};

export default generateToken;