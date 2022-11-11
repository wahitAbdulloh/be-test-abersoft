const Joi = require("joi");
const validateRequest = require("middleware/validate-request");

const AdminSchema = {
  loginSchema(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().required(),
    });

    validateRequest(req, next, schema);
  },

  changePassSchema(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email(),
      newPassword: Joi.string().required(),
      retypeNewPassword: Joi.ref("newPassword"),
    });
  },
};

module.exports = AdminSchema;
