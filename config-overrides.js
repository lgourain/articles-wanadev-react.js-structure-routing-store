const path = require('path');
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");

module.exports = function override(config, env) {
    config["resolve"] = {
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            scenes: path.resolve(__dirname, 'src/scenes/'),
            services: path.resolve(__dirname, 'src/services/'),
            stores: path.resolve(__dirname, 'src/services/stores'),
            security: path.resolve(__dirname, 'src/services/security'),
            routes: path.resolve(__dirname, 'src/routes'),
        },
        extensions: ['.js'],
        plugins: [
            new DirectoryNamedWebpackPlugin(true)
        ]
    }

    return config;
}
