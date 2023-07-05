module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./src'],
					alias: {
						'@types_': './src/@types',
						'@assets': './src/core/assets',
						'@helpers': './src/core/helpers',
						'@storage': './src/core/storage',
						'@utils': './src/core/utils',
						'@images': './src/core/assets/images',
						'@hooks': './src/hooks',
						'@screens': './src/screens',
						'@components': './src/components',
					},
				},
			],
		],
	};
};
