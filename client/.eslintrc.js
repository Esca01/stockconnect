module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "vue/no-multiple-template-root": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
