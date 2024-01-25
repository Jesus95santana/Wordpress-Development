wp.blocks.registerBlockType( 'ourplugin/are-you-paying-attention', {
	title: 'Are You Paying Attention?',
	icon: 'smiley',
	category: 'common',
	attributes: {
		skyColor: { type: 'string' },
		grassColor: { type: 'string' },
	},
	edit( props ) {
		function updateSkyColor( { target } ) {
			props.setAttributes( { skyColor: target.value } );
		}

		function updateGrassColor( { target } ) {
			props.setAttributes( { grassColor: target.value } );
		}

		return (
			<>
				<input
					type="text"
					placeholder={ 'sky color' }
					value={ props.attributes.skyColor }
					onChange={ updateSkyColor }
				/>
				<input
					type="text"
					placeholder={ 'grass color' }
					value={ props.attributes.grassColor }
					onChange={ updateGrassColor }
				/>
			</>
		);
	},
	save( props ) {
		return null;
	},
} );
