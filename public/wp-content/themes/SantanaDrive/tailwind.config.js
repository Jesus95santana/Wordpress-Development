/** @type {import('tailwindcss').Config} */
module.exports = {
	safelist: [ 'text-5xl', 'text-sm', 'text-base', 'text-lg' ],
	content: [
		'./blocks/**/*.js', // All JavaScript files within the blocks directory
		'./templates/**/*.php', // All PHP files within the templates directory
		'./**/*.php', // Any other PHP files in your theme
		'./css/*.scss',
		'Dummy.html',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
