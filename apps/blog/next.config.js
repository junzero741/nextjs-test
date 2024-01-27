/** @type {import('next').NextConfig} */

const env = process.env.NODE_ENV;
const myRepoNextWebpackConfig = require('@repo/webpack-config/next')(env);
const { merge } = require('webpack-merge');

module.exports = {
	transpilePackages: ['@repo/ui'],
	webpack: (config) => {

		const blogNextWebpackConfig = {
			resolve: {
			},
			plugins: [	
			]
		}

		const mergedConfig = merge(config, myRepoNextWebpackConfig, blogNextWebpackConfig);

		if (myRepoNextWebpackConfig.optimization?.minimizer) {
			mergedConfig.optimization.minimizer = myRepoNextWebpackConfig.optimization.minimizer;
		}
		return mergedConfig;
	},
};