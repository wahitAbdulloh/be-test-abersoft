const { expressjwt: jwt } = require("express-jwt");
const adminData = require("data/admin-data");
const tokenHistories = require("data/token-histories");

function authorize() {
  return [
    jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),

    async (req, res, next) => {
      const user = adminData.find((data) => data.id == req.auth.sub);

      // check user still exists
      if (!user || tokenHistories.indexOf(req.headers["authorization"]) > -1)
        return res.status(401).json({ message: "Unauthorized" });

      // authorization successful
      req.user = user;
      next();
    },
  ];
}

module.exports = authorize;
