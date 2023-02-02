/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
	experimental: {
		appDir: false,
	},
	i18n,
	webpack: (config) => {
		// eslint-disable-next-line no-param-reassign
		config.resolve.alias = {
			...config.resolve.alias,
			'~': __dirname,
		}
	},
}

module.exports = nextConfig
