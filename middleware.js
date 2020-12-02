const jwt = require('jsonwebtoken');
require('dotenv').config()
const secret = process.env.SECRET

const withAuth = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	} 
	res.redirect("/login"); 
}


module.exports = withAuth;