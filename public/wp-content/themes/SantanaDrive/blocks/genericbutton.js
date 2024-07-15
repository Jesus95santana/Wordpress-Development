import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { RichText, BlockControls } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'blocktheme/genericbutton', {
	title: 'Generic Button',
	attributes: {
		text: { type: 'string' },
		size: { type: 'string', default: '5xl' },
	},
	edit: EditComponent,
	save: SaveComponent,
} );

function EditComponent( props ) {
	function handleTextChange( x ) {
		props.setAttributes( { text: x } );
	}

	return (
		<div className="p-6 max-w-sm mx-auto bg-green-200 rounded-xl shadow-md space-y-4">
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						isPressed={ props.attributes.size === '5xl' }
						onClick={ () => props.setAttributes( { size: '5xl' } ) }
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
						onClick={ () => props.setAttributes( { size: 'sm' } ) }
					>
						Small
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				allowedFormats={ [] }
				tagName={ 'a' }
				className={ `text-green-600 text-${ props.attributes.size }` }
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
