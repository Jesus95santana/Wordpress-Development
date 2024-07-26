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
