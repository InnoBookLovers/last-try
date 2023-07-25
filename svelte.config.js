import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */

const dev = process.argv.includes('dev');

const config = {
	preprocess: vitePreprocess(),

	kit: {
		paths: {
			// base: dev ? '' : '/BookClub-app'
		},

		adapter: adapter()
	}
};

export default config;
