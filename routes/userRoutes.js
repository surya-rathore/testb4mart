const express = require("express");
const {
  signup,
  login,
  profileupdate,
  search_product,
  add_cart,
  get_address,
  deleteCollection,
  verifyotp,
  logout,
  getUserDetails,
  single_product,
  create_order
} = require("../controller/userController");
const { isAuthenticated } = require("../middleware/auth");
const router = express.Router();

// GET
router.get("/me", isAuthenticated, getUserDetails);
router.get("/logout", logout);
router.get("/delete", deleteCollection);
router.get("/singleproduct/:id", single_product);
router.get("/product/:name", search_product);

// PUT
router.put("/profileupdate", profileupdate);
router.put("/get_address", get_address);

// POST
router.post("/login", login);
router.post("/otp", verifyotp);
router.post("/add_cart", add_cart);
router.post("/create_order", create_order);


module.exports = router;
