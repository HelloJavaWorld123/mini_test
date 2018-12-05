// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //是否强制使用 === 否
    'eqeqeq': 0,
    //在声明的无用的变量时 是否报错 否
    'no-unused-var': 0,
    //关键字后使用一致的空格 否
    'keyword-space': 0,
    //内容注释使用一直的注释形式 否
    'space-comment': 0,
    'space-before-function-paren':0,
    //允许句子以分号结尾
    'semi':0,
    'comma-spacing':0,
    'key-spacing':0,
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    getApp: true,
    getPage: true,
    requirePlugin: true
  }
}
