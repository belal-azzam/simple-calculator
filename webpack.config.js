var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Change to your "entry-point".
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        title:"test",
        template: 'src/index.html'
    })],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    devServer: {
             contentBase: './dist',
    },
         
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    }
};