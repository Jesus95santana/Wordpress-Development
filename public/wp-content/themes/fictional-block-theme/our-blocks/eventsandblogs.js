wp.blocks.registerBlockType( 'ourblocktheme/eventsandblogs', {
	title: 'Events and Blogs',

	edit() {
		return wp.element.createElement(
			'div',
			{ className: 'our-placeholder-block' },
			'Events and Blogs Placeholder'
		);
	},
	save() {
		return null;
	},
} );
