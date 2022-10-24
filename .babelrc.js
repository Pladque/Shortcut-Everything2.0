module.exports = function(api) {
    api.cache(true);
    const presets = ['@babel/preset-env'];

    return {
        presets,
        "plugins": [
            ["@babel/plugin-proposal-decorators", { "version": "legacy" }],
            "@babel/plugin-proposal-class-properties"
        ]
    }
}