import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'blocktheme/genericheading', {
	title: 'Generic Heading',
	edit: EditComponent,
	save: SaveComponent,
} );

function EditComponent() {
	return (
		<div className="p-6 max-w-sm mx-auto bg-green-200 rounded-xl shadow-md space-y-4">
			This is a block
		</div>
	);
}

function SaveComponent() {
	return (
		<div className="p-6 max-w-sm mx-auto bg-green-200 rounded-xl shadow-md space-y-4">
			This is heading block
		</div>
	);
}
