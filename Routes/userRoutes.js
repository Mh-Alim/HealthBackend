const express = require("express");
const { getAllProduct, registerUser,  } = require("../Controllers/userController");

const router = express.Router();

router.route('/products').get(getAllProduct)
router.route('/register').post(registerUser);

module.exports = router;