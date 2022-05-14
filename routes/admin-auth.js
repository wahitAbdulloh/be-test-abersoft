const express = require("express");
const router = express.Router();
const adminSchema = require("schemas/admin-schema");
const adminController = require("controllers/admin-controller");

router.post("/login", adminSchema.loginSchema, adminController.login);

module.exports = router;
