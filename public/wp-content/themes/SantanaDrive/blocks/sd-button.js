import {
	ToolbarGroup,
	ToolbarButton,
	Popover,
	Button,
} from '@wordpress/components';
import { link } from '@wordpress/icons';
import {
	RichText,
	BlockControls,
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { useState } from '@wordpress/element';

registerBlockType( 'blocktheme/sd-button', {
	title: 'SD Button',
	attributes: {
		text: { type: 'string' },
		size: { type: 'string', default: 'xl' },
		linkObject: { type: 'object' },
	},
	edit: EditComponent,
	save: SaveComponent,
} );

function EditComponent( props ) {
	const [ isLinkVisible, setIsLinkVisible ] = useState( false );
	function handleTextChange( x ) {
		props.setAttributes( { text: x } );
	}
	function buttonHandler() {
		setIsLinkVisible( ( prev ) => ! prev );
	}
	function handleLink( newLink ) {
		props.setAttributes( { linkObject: newLink } );
	}

	return (
		<div className={ 'ButtonWrapper' }>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton onClick={ buttonHandler } icon={ link } />
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton
						isPressed={ props.attributes.size === 'xl' }
						onClick={ () => props.setAttributes( { size: 'xl' } ) }
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
				className={ `px-6 py-2 bg-blue-600 text-white rounded-2xl text-${ props.attributes.size }` }
				value={ props.attributes.text }
				onChange={ handleTextChange }
			/>
			{ isLinkVisible && (
				<Popover position={ 'middle center' }>
					<LinkControl
						settings={ [] }
						value={ props.attributes.link }
						onChange={ handleLink }
					/>
					<Button
						variant={ 'primary' }
						onClick={ () => {
							setIsLinkVisible( false );
						} }
						style={ { display: 'block', width: '100%' } }
					>
						Confirm Link
					</Button>
				</Popover>
			) }
		</div>
	);
}

function SaveComponent( props ) {
	return (
		<div className="ButtonWrapper">
			<a
				href={ props.attributes.linkObject.url }
				className={ `px-6 py-2 bg-blue-600 text-white rounded-2xl text-${ props.attributes.size } ` }
			>
				{ props.attributes.text }
			</a>
		</div>
	);
}
