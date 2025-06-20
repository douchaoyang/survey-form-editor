const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 2233,
  },
  css: {
    sourceMap: process.env.NODE_ENV !== "production",
  },
});
