const path = require("path");

module.exports = (options = {}) => {
  return {
    define: {
      MONETIZATION_ADDRESS: options.address || null,
    },
    // client-side app enhancement file is
    enhanceAppFiles: path.resolve(__dirname, "enhanceApp.js"),
  };
};
