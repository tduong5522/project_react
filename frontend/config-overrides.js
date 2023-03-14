const path = require("path");
module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    appSrc: path.resolve(__dirname, "src/"),
  };
  config.resolve.extensions = [".js", ".jsx", ".ts", ".tsx"];
  return config;
};
