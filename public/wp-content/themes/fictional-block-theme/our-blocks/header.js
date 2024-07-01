wp.blocks.registerBlockType( 'ourblocktheme/header', {
	title: 'Fictional Header',

	edit() {
		return wp.element.createElement(
			'div',
			{ className: 'our-placeholder-block' },
			'Header Placeholder'
		);
	},
	save() {
		return null;
	},
} );
