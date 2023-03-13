const path = require("path");
module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    Src: path.resolve(__dirname, "src/"),
  };
  return config;
};
