import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { RichText, BlockControls } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'blocktheme/sd-button', {
	title: 'SD Button',
	attributes: {
		text: { type: 'string' },
		size: { type: 'string', default: 'xl' },
	},
	edit: EditComponent,
	save: SaveComponent,
} );

function EditComponent( props ) {
	function handleTextChange( x ) {
		props.setAttributes( { text: x } );
	}

	return (
		<div className="buttonWrapper">
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						isPressed={ props.attributes.size === '5xl' }
						onClick={ () =>
							props.setAttributes( { size: '5xl' } )
						}
					>
						Large
					</ToolbarButton>

					<ToolbarButton
						isPressed={ props.attributes.size === 'base' }
						onClick={ () =>
							props.setAttributes( { size: 'base' } )
						}
					>
						Medium
					</ToolbarButton>
					<ToolbarButton
						isPressed={ props.attributes.size === 'sm' }
						onClick={ () =>
							props.setAttributes( { size: 'sm' } )
						}
					>
						Small
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				allowedFormats={ [] }
				tagName={ 'a' }
				className={ `px-6 py-2 bg-blue-600 text-white text-xl rounded-2xl text-${ props.attributes.size }` }
				value={ props.attributes.text }
				onChange={ handleTextChange }
			/>
		</div>
	);
}

function SaveComponent( props ) {
	return (
		<a
			href="#"
			className={ `btn text-green-600 text-${ props.attributes.size }` }
		>
			{ props.attributes.text }
		</a>
	);
}
