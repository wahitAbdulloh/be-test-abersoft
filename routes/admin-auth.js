const express = require("express");
const router = express.Router();
const authorize = require("middleware/authorize");
const adminSchema = require("schemas/admin-schema");
const adminController = require("controllers/admin-controller");

router.post("/login", adminSchema.loginSchema, adminController.login);

router.get("/profile", authorize(), adminController.getProfile);

module.exports = router;
