import { RichText } from '@wordpress/block-editor';
export default function Save( props ) {
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
