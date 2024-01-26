import { link } from '@wordpress/icons';
import {
	Button,
	Popover,
	ToolbarButton,
	ToolbarGroup,
} from '@wordpress/components';
import {
	__experimentalLinkControl as LinkControl,
	BlockControls,
	RichText,
} from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { useState } from '@wordpress/element';

registerBlockType( 'ourblocktheme/genericbutton', {
	title: 'Generic Button',
	attributes: {
		text: { type: 'string' },
		size: { type: 'string', default: 'large' },
		linkObject: { type: 'object' },
	},
	edit: EditComponent,
	save: SaveComponent,
} );

function EditComponent( props ) {
	const [ isLinkPickerVisible, setIsLinkPickerVisible ] = useState( false );

	function handleTextChange( arg ) {
		props.setAttributes( { text: arg } );
	}

	function buttonHandler() {
		setIsLinkPickerVisible( ( prev ) => ! prev );
	}

	function handleLinkChange( newLink ) {
		props.setAttributes( { linkObject: newLink } );
	}

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton onClick={ buttonHandler } icon={ link } />
				</ToolbarGroup>
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
				allowedFormats={ [] }
				value={ props.attributes.text }
				onChange={ handleTextChange }
				tagName="a"
				className={ `btn btn--${ props.attributes.size } btn--blue` }
			/>
			{ isLinkPickerVisible && (
				<Popover position="middlecenter">
					<LinkControl
						settings={ [] }
						value={ props.attributes.linkObject }
						onChange={ handleLinkChange }
					/>
					<Button
						variant="primary"
						onClick={ () => setIsLinkPickerVisible( false ) }
						style={ { display: 'block', width: '100%' } }
					>
						Confirm Link
					</Button>
				</Popover>
			) }
		</>
	);
}

function SaveComponent( props ) {
	return (
		<a
			href={ props.attributes.linkObject.url }
			className={ `btn btn--${ props.attributes.size } btn--blue` }
		>
			{ props.attributes.text }
		</a>
	);
}
