import { InnerBlocks } from '@wordpress/block-editor';

wp.blocks.registerBlockType( 'blocktheme/banner', {
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
			<div className="test text-green-950">I am a test in green?</div>
			<div className="text-5xl font-bold text-green-950 underline p-[20]">
				I have changed again agian
			</div>
		</>
	);
}

function SaveComponent() {
	return (
		<div>
			{ /*<InnerBlocks.Content />*/ }
			<p className="text-3xl font-bold text-blue-500">Hello world</p>
		</div>
	);
}
