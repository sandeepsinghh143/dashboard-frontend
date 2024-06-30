const jwt = require("jsonwebtoken");
const CUBE_API_SECRET =
  "524f201bc6e907a648e9321ec471e88004290f49041588592081b6ec65d65cfa6fce8518017f183669edf0f06aa3d425af30fd102f1c0683c7f57cc2b65f21a4";

const cubejsToken = jwt.sign({}, process.env.CUBEJS_TOKEN, {
  expiresIn: "30d",
});

console.log(cubejsToken);
