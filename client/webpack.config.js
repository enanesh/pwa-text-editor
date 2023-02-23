const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    //sets the name of the directory and wich directory you wanted to put it in  
    output: {
      filename: '[name].bundle.js',//.[name]bundles generates a bundle for each entry
      path: path.resolve(__dirname, 'dist'),
    },

    //processing modules after they have being model
    plugins: [

      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Webpack Plugin',
      }),
      
    ],

    module: {
      rules: [
      // CSS loader
          {
            test: /\.css$/i,
            //This ones are npm packages that need to be installed
            use: ['style-loader', 'css-loader'],
        },
        // Babel loader
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components])/,
          // We use babel-loader in order to use ES6.
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        
        
      ],
    },
  };
};
