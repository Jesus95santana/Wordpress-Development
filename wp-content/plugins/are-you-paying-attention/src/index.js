wp.blocks.registerBlockType( 'ourplugin/are-you-paying-attention', {
	title: 'Are You Paying Attention?',
	icon: 'smiley',
	category: 'common',
	edit() {
		return (
			<>
				<h3>sdfadsfsad</h3>
				<div>sdafdsfasdf</div>
				<p>Hesdafsadfasdfsdafsdfaasdfllo</p>
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
