module.exports = function (api) {
    api.cache(true);

    const presets = [];
    const plugins = [
        "babel-plugin-jsx-to-dom",
        "babel-plugin-syntax-jsx",
    ];

    return {
        presets,
        plugins
    };
};
