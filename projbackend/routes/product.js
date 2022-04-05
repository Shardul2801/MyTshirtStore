const express = require("express");
const router = express.Router();

const {getProductById,
    createProduct,
    getProduct,
    photo,
    deleteProduct,
    updateProduct,
    getAllProducts,
    getAllUniqueCategories} = require("../controlles/product")
const {isSignedIn, isAuthenticated, isAdmin} = require("../controlles/auth")
const {getUserById} = require("../controlles/user");

//all of params
router.param("userId", getUserById);
router.param("productId",getProductById)

//all of actual routes

//create routes
router.post("/product/create/:userId",isSignedIn, isAuthenticated, isAdmin,createProduct )

//Read routes
router.get("/product/:productId",getProduct);
router.get("/product/photo/:productId",photo);

//delete routes
router.delete("/product/:productId/:userId",isSignedIn, isAuthenticated, isAdmin, deleteProduct)

//update routes
router.put("/product/:productId/:userId",isSignedIn, isAuthenticated, isAdmin, updateProduct)

//listing route

router.get("/products", getAllProducts);

router.get("/products/categories", getAllUniqueCategories)
module.exports = router;