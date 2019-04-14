var path = require('path');

const srcPath = path.join(process.cwd(), "src");
console

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        loader: "awesome-typescript-loader",
        include: srcPath,
        exclude: /node_modules/
    },
      {
        test: /\.js$/,
        include: srcPath,
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs react' 
  }
};