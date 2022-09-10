const jwt = require("jwt-decode");

module.exports = function (req, res, next) {
	const token = req.headers.authorization.split(" ")[1];

	const decoded = jwt.default(token);
	const isAdmin = decoded.extension_isAdmin || false;
	isAdmin ? next() : res.status(401).send({ message: "Unauthorized." });
};
