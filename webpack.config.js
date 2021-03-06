const path = require('path')

module.exports = {
    mode: "production",
    entry: './src/index.tsx',
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: ['.js', '.ts', '.tsx'],
      },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
},
  devServer: {
      static: {
          directory: path.join(__dirname, '/dist'),
      },
      client: {
        overlay: false, 
    },
    hot: true,
    open: true,
    historyApiFallback: true,
  }
 }

// const path = require('path')

// module.exports = {
//     mode: "production",
//     entry: './src/index.tsx',
//     module: {
//         rules: [
//             {
//                 test:/\.tsx?$/,
//                 use: 'ts-loader',
//                 exclude: /node_modules/,
//             },
//         ],
//     },
//     resolve: {
//         extensions:['.js','.ts','.tsx'],
//     },
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'index.js',
//         publicPath: 'dist/',
//     },
//     devServer: {
//         hot: true,
//         open: true,
//         historyApiFallback: true,
//     }
// }