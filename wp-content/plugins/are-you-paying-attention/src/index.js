wp.blocks.registerBlockType( 'ourplugin/are-you-paying-attention', {
	title: 'Are You Paying Attention?',
	icon: 'smiley',
	category: 'common',
	edit() {
		return (
			<>
				<h3>Hello world</h3>
				<div>hello wrold</div>
				<p>Hello</p>
			</>
		);
	},
	save() {
		return (
			<>
				<p>Hello </p>
			</>
		);
	},
} );
