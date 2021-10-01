module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  plugins: [],
  // add costum rules
  rules: {
    "react/prop-types": 1,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
