const path = require("path")

module.exports = {
    entry: {
        popup: path.resolve(__dirname, './src/_popup/index.js'), 
        content: path.resolve(__dirname, './src/_content/index.js'), 
        background: path.resolve(__dirname, './src/_background/index.js'), 
    },
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "[name].js"
    },
    module:{
        rules: [
            {
                test:/\.js$/,
                exclude: /(node_modules)/,
                use:{
                    loader: 'babel-loader',
                },
            },
        ],

    },
    // plugins: [
    //     ["@babel/plugin-proposal-decorators", { "version": "legacy" }],
    // ]
}

// npm install --save-dev @babel/plugin-proposal-decorators
// install babel - https://www.youtube.com/watch?v=MX13Ezfzuf8
