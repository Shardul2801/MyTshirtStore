const express = require("express");
const router = express.Router();

const{getUserById, getUser, updateUser, userPurchaseList } = require("../controlles/user");
const{isSignedIn, isAdmin, isAuthenticated} = require("../controlles/auth");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
// router.get("/users", getAllUsers)

router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);
router.get("/order/user/:userId", isSignedIn, isAuthenticated, userPurchaseList );

module.exports = router;