import {
	Button,
	Flex,
	FlexBlock,
	FlexItem,
	Icon,
	TextControl,
} from '@wordpress/components';
import './index.scss';

wp.blocks.registerBlockType( 'ourplugin/are-you-paying-attention', {
	title: 'Are You Paying Attention?',
	icon: 'smiley',
	category: 'common',
	attributes: {
		skyColor: { type: 'string' },
		grassColor: { type: 'string' },
	},
	edit: EditComponent,
	save() {
		return null;
	},
} );

function EditComponent( props ) {
	function updateSkyColor( { target } ) {
		props.setAttributes( { skyColor: target.value } );
	}

	function updateGrassColor( { target } ) {
		props.setAttributes( { grassColor: target.value } );
	}

	return (
		<div className="paying-attention-edit-block">
			<TextControl label="Question:" style={ { fontSize: '20px' } } />
			<p style={ { fontSize: '13px', margin: '20px 0 8px 0' } }>
				Answers:
			</p>
			<Flex>
				<FlexBlock>
					<TextControl />
				</FlexBlock>
				<FlexItem>
					<Button>
						<Icon
							className={ 'mark-as-correct' }
							icon="star-empty"
						/>
					</Button>
				</FlexItem>
				<FlexItem>
					<Button isLink className={ 'attention-delete' }>
						Delete
					</Button>
				</FlexItem>
			</Flex>
			<Button isPrimary>Add another answer</Button>
		</div>
	);
}
