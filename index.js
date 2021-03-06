module.exports = function () {
  return {
    plugins: [
      require('@babel/plugin-transform-react-constant-elements'),
      require('@babel/plugin-transform-react-inline-elements'),
      require('babel-plugin-transform-react-remove-prop-types')['default'],
      require('babel-plugin-transform-react-pure-class-to-function-fork'),
      require('babel-plugin-transform-react-router-optimize')['default']
    ]
  }
};
