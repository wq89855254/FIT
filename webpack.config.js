const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");

const webpack = require("webpack");
module.exports = {
    devServer: {
        //这是配置webpack-dev-server命令参数的第二种形式
        open: true, //自动打开浏览器
        host: "localhost",
        port: "8088", //设置端口
        hot: true, //启用热更新的第一步
    },
    entry: path.join(__dirname, "src/main.js"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader", // 使用bable-loader来处理
                    options: {
                        // 指定参数
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets: {
                                        browsers: ["> 1%", "last 2 version"], //具体可以去babel-preset里面查看
                                    },
                                },
                            ],
                        ], // 指定哪些语法编译
                    },
                },
                exclude: "/node_module/", // 排除在外
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(scss|sass)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        esModule: false, // 这里设置为false 为了在HTML中引入img也能正常显示
                        limit: 1024,
                        name: "[hash:8].[name].[ext]",
                    },
                }, ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, "/src/public/index.html"), //指定模板页面，根据指定的路径生成内存中的页面
            filename: "index.html", //指定内存中生成的页面的名称
        }),
        new webpack.HotModuleReplacementPlugin(), //热更新第二步
        new CleanWebpackPlugin(),
    ],

    mode: "none",
};