import { InnerBlocks } from '@wordpress/block-editor';
import { RichText, BlockControls } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'blocktheme/sd-banner', {
	title: 'SD Home Banner',
	attributes: {
		text: { type: 'string' },
	},
	edit: EditComponent,
	save: SaveComponent,
} );

function EditComponent( props ) {
	function handleTextChange( x ) {
		props.setAttributes( { text: x } );
	}

	return (
		<div className="homeBanner p-20 bg-blue-50">
			<div className="wrapper flex justify-around m-auto max-w-6xl">
				<div className="leftSection flex flex-col justify-center">
					<InnerBlocks
						allowedBlocks={ [
							'blocktheme/sd-heading',
							'blocktheme/sd-button',
							'blocktheme/sd-paragraph',
						] }
					/>
				</div>
				<div className="rightSection ">
					<figure className="max-w-md">
						<img alt="" className="object-cover" src="" />
					</figure>
				</div>
			</div>
		</div>
	);
}

function SaveComponent() {
	return (
		<div className="homeBanner p-20 bg-blue-50">
			<div className="wrapper flex justify-around m-auto max-w-6xl">
				<div className="leftSection flex flex-col justify-center">
					<h3 className="text-4xl font-bold max-w-md">
						Lorem ipsum dolor sit amet.
					</h3>
					<p className="text-2xl max-w-lg py-4 leading-relaxed">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Ex iste consectetur adipisicing elit. Ex iste
						natus quisquam.
					</p>
					<div className="buttonWrapper">
						<button className="px-6 py-2 bg-blue-600 text-white text-xl rounded-2xl">
							Lorem
						</button>
					</div>
					<p className="comment text-sm py-4">
						Lorem ipsum dolor sit amet , consectetur adipisicing
						elit. Nemo.
					</p>
				</div>
				<div className="rightSection ">
					<figure className="max-w-md">
						<img alt="" className="object-cover" src="" />
					</figure>
				</div>
			</div>
		</div>
	);
}
