wp.blocks.registerBlockType( 'blocktheme/banner', {
	title: 'Banner',
	edit: EditComponent,
	save: SaveComponent,
} );

function EditComponent() {
	return (
		<div>
			<div className="test">I am a test</div>
			<div className="Test2">I am another test</div>
		</div>
	);
}

function SaveComponent() {
	return (
		<div>
			<div className="test">I am a test</div>
			<div className="Test2">I am another test</div>
		</div>
	);
}
