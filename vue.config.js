const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: "true",
        __VUE_PROD_DEVTOOLS__: "false",
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
      }),
    ],
  },
  css: {
    loaderOptions: {
      scss: {
        // Example: For including a global variables file
        additionalData: `
        @import "@/assets/scss/variables.scss";
        @import "@/assets/scss/main.scss";`,
      },
    },
  },
});
