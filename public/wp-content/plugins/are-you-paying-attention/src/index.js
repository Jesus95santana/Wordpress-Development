import {
	Button,
	Flex,
	FlexBlock,
	FlexItem,
	Icon,
	PanelBody,
	PanelRow,
	TextControl,
} from '@wordpress/components';
import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import './index.scss';
import { ChromePicker } from 'react-color';

( function () {
	let locked = false;

	wp.data.subscribe( function () {
		const results = wp.data
			.select( 'core/block-editor' )
			.getBlocks()
			.filter( function ( block ) {
				return (
					block.name === 'ourplugin/are-you-paying-attention' &&
					block.attributes.correctAnswer === undefined
				);
			} );
		if ( results.length && locked === false ) {
			locked = true;
			wp.data.dispatch( 'core/editor' ).lockPostSaving( 'noanswer' );
		}
		if ( ! results.length && locked ) {
			locked = false;
			wp.data.dispatch( 'core/editor' ).unlockPostSaving( 'noanswer' );
		}
	} );
} )();

wp.blocks.registerBlockType( 'ourplugin/are-you-paying-attention', {
	title: 'Are You Paying Attention?',
	icon: 'smiley',
	category: 'common',
	attributes: {
		question: { type: 'string' },
		answers: { type: 'array', default: [ '' ] },
		correctAnswer: { type: 'number', default: undefined },
		bgColor: { type: 'string', default: '#EBEBEB' },
		theAlignment: { type: 'string', default: 'left' },
	},
	description: 'I am a description',
	example: {
		attributes: {
			question: 'Thats my name',
			answers: [ 'test1', 'test2', 'test3' ],
			correctAnswer: 3,
			bgColor: '#CFE8F1',
			theAlignment: 'center',
		},
	},
	edit: EditComponent,
	save() {
		return null;
	},
} );

function EditComponent( props ) {
	const blockProps = useBlockProps( {
		className: 'paying-attention-edit-block',
		style: { backgroundColor: props.attributes.bgColor },
	} );

	function updateQuestion( value ) {
		props.setAttributes( { question: value } );
	}

	function deleteAnswer( indexDelete ) {
		const newAnswers = props.attributes.answers.filter(
			function ( x, index ) {
				return index !== indexDelete;
			}
		);
		props.setAttributes( { answers: newAnswers } );

		if ( indexDelete === props.attributes.correctAnswer ) {
			props.setAttributes( { correctAnswer: undefined } );
		}
	}

	function markCorrect( index ) {
		props.setAttributes( { correctAnswer: index } );
	}

	return (
		<div { ...blockProps }>
			<BlockControls>
				<AlignmentToolbar
					value={ props.attributes.theAlignment }
					onChange={ ( x ) => {
						props.setAttributes( { theAlignment: x } );
					} }
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ 'Background Color' } initialOpen={ true }>
					<PanelRow>
						<ChromePicker
							color={ props.attributes.bgColor }
							onChangeComplete={ ( x ) => {
								props.setAttributes( { bgColor: x.hex } );
							} }
							disableAlpha={ true }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<TextControl
				label="Question:"
				value={ props.attributes.question }
				onChange={ updateQuestion }
				style={ { fontSize: '20px' } }
			/>
			<p style={ { fontSize: '13px', margin: '20px 0 8px 0' } }>
				Answers:
			</p>
			{ props.attributes.answers.map( ( answer, index ) => {
				return (
					<Flex>
						<FlexBlock>
							<TextControl
								autoFocus={ answer === undefined }
								value={ answer }
								onChange={ ( newValue ) => {
									const newAnswers =
										props.attributes.answers.concat( [] );
									newAnswers[ index ] = newValue;
									props.setAttributes( {
										answers: newAnswers,
									} );
								} }
							/>
						</FlexBlock>
						<FlexItem>
							<Button
								onClick={ () => {
									markCorrect( index );
								} }
							>
								<Icon
									className={ 'mark-as-correct' }
									icon={
										props.attributes.correctAnswer === index
											? 'star-filled'
											: 'star-empty'
									}
								/>
							</Button>
						</FlexItem>
						<FlexItem>
							<Button
								isLink
								className={ 'attention-delete' }
								onClick={ () => {
									deleteAnswer( index );
								} }
							>
								Delete
							</Button>
						</FlexItem>
					</Flex>
				);
			} ) }
			<Button
				isPrimary
				onClick={ () => {
					props.setAttributes( {
						answers: props.attributes.answers.concat( [
							undefined,
						] ),
					} );
				} }
			>
				Add another answer
			</Button>
		</div>
	);
}