const express = require("express");
const router = express.Router();

const {isSignedIn, isAuthenticated} = require("../controlles/auth");
const { getToken,processPayment } = require("../controlles/paymentB");



router.get("/payment/gettoken/:userId", isSignedIn, isAuthenticated, getToken);
router.post("/payment/braintree/:userId", isSignedIn, isAuthenticated, processPayment);

module.exports = router;