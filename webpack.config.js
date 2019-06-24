const webpack = require('webpack')//压缩
const HtmlWebpackPlugin = require('html-webpack-plugin')//复制并js文件自动引入
const path = require('path')
module.exports = {
    // entry: './src/index.js'
    entry: {
        abc: './src/index.js'// 引入进来
        // app: './src/index.js'
        // search: './src/index.js'
    },
    output: {
        filename: "[name].js",//名字 abc.js app.js
        path: __dirname + '/dist'//生成dist文件夹，__dirname当前目录
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),//webpack模块中，压缩js代码
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    module: {//各种解析器
        rules: [//解析器配置规则
            {
                test: /\.css$/,//所有css结尾的文件
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.posix.join('static','img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.posix.join('static', 'media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.posix.join('static', 'fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    devServer: {//反向代理
        proxy: {//代理服务器配置
            '/api': {
                target: 'https://m.kongfz.com',//代理接口
                changeOrigin: true,
                pathRewrite: {
                  '^/api': ''    //代理的路径
                }
            }
        }
    },
    resolve: {
        extensions: ['.js', '.css', '.scss', '.less'],//可以省略后缀名
        alias: {//别名设置
            '@': path.join(__dirname, './', 'src')
        }
    }
}