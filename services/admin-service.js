const jwt = require("jsonwebtoken");

// this is just for example
const adminData = [
  {
    id: 1,
    email: "cong.fandi@abersoft.se",
    password: "thisismypassword",
  },
  {
    id: 2,
    email: "wahidAbdullah@outlook.com",
    password: "thisismypassword",
  },
];

const AdminService = {
  async login({ email, password }) {
    const admin = adminData.find(
      (data) => data.email == email && data.password == password
    );

    if (!admin) throw "Username or password is incorrect";

    const token = jwt.sign({ sub: admin.id }, process.env.SECRET, {
      expiresIn: "7d",
    });
    return { token: token };
  },
};

module.exports = AdminService;
