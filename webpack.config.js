const path = require('path')

const webpack = require('webpack')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        open: true,
        hot: true, //第一部热更新
        port: 3000,
        contentBase: 'src'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //new 一个热更新的模块对象，这是启动热更新的第三步
        new htmlWebpackPlugin({ //内存中生成一个内存中的页面
            template: path.join(__dirname, "./src/index.html"), //指定模板页面，将来会根据指定的地址生成一份在内存中的HTML文件
            filename: 'index.html' // 指定生成的页面名称,注意输出文件必须为index ，因为dev模块会默认查询index命名的html文件
        })
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },

            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },

            { test: /\.sass$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, //调用规则从右到左，返回结果逐层返回

            { test: /\.vue$/, use: 'vue-loader' },

            { test: /\.png$/, use: 'url-loader' }
        ]
    }
}