import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps } className="homeBanner p-20 bg-blue-50">
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
