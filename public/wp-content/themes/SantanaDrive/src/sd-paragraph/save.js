import { RichText } from '@wordpress/block-editor';
export default function Save( props ) {
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
