module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    "react-native-reanimated/plugin", //convert ES6 to js
    ['module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      }]
  ],
}