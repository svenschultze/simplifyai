module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/recommended",
        "eslint:recommended"
    ],
    rules: {
        "vue/component-name-in-template-casing": ["error", "PascalCase"],
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        semi: [2, "never"],
        "vue/max-attributes-per-line": ["error", { "singleline": 2 }]
    },
    parserOptions: {
        parser: "babel-eslint"
    }
}
