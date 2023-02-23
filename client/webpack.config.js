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
      filename: '[name].bundle.js',
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
          {
            test: /\.css$/i,
            //This ones are npm packages that need to be installed
            use: ['style-loader', 'css-loader'],
        },
        
        
      ],
    },
  };
};
