import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { RichText, BlockControls } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'blocktheme/sd-heading', {
	title: 'SD Heading',
	attributes: {
		text: { type: 'string' },
		size: { type: 'string', default: '4xl' },
	},
	edit: EditComponent,
	save: SaveComponent,
} );

function EditComponent( props ) {
	function handleTextChange( x ) {
		props.setAttributes( { text: x } );
	}

	return (
		<div>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						isPressed={ props.attributes.size === '4xl' }
						onClick={ () => props.setAttributes( { size: '4xl' } ) }
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
				allowedFormats={ [ 'core/bold' ] }
				tagName={ 'h1' }
				className={ `font-bold max-w-md text-${ props.attributes.size }` }
				value={ props.attributes.text }
				onChange={ handleTextChange }
			/>
		</div>
	);
}

function SaveComponent( props ) {
	function createTagName() {
		switch ( props.attributes.size ) {
			case '4xl':
				return 'h1';
			case 'base':
				return 'h2';
			case 'sm':
				return 'h3';
		}
	}

	return (
		<RichText.Content
			tagName={ createTagName() }
			value={ props.attributes.text }
			className={ `font-bold max-w-md text-${ props.attributes.size }` }
		/>
	);
}
