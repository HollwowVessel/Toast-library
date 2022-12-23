module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "simple-import-sort", "import", "prettier"],
  rules: {
    "import/no-unresolved": 0,
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/prefer-default-export": 0,
    "consistent-return": 0,
    "import/no-extraneous-dependencies": 0,
    "react/forbid-prop-types": 0,
    "import/extensions": 0,
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
    "react/react-in-jsx-scope": 0,
    "react/destructuring-assignment": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
