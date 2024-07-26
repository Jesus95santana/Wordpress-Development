import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import {
	RichText,
	BlockControls,
	useBlockProps,
} from '@wordpress/block-editor';

export default function Edit( props ) {
	const blockProps = useBlockProps();

	function handleTextChange( x ) {
		props.setAttributes( { text: x } );
	}

	return (
		<div { ...blockProps }>
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
