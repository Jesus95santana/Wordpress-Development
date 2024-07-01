import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { BlockControls, RichText } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'ourblocktheme/genericheading', {
	title: 'Generic Heading',
	attributes: {
		text: { type: 'string' },
		size: { type: 'string', default: 'large' },
	},
	edit: EditComponent,
	save: SaveComponent,
} );

function EditComponent( props ) {
	function handleTextChange( arg ) {
		props.setAttributes( { text: arg } );
	}

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						isPressed={ props.attributes.size === 'large' }
						onClick={ () =>
							props.setAttributes( { size: 'large' } )
						}
					>
						Large
					</ToolbarButton>
					<ToolbarButton
						isPressed={ props.attributes.size === 'medium' }
						onClick={ () =>
							props.setAttributes( { size: 'medium' } )
						}
					>
						Medium
					</ToolbarButton>
					<ToolbarButton
						isPressed={ props.attributes.size === 'small' }
						onClick={ () =>
							props.setAttributes( { size: 'small' } )
						}
					>
						Small
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
				value={ props.attributes.text }
				onChange={ handleTextChange }
				tagName="h1"
				className={ `headline headline--${ props.attributes.size }` }
			/>
		</>
	);
}

function SaveComponent( props ) {
	function createTagName() {
		switch ( props.attributes.size ) {
			case 'large':
				return 'h1';
			case 'medium':
				return 'h2';
			case 'small':
				return 'h3';
		}
	}

	return (
		<RichText.Content
			value={ props.attributes.text }
			className={ `headline headline--${ props.attributes.size }` }
			tagName={ createTagName() }
		/>
	);
}
