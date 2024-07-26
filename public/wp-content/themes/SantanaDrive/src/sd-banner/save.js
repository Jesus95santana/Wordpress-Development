import { InnerBlocks } from '@wordpress/block-editor';
export default function Save() {
	return (
		<div className="homeBanner p-20 bg-blue-50">
			<div className="wrapper flex justify-around m-auto max-w-6xl">
				<div className="leftSection flex flex-col justify-center">
					<InnerBlocks.Content/>
				</div>
				<div className="rightSection ">
					<figure className="max-w-md">
						<img alt="" className="object-cover" src=""/>
					</figure>
				</div>
			</div>
		</div>
	);
}
