const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
      
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Access denied' });
        }

        next(); // Role is authorized, proceed to the next middleware
    };
};

module.exports = authorizeRoles;
