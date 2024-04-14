module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.js$": "babel-jest", // Transform JS files
  },
  transformIgnorePatterns: [
    // Adjust the pattern if needed
    "/node_modules/(?!oh-vue-icons)", // Transform 'oh-vue-icons'
  ],
};
