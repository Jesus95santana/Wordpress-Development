/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./blocks/**/*.js', // All JavaScript files within the blocks directory
		'./templates/**/*.php', // All PHP files within the templates directory
		'./**/*.php', // Any other PHP files in your theme
		'./css/*.scss',
		'./css/tailwind.css',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
