/* eslint-disable @typescript-eslint/no-var-requires,no-console */
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
    const optimization = env === 'production' ? {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: true,
        })]
    } : {};

    return {
        optimization,
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                }
            ]
        },
    };
};