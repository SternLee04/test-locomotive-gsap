/**
 * @format
 * @type {import('next').NextConfig}
 */

import {setupDevPlatform} from "@cloudflare/next-on-pages/next-dev"
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.(mp4|webm|ogg|avi|mov)$/,
			use: {
				loader: "file-loader",
				options: {
					publicPath: "/_next/static/media/",
					outputPath: "static/media/",
					name: "[name].[hash].[ext]",
				},
			},
		})

		return config
	},
}
if (process.env.NODE_ENV === "development") {
	await setupDevPlatform()
}

export default nextConfig
