const path = require('path');

module.exports = {
  name: "activities",
  entry: './src/index.ts',
  devtool: 'source-map',
  target:'node',
  externals: {
    googleapis: "commonjs googleapis",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  optimization: {
    // We no not want to minimize our code.
    minimize: false
  },
  mode: 'development',
  output: {
    filename: 'index.js',
    library: 'activities',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'dist')
  }
};