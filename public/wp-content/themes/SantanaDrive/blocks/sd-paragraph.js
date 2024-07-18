import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { RichText, BlockControls } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'blocktheme/sd-paragraph', {
	title: 'SD Paragraph',
	attributes: {
		text: { type: 'string' },
		size: { type: 'string', default: '2xl' },
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
						isPressed={ props.attributes.size === '5xl' }
						onClick={ () => props.setAttributes( { size: '5xl' } ) }
					>
						Large
					</ToolbarButton>
					<ToolbarButton
						isPressed={ props.attributes.size === '2xl' }
						onClick={ () => props.setAttributes( { size: '2xl' } ) }
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
				tagName={ 'p' }
				className={ `max-w-lg py-4 leading-relaxed text-${ props.attributes.size }` }
				value={ props.attributes.text }
				onChange={ handleTextChange }
			/>
		</div>
	);
}

function SaveComponent( props ) {
	function createTagName() {
		switch ( props.attributes.size ) {
			case '5xl':
				return 'h4';
			case '2xl':
				return 'p';
			case 'sm':
				return 'span';
		}
	}

	return (
		<RichText.Content
			tagName={ createTagName() }
			value={ props.attributes.text }
			className={ `max-w-lg py-4 leading-relaxed text-${ props.attributes.size }` }
		/>
	);
}
