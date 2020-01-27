const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
    mode: 'production',
    entry: slsw.lib.entries,
    resolve: {
        extensions: [
            '.js',
            '.json',
            '.ts'
        ]
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /^(?!.*\.test\.ts$).*\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ],
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
    },
    devtool: 'source-map'
};
