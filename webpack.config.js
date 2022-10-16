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
    }

}