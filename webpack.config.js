const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'final.js',
  },
  target: 'node',
};