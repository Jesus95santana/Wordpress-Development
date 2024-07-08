import { InnerBlocks } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'blocktheme/banner', {
	title: 'Banner',
	edit: EditComponent,
	save: SaveComponent,
} );

function EditComponent() {
	const useLater = (
		<>
			<div className="test">I am a test</div>
			<div className="text-3xl font-bold underline">I am done</div>
		</>
	);
	return (
		<>
			<div className="p-6 max-w-sm mx-auto bg-green-200 rounded-xl shadow-md space-y-4">
				<InnerBlocks
					allowedBlocks={ [
						'core/paragraph',
						'core/heading',
						'core/list',
						'blocktheme/genericheading',
					] }
				/>
			</div>
		</>
	);
}

function SaveComponent() {
	return (
		<div className="p-6 max-w-sm mx-auto bg-green-200 rounded-xl shadow-md space-y-4">
			<InnerBlocks.Content />
		</div>
	);
}
