const path = require("path")

module.exports = {
    entry: {
        popup: path.resolve(__dirname, './src/Popup/index.js'), 
        content: path.resolve(__dirname, './src/Content/index.js'), 
        background: path.resolve(__dirname, './src/Background/index.js'), 
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
