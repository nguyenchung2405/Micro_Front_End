const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");
const path = require("path");

module.exports = {
    entry: path.join(__dirname,"./src/index"),
    mode: "development",
    devServer: {
        port: 3000
    },
    module: {
        rules: 
        [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,  
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                          presets: ["@babel/preset-env", "@babel/preset-react"],
                        },
                    },
                ]
            },
            {
              test: /\.(sa|sc|c)ss/i,
              use: ["style-loader","css-loader"]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name: "Host",
            remotes: {
              Remote: `Remote@http://localhost:4000/moduleEntry.js`,
              Remote2: `Remote2@http://localhost:5000/moduleEntry.js`,
            },
            shared: {
              ...dependencies,
              react: {
                singleton: true,
                eager: true,
                requiredVersion: dependencies["react"],
              },
              "react-dom": {
                singleton: true,
                eager: true,
                requiredVersion: dependencies["react-dom"],
              },
            },
          }),
    ],
    resolve: {
        extensions: [".js",".jsx"]
    },
    target: "web",
}