import { InnerBlocks } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'blocktheme/sd-banner', {
	title: 'SD Home Banner',
	attributes: {
		text: { type: 'string' },
	},
	edit: EditComponent,
	save: SaveComponent,
} );

function EditComponent() {
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
					<InnerBlocks.Content />
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
