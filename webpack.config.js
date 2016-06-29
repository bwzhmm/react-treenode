var webpack = require('webpack')
var path = require('path')

module.exports = {
    context: __dirname,
    entry:{
        demo:'./demos/demo.jsx'
    },
    output:{
        path:'dist/',
        filename:'[name].js',
        publicPath:'assets/'
    },
    module:{
        preLoaders: [{
            test: /\.jsx$/,
            exclude: [/node_modules/],
            loader: 'eslint',
        }],
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exculde:[/node_modules/],
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                exculde:[/node_modules/],
                loader:'json'
            }
        ]
    },
    resolve: {
        root: [__dirname, path.resolve(__dirname, "node_modules")],
        extensions: ['', '.js', '.jsx'],
        alias:{
            TreeNode:'src/TreeNode.jsx',
            Header:'src/components/Header.jsx',
            Children:'src/components/Children.jsx'
        }
    }
}
