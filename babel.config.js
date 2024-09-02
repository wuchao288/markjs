module.exports = {
    presets: [
      '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
      "@babel/plugin-transform-nullish-coalescing-operator", // 可选链运算符 ?.
      "@babel/plugin-transform-optional-chaining"
    ]
  }
