const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
    module: {
        rules: [
            // JavaScript/JSX Loader
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            // CSS Loader
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            // For SCSS files
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            // File Loader (for images/fonts, if needed)
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/,
                use: ["file-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, "dist"),
        port: 3000,
        open: true,
        hot: true,
    },
};