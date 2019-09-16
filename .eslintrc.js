module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    // vue周りのルールでprettierとかぶるルールをオフにする設定
    'prettier/vue'
  ],
  // *.vue ファイルを lint にかけるために必要
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'eslint-disable-next-line': 0
  }
}

