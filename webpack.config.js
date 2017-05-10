var path = require('path');

module.exports = {
  entry: './public/scripts/inventory.js',
  output: {
    filename: 'inventory.bundled.js',
    path: path.resolve(__dirname, 'public/scripts')
  }
};
