import jwt from 'jsonwebtoken'
import "dotenv/config"
import User from '../models/userModel.js';

const protectedRoute = async (req, res, next) => {
  const header = req.headers["authorization"];
  if (!header) {
    return res.status(401).send({ status: 401, message: "No access token provided" });
  }

  const token = header.split(" ")[1];

  try {
    // use same secret as token creation
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET); 
    const user = await User.findById(decoded.userId); // ✅ match payload

    if (!user) {
      return res.status(404).send({ status: 404, message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Protected Middleware Error", error.message);
    if (error.message.includes("invalid signature")) {
      return res.status(403).send({ status: 403, message: "Invalid Access Token" });
    } else if (error.message.includes("jwt expired")) {
      return res.status(403).send({ status: 403, message: "Token expired" });
    }
    res.status(500).send({ status: 500, message: "Internal server error", error: error.message });
  }
};


const adminRoute = async (req, res, next) => {
    try {
        const { user } = req;

        if (!user.role.includes("admin")) {
            return res.status(401).send({ status: 401, message: "Unauthorized - Admin only" })
        }

        next();
    } catch (error) {
        console.log("Admin Middleware Error", error);
        res.status(500).send({ status: 500, message: "Internal server error", error: error.message })
    }
}

export { protectedRoute, adminRoute }