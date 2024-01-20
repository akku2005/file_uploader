const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Function to create a JWT token
function generateToken(payload) {
    const secretKey = process.env.JWT_SECRET;

    // Check if the secret key is available
    if (!secretKey) {
        throw new Error('JWT_SECRET is missing in the .env file');
    }

    // Create and sign the token
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // You can adjust the expiresIn value

    return token;
}

module.exports = {
    generateToken,
};
